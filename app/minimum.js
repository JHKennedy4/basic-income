import React from 'react'
import Numeral from 'numeral'
import raw_income_data from './clean_income.js'
import nv from 'nvd3'
import revenues from './revenuesagain.js'

export default class Min extends React.Component {

  constructor(props) {
    super(props);
    var min_cost = this.calculate_cost(15000)
    this.state = {
      value: 15000,
      cost: min_cost.cost,
      households: min_cost.households
    }
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  calculate_cost(basic_income) {
    var income_range_index = 0
    var sum_households_below = 0
    var sum_income_delta = 0
    for (var index = 0; index < raw_income_data.length; index++) {
      var element = raw_income_data[index]
      var income_range_upper = element["range_upper"]
    if (income_range_upper > basic_income) {
      income_range_index = index
      return {
        cost: sum_income_delta,
        households: sum_households_below
      }
    }
      var households = element["households"]
      sum_households_below = element["cumulative"]
      var average = element["average"]
      sum_income_delta = sum_income_delta + ((basic_income - average) * households)
    }
  }

  format_money(n) {
    return Numeral(n).format('$0,0.00');
  }

  format_house(n) {
    return Numeral(n).format('0,0');
  }

  handleChange(evt) {
    var min_cost = this.calculate_cost(evt.target.value);
    this.setState({
      value: evt.target.value,
      cost: min_cost.cost,
      households: min_cost.households
    })
    revenues[0].values[3]= {label: "Minimum income", value: min_cost.cost }

    d3.select('#the-min-picture svg')
      .datum(revenues)
      .transition().duration(500)
      .call(this.state.chart)
      ;
      nv.utils.windowResize(this.state.chart.update);
  }

  componentDidMount() {
    revenues[0].values.push({label: "Minimum income", value: this.state.cost })
    nv.addGraph(() => {
    var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(true)
      .tooltips(false)
      .showValues(true)

    d3.select('#the-min-picture svg')
      .datum(revenues)
      .transition().duration(500)
      .call(chart)
      ;
      nv.utils.windowResize(chart.update);
      this.setState({ chart: chart })
      return chart;
    });
  }

  render() {

    return (
        <div className="min-income">
        <h2>Guaranteed Minimum Income</h2>
          <label htmlFor="your-income">Minimum Income: </label>
          <input id="your-income" type="text" value={this.state.value}
            onChange={this.handleChange}/>
          <p>It would cost {this.format_money(this.state.cost)} and affect {this.format_house(this.state.households)} households
          across the country.</p>

          <div id="the-min-picture"><svg></svg></div>

          <h1>The Most Important Graph in American Public Policy</h1>
          <div id="the-big-picture"></div>
        </div>
    );
  }
}

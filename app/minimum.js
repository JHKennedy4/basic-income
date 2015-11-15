import d3 from 'd3'
import React from 'react'
import raw_income_data from './clean_income.js'
import revenues from './revenues.js'

export default class Min extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income_data: raw_income_data,
    }
  }

  calculate_cost(basic_income) {
    var income_range_index = 0;
    var sum_households_below = 0;
    var sum_income_delta = 0;
    for (var index = 0; index < raw_income_data.length; index++) {
      var element = raw_income_data[index];
      var income_range_upper = element["range_upper"]
    if (income_range_upper > basic_income) {
      income_range_index = index
      return sum_income_delta;
    }
      var households = element["households"]
      sum_households_below = element["cumulative"]
      var average = element["average"]
      sum_income_delta = sum_income_delta + ((basic_income - average) * households)
    }
  }

  render() {
    var x = this.calculate_cost(15000);
    console.log("val: " + x);
    return (
      <div className="content">
        <h2>The Federal Budget</h2>
        <div className="flex-container">
          <div>
            <h3>Expenditures</h3>
            <div id="federal-expenditures">Pie</div>
          </div>
          <div>
            <h3>Revenues</h3>
            <div id="federal-revenues">Pie</div>
          </div>
        </div>

        <div className="flex-container">
          <div>
            <h3>Cash Transfers as Percent of Expenditures</h3>
            <div id="federal-cash-transfers">Pie</div>
          </div>
          <div>
            <h3>Personal Income Tax as Percent of Revenues</h3>
            <div id="federal-income-tax-revenue">Pie</div>
          </div>
        </div>

        <div className="">
          <h2>Cash Transfer Breakdown</h2>
          <div id="cash-transfer-breakdown">Bar?</div>
        </div>

        <div className="">
          <h1>The Most Important Graph in American Public Policy</h1>
          <label htmlFor="your-income">Your Income</label>
          <input id="your-income" type="text" />
          <div id="the-big-picture"></div>
        </div>
        <p>{this.calculate_cost(30000)}</p>
      </div>
    );
  }
}


export default Min

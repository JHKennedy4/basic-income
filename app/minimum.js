import d3 from 'd3'
import React from 'react'
import raw_income_data from './clean_income.js'

export default class Min extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income_data: raw_income_data,
    }
    //this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  calculate_cost(basic_income) {
    var income_range_index = 0;
    var sum_households_below = 0;
    var sum_income_delta = 0;
    for (var index = 0; index < raw_income_data.length; index++) {
      var element = raw_income_data[index];
      var households = parseInt(element["households_thousands"])
      sum_households_below = sum_households_below + households
      var income_range = parseInt(element["income_range"])
      sum_income_delta = sum_income_delta + ((basic_income - income_range) * households * 1000)
      if (income_range <= basic_income) {
        income_range_index = index
        return sum_income_delta;
      }
    }
  }

  render() {
    var x = this.calculate_cost(30000);
    console.log("val: " + x);
    return (
     /* <div className='someCss.test'>
      {JSON.stringify(this.state.income_data)}
      </div>
      */
     <div>
      <input type="text" className="form-control" />
      <p>{this.calculate_cost(30000)}</p>
     </div>
    );
  }

  /*
  loadDataFromServer() {
    d3.csv("./data/income.csv", (data) => {
      console.log(this);
        this.setState({
          income_data: data
        });
        console.log("Data has been set");
    });
  }

  componentDidMount() {
    //this.loadDataFromServer();
  }
  */
}


export default Min
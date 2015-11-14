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
    raw_income_data.forEach(function (element, index) {
      sum_households_below = sum_households_below + 
      if (parseInt(element["income_range"]) <= basic_income) {
        income_range_index = index
      }
    });
  }


  render() {
    return (
     /* <div className='someCss.test'>
      {JSON.stringify(this.state.income_data)}
      </div>
      */
     <input type="text" className="form-control" />
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

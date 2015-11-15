import React from 'react'
import raw_income_data from './clean_income.js'

export default class Min extends React.Component {

  calculate_cost(basic_income) {
    var income_range_index = 0
    var sum_households_below = 0
    var sum_income_delta = 0
    for (var index = 0; index < raw_income_data.length; index++) {
      var element = raw_income_data[index]
      var income_range_upper = element["range_upper"]
    if (income_range_upper > basic_income) {
      income_range_index = index
      return sum_income_delta
    }
      var households = element["households"]
      sum_households_below = element["cumulative"]
      var average = element["average"]
      sum_income_delta = sum_income_delta + ((basic_income - average) * households)
    }
  }

  render() {
    return (
        <div className="">
          <h1>The Most Important Graph in American Public Policy</h1>
          <label htmlFor="your-income">Your Income</label>
          <input id="your-income" type="text" />
          <div id="the-big-picture"></div>
          <p>{this.calculate_cost(30000)}</p>
        </div>
    );
  }
}

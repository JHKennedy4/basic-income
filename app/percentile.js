import _ from 'underscore'
import d3 from 'd3'
import React from 'react'
import income from './clean_income.js'
import {individualTaxObligation} from './tax-calculator.js'

var margin = {top: 20, right: 50, bottom: 60, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom
var percentileScale = d3.scale.linear().range([0, width]).domain([0, 100])
// Don't take the log of 0
var dollarScale = d3.scale.log().range([height, 0])
      .domain([0.001, d3.max(income, d => d.range_upper)])

var Percentile = React.createClass({
  getDefaultProps() {
    // We can't actually use 0 on a log scale, but we want both y intercepts to look like 0
    // Thus we do 10 * epsilon for taxData so that when we apply the 10% lowest bracket tax, we end up with epsilon
    var taxData = _.clone(income)
    taxData.unshift({percentile: 0.001, range_upper: 0.01, range_lower: 0.01})
    var incomeData  = _.clone(income)
    incomeData.unshift({percentile: 0.001, range_upper: 0.001, range_lower: 0.001})
    return {
      income: incomeData,
      tax: taxData
    }
  },
  // Called after initial render
  componentDidMount() {
    addGraph(_.map(['income', 'tax'], n => this.subchartNameToComponents()[n]))
  },
  // Called after all subsequent renders
  componentDidUpdate() {
    addGraph(_.map(['income', 'tax'], n => this.subchartNameToComponents()[n]))
  },
  subchartNameToComponents() {
    return {
      income: [ "income"
              , d => percentileScale(d.percentile)
              , d => dollarScale(d.range_upper + d.range_lower / 2)
              , this.props.income
              ],
      tax: [ "tax"
           , d => percentileScale(d.percentile)
           , d => dollarScale(individualTaxObligation(d.range_upper + d.range_lower / 2))
           , this.props.tax
           ]
    }
  },
  render() {
    return (
        <div>
        <h3>Income</h3>
        <div id="percentile"></div>
        </div>
    )
  }
})

function addGraph(subCharts) {
  var xAxis = d3.svg.axis().scale(percentileScale).orient("bottom")

  var leftAxis = d3.svg.axis().scale(dollarScale).orient("left")
        .tickFormat(d3.format('s'))
        .tickValues([1000, 10000, 100000, 1000000, 10000000, 100000000])

  var svg = d3.select("#percentile").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  subCharts.forEach(function([name, xAccessor, y1Accessor, data]) {
    var area = d3.svg.area()
          .x(xAccessor)
          .y0(height)
          .y1(y1Accessor)
    svg.append("path")
      .datum(data)
      .attr("class", "area " + name)
      .attr("d", area)
  })

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("dx", "25em")
      .attr("dy", "3em")
      .text("Percentile")

  svg.append("g")
      .attr("class", "y axis")
      .call(leftAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Income ($)")
}

export default Percentile

import _ from 'underscore'
import d3 from 'd3'
import React from 'react'
import income from './clean_income.js'
import ReactSlider from 'react-slider'
import {individualTaxObligation} from './tax-calculator.js'
import {populationIn2006, transferTotals} from '../data/transfers.js'

var margin = {top: 20, right: 50, bottom: 60, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom
var percentileScale = d3.scale.linear().range([0, width]).domain([0, 100])
// Don't take the log of 0
var dollarScale = d3.scale.log().range([height, 0])
      .domain([100, d3.max(income, d => d.range_upper)])

var Percentile = React.createClass({
  getInitialState() {
    return {incomeLevel: 10}
  },
  getDefaultProps() {
    // We can't actually use 0 on a log scale, but we want both y intercepts to look like 0
    // Thus we do 10 * epsilon for taxData so that when we apply the 10% lowest bracket tax, we end up with epsilon
    var taxData = _.clone(income)
    taxData.unshift({percentile: 0.001, range_upper: 1000, range_lower: 1000})
    var incomeData  = _.clone(income)
    incomeData.unshift({percentile: 0.001, range_upper: 100, range_lower: 100})
    var transfersPerPerson = _.map(transferTotals,
      function(t, i) {
        return { transfer: t / (populationIn2006 / 5)
               // Stretch the quintiles to the beginning and end of the chart
               , percentile: 20 * i + 10 + (i - 2) * 5
               }
      })
    return {
      income: incomeData,
      tax: taxData,
      transfers: transfersPerPerson,
      basicIncome: _.range(101)
    }
  },
  // Called after initial render
  componentDidMount() {
    addGraph(_.map(['income', 'tax', 'transfer', 'basicIncome'],
                   n => this.subchartNameToComponents()[n]))
  },
  // Called after all subsequent renders
  componentDidUpdate() {
    addGraph(_.map(['income', 'tax', 'transfer', 'basicIncome'],
                   n => this.subchartNameToComponents()[n]))
  },
  subchartNameToComponents() {
    return {
      income: [ "income"
              , d => percentileScale(d.percentile)
              , d => dollarScale(d.range_upper)
              , this.props.income
              ],
      tax: [ "tax"
           , d => percentileScale(d.percentile)
           , d => dollarScale(individualTaxObligation(d.range_upper))
           , this.props.tax
           ],
      transfer: [ "transfer"
                , d => percentileScale(d.percentile)
                , d => dollarScale(d.transfer)
                , this.props.transfers
                ],
      basicIncome: [ "basicIncome"
                   , d => percentileScale(d)
                   , d => dollarScale(this.state.incomeLevel * 1000)
                   , this.props.basicIncome
                   ]
    }
  },
  render() {
    return (
      <div>
        <h3>Income</h3>
        <ReactSlider defaultValue={10} orientation="horizontal" withBars onAfterChange={val => this.setState({incomeLevel: val})} />
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

  d3.select("#percentile svg").remove()
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

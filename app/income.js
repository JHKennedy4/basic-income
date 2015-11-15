import d3 from 'd3'
import nv from 'nvd3'
import React from 'react'
import revenues from './revenues.js'

export default class Income extends React.Component {
  addGraph() {
    nv.addGraph(function() {
      var chart = nv.models.pieChart()
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .showLabels(false);
      d3.select('#federal-income-tax-revenue svg')
        .datum(revenues)
        .call(chart)
      return chart
    });
  }
  // Called after initial render
  componentDidMount() {
    this.addGraph()
  }
  // Called after all subsequent renders
  componentDidUpdate() {
    this.addGraph()
  }
  render() {
    return (
      <div>
        <h3>Personal Income Tax as Percent of Revenues</h3>
        <div id="federal-income-tax-revenue"><svg></svg></div>
      </div>
    )
  }
}

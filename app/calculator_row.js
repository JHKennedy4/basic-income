import React from 'react'

export default class CalculatorRow extends React.Component {
  render() {
    return (
      <div className="row calculator-row">
        <div className="col-xs-2 calculator-row-title"><h3>{this.props.title}</h3></div>
        {this.props.children}
      </div>
    );
  }
}

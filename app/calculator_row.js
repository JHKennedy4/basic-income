import React from 'react'

export default class CalculatorRow extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-2">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}

import React from 'react'

export default class CalculatorCol extends React.Component {
  render() {
    return (
      <div className="col-xs-2">{this.props.children}</div>
    );
  }
}

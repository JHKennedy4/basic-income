import React from 'react';
import Slider from 'react-rangeslider';

export default class TaxSlider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10 /** Start value **/
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <Slider
        value={10}
        orientation="horizontal"
        onChange={this.handleChange} />
    );
  }
}

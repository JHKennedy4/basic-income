import d3 from 'd3'
import React from 'react'
import raw_income_data from './income.js'

export default class Min extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income_data: JSON.parse(raw_income_data),
    }
    //this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }


  render() {
    return (
      <div className='someCss.test'>
      {JSON.stringify(this.state.income_data)}
      </div>
    );
  }

  /*
  loadDataFromServer() {
    d3.csv("./income.csv", (data) => {
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

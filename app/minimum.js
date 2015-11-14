import d3 from 'd3'
import React from 'react'

export default class Min extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income_data: "Not loaded yet",
    }
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

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
    this.loadDataFromServer();
  }

  render() {
    return (
      <div className='someCss.test'>
      {JSON.stringify(this.state.income_data)}
      </div>
    );
  }
}


export default Min


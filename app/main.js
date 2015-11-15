import Tax from './tax-calculator'
import React from 'react'
import ReactDOM from 'react-dom'
import Percentile from './percentile'
import Min from './minimum'
import Income from './income'

// Please break these out into separate files as they become non-trivial
class TransferBreakdown extends React.Component {
  render() {
    return (
      <div className="">
        <h2>Cash Transfer Breakdown</h2>
        <div id="cash-transfer-breakdown">Bar?</div>
      </div>
    )
  }
}


class Expenditures extends React.Component {
  render() {
    return (
      <div>
        <h3>Expenditures</h3>
        <div id="federal-expenditures">Pie</div>
      </div>
    )
  }
}

class Revenues extends React.Component {
  render() {
    return (
      <div>
        <h3>Revenues</h3>
        <div id="federal-revenues">Pie</div>
      </div>
    )
  }
}

class Transfers extends React.Component {
  render() {
    return (
      <div>
        <h3>Cash Transfers as Percent of Expenditures</h3>
        <div id="federal-cash-transfers">Pie</div>
      </div>
    )
  }
}

ReactDOM.render(
  <div className="content">
    <h2>The Federal Budget</h2>
    <div className="flex-container">
      <Expenditures />
      <Revenues />
    </div>

    <div className="flex-container">
      <Transfers />
      <Income />
    </div>

    <TransferBreakdown />
    <Min />
    <Percentile />
  </div>,
  document.getElementById('rohit'))

import React from 'react'
import Footer from './footer.js'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <header className='calculator-header'>
                <h1>Basic Income Calculator</h1>
              </header>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2">Tax Brackets</div>
            <div className="col-xs-2">
              <ul>
                <li>$10,000 - 10%</li>
                <li>$20,000 - 14%</li>
                <li>$50,000 - 20%</li>
                <li>$100,000 - 30%</li>
              </ul>
            </div>
            <div className="col-xs-2">
              <ul>
                <li>$10,000 - 14%</li>
                <li>$20,000 - 18%</li>
                <li>$50,000 - 24%</li>
                <li>$100,000 - 35%</li>
              </ul>
            </div>
            <div className="col-xs-2">
              <ul>
                <li>$10,000 - 0%</li>
                <li>$20,000 - 7%</li>
                <li>$50,000 - 14%</li>
                <li>$100,000 - 33%</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2">Minimum Income</div>
            <div className="col-xs-2">$10,000</div>
            <div className="col-xs-2">$15,000</div>
            <div className="col-xs-2">$20,000</div>
          </div>

          <div className="row">
            <div className="col-xs-2">Welfare Programs</div>
            <div className="col-xs-2">End them all!</div>
            <div className="col-xs-2">End some of them.</div>
            <div className="col-xs-2">Keep them.</div>
          </div>
        </div>

        <Footer incomeAmount={15000} />
      </div>
    )
  }
}

export default App

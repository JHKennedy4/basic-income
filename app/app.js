import React from 'react'
import Footer from './footer.js'
import CalculatorRow from './calculator_row.js'
import CalculatorCol from './calculator_col.js'

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

          <CalculatorRow title="Minimum Income">
            <CalculatorCol>
              $0
            </CalculatorCol>
            <CalculatorCol>
              $10,000
            </CalculatorCol>
            <CalculatorCol>
              $20,000
            </CalculatorCol>
          </CalculatorRow>

          <CalculatorRow title="Tax Brackets">
            <CalculatorCol>
              <ul>
                <li>$10,000 - 10%</li>
                <li>$20,000 - 14%</li>
                <li>$50,000 - 20%</li>
                <li>$100,000 - 30%</li>
              </ul>
            </CalculatorCol>
            <CalculatorCol>
              <ul>
                <li>$10,000 - 10%</li>
                <li>$20,000 - 14%</li>
                <li>$50,000 - 20%</li>
                <li>$100,000 - 30%</li>
              </ul>
            </CalculatorCol>
            <CalculatorCol>
              <ul>
                <li>$10,000 - 10%</li>
                <li>$20,000 - 14%</li>
                <li>$50,000 - 20%</li>
                <li>$100,000 - 30%</li>
              </ul>
            </CalculatorCol>
          </CalculatorRow>

          <CalculatorRow title="Welfare Programs">
            <CalculatorCol>
              End them all!
            </CalculatorCol>
            <CalculatorCol>
              End some of them.
            </CalculatorCol>
            <CalculatorCol>
              Keep them.
            </CalculatorCol>
          </CalculatorRow>
        </div>

        <Footer incomeAmount={15000} />
      </div>
    )
  }
}

export default App

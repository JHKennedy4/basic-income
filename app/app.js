import React from 'react'
import Footer from './footer.js'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <header className='calculator-header'>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>Basic Income Calculator</h1>
              </div>
            </div>
          </div>
        </header>

        <Footer incomeAmount={15000} />
      </div>
    )
  }
}

export default App

import React from 'react'

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

        <footer key="footer" className='calculator-footer'>
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                Your Basic Income:
              </div>
              <div className="col-xs-8">
                [bar chart]
              </div>
              <div className="col-xs-2">
                $10,000 / mo.
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App

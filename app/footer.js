import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
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
              ${this.props.incomeAmount} / mo.
            </div>
          </div>
        </div>
      </footer>
      )
  }
}
Footer.defaultProps = { incomeAmount: 10000 }

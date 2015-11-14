import React from 'react'

export default class Footer extends React.Component {
  render () {
    var barWidthPct = this.props.incomeAmount / this.props.barMaxAmount * 100;
    var barStyle = {
      backgroundColor: 'green',
      width: barWidthPct.toString() + '%',
      height: '20px'
    }
    var povertyLineStyle = {
      marginLeft: (this.props.barPovertyLineAmount / this.props.barMaxAmount * 100).toString() + '%',
      width: '100%'
    }
    var livingWageStyle = {
      marginLeft: (this.props.barLivingWageAmount / this.props.barMaxAmount * 100).toString() + '%',
      width: '100%'
    }

    return (
      <footer key="footer" className='calculator-footer'>
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              Your Basic Income:
            </div>
            <div className="col-xs-8">
              <div style={barStyle}></div>
              <div style={povertyLineStyle}>↑ poverty line</div>
              <div style={livingWageStyle}>↑ living wage</div>
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
Footer.defaultProps = {
  barMaxAmount: 40000,
  barPovertyLineAmount: 16000,
  barLivingWageAmount: 25000,
  incomeAmount: 10000,
}

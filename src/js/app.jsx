import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      principal: '',
      interestRate: '',
      loanTerm: '',
      period: '12',
      mPayment: ''
    };
    this.updatePrincipal = this.updatePrincipal.bind(this);
    this.updateInterestRate = this.updateInterestRate.bind(this);
    this.updateLoanTerm = this.updateLoanTerm.bind(this);
    this.updatePeriod = this.updatePeriod.bind(this);
    this.mPayment = this.mPayment.bind(this);
  }

  updatePrincipal(e) {
    e.preventDefault();
    this.setState({ principal: e.target.value })
  }
  updateInterestRate(e) {
    this.setState({ interestRate: e.target.value })
  }
  updateLoanTerm(e) {
    this.setState({ loanTerm: e.target.value })
  }

  updatePeriod(e) {
    let value = e.target.value;
    this.setState({ period: value })
  }
  mPayment(e) {
    e.preventDefault();
    const P = this.state.principal;
    const r = ((this.state.interestRate) / 100 / this.state.period);
    const t = this.state.loanTerm * this.state.period;
    const M = P * (r * Math.pow((1 + r), t)) / (Math.pow((1 + r), t) - 1);
    this.setState({ mPayment: M.toFixed(2) })
  }
  render() {
    return (
      <div className='App' >
        <h1>Mortgage Calculator</h1>
        <input name='principal' onChange={this.updatePrincipal} value={this.state.principal} placeholder='principal' />
        <input name='interestRate' onChange={this.updateInterestRate} value={this.state.interestRate} placeholder='interestRate' />
        <input name='loanTerm' onChange={this.updateLoanTerm} value={this.state.loanTerm} placeholder='loanTerm' />
        <select name='period' onChange={this.updatePeriod} value={this.state.Period}>
          <option value='12'>Monthly</option>
          <option value='4'>Quarterly</option>
        </select>
        <button id='calculate' onClick={this.mPayment}>Calculator</button>
        <p id='output'>{this.state.mPayment}</p>
      </div>
    );
  }
}

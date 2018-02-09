module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
   get monthlyPayment() {
          const P = this.principal;
          const t = this.term * this.period;
          const r = ((this.interest) / 100 / this.period);
          const M = P * (r * Math.pow((1 + r), t)) / (Math.pow((1 + r), t) - 1);
          return M;
        
  
    }
  }
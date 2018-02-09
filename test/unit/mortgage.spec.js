const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    describe('principal, interest, term, peirod', () => {
        let mortgage = null;

        it('should have a monthly payment function', () => {
            mortgage = new Mortgage(600000, 4.25, 30, 12)
            expect(mortgage.monthlyPayment).to.exist;
        });

        it('should return 3798.20', () => {
            mortgage = new Mortgage(550000, 3, 15, 12)
            expect((mortgage.monthlyPayment).toFixed(2)).to.equal('3798.20');
        });

        it('should return 11870.18prove', () => {
            mortgage = new Mortgage(1000000, 2.5, 30, 4)
            expect((mortgage.monthlyPayment).toFixed(2)).to.equal('11870.18');
        });

        it('should return 6920.98', () => {
            mortgage = new Mortgage(770000, 7, 15, 12)
            expect((mortgage.monthlyPayment).toFixed(2)).to.equal('6920.98');
        });

        it('should return 6172.35', () => {
            mortgage = new Mortgage(420000, 4.20, 30, 4)
            expect((mortgage.monthlyPayment).toFixed(2)).to.equal('6172.35');
        });

    });
});

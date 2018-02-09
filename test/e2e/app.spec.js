const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', function () {
    let pageObject = null;

    this.timeout(40000)

    beforeEach(() => {
        pageObject = nightmare.goto(url);
    });

    it('should contain a <h1> element for the page title', () =>
        pageObject
            .evaluate(() => document.querySelector('h1').innerText)
            .then(headerText => {
                expect(headerText).to.not.be.null;
                expect(headerText).to.equal('Mortgage Calculator');
            }))

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 300000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('1389.35');
            })
    ).timeout(6500);


    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 200000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('926.23');
            })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 670000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('4872.39');
            })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 700000)
            .type('input[name=interestRate]', 4)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('10042.97');
            })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 450000)
            .type('input[name=interestRate]', .1)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('7557.33');
            })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 1000000)
            .type('input[name=interestRate]', 7.8)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('21631.14');
            })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 1200000)
            .type('input[name=interestRate]', 7.8)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('8638.45');
            })
    ).timeout(6500);

    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 20000)
            .type('input[name=interestRate]', 3)
            .type('input[name=loanTerm]', 15)
            .select('select[name=period]', 4)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('415.17');
            })
    ).timeout(6500);

})
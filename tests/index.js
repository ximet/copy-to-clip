const chai = require('chai');
const expect = chai.expect;
const copyToClip = require('../index.js')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('List Test', () => {

    describe('Fake Test', () => {
        it('Test with fake dom', () => {
            global.document = new JSDOM(undefined);
            global.window = document.defaultView;

            const param = copyToClip('text');

            expect(param).to.equal(false);
        });
    });

    describe('Good DOM Test', () => {
        it('Create custom DOM with one inserted element', () => {
            global.document = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
            global.window = document.defaultView;

            const param = copyToClip('text');

            expect(param).to.equal(false);
        });
    });
});

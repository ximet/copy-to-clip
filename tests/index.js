const chai = require('chai');
const expect = chai.expect;
const copyToClip = require('../index.js')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('SimpleTest', () => {
    it('Test with fake dom', () => {
        global.document = new JSDOM(undefined);
        global.window = document.defaultView;

        const param = copyToClip('text');

        expect(param).to.equal(false);
    });
});

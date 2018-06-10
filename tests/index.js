var chai = require('chai');
var expect = chai.expect;
const sinon = require('sinon');

sinon.config = {
    useFakeTimers: false
};

describe('pre test', function() {
    describe('equality', function() {
        it('check equality', function() {
            expect(true).eql(true);
        })
    })
})
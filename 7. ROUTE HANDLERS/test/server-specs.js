const chai = require('chai');
const expect = chai.expect
const {dogWithId, checkAmountOfSubstrings} = require('../server')

describe('dogWithId', function(){


    it('should return true if the URL is /dog/:dogId', function(){

        const result = dogWithId('/dogs/1')
        expect(result).to.be.true
    })
})
describe('checkAmountOfSubstrings', function(){
    it('should return true if the URL is same length as /dog/:dogId', function(){

        const result = checkAmountOfSubstrings('/dogs/1')
        expect(result).to.be.true
    })
})

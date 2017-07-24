'use strict'

 const expect = require('chai').expect
 const Exercise = require('../exercise')

 describe('Exercise', () => {
     it('charCountReturnsTheCountOfEachChar', () => {
         let first = 'ab'
         let second = 'b'

         let exercise = new Exercise()
         expect(exercise.charCount(first, second)).to.eql({'a': 1, 'b': 2})
     })
 })
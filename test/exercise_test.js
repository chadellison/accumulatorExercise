'use strict'

 const expect = require('chai').expect
 const Exercise = require('../exercise')
 const Hospital = require('../hospital')
 const Patient = require('../patient')

 describe('Exercise', () => {
     it('charCountReturnsTheCountOfEachChar', () => {
         let first = 'ab'
         let second = 'b'

         let exercise = new Exercise()
         expect(exercise.charCount(first, second)).to.eql({'a': 1, 'b': 2})
     })

     it('hospital should be able to check if patient exists', () => {
         const patient1 = new Patient('Chad', 'Peterson');
         const patient2 = new Patient('Peter', 'Chaderson');
         const patient3 = new Patient('bob', 'jones');

         const patients = [patient1, patient2]
         const hospital = new Hospital(patients);

         expect(hospital.patients).to.deep.equal([{first: 'Chad', last: 'Peterson'}, {first: 'Peter', last: "Chaderson"}])
         expect(hospital.checkForPatient(patient1)).to.equal(true);
         expect(hospital.checkForPatient(patient3)).to.equal(false);

     })
 })


 // create patient object with properties
 // create hospital with method that checks if patients are
 //checked in
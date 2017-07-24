class Hospital {
    constructor(patients) {
        this.patients = patients
    }

    checkForPatient(person) {
        let formatName = person.first + person.last;
        return this.patients.map((patient) => {
           return patient.first + patient.last;
        }).includes(formatName);
    }
}

module.exports = Hospital
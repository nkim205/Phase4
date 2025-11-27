const pool = require('./connection');

async function recordSymptoms(patientID, numDays, apptDate, apptTime, symptomType){
    try {
        const [rows] = await pool.query(
            'CALL record_symptom(?, ?, ?, ?, ?)',
            [patientID, numDays, apptDate, apptTime, symptomType]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { recordSymptoms };
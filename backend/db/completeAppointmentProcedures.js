const pool = require('./connection');

async function completeAppointment(patientID, apptDate, apptTime){
    try {
        const [rows] = await pool.query(
            'CALL complete_appointment(?, ?, ?)',
            [patientID, apptDate, apptTime]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { completeAppointment };
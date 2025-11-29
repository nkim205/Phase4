const pool = require('./connection');

async function bookAppointment(patientID, apptDate, apptTime, apptCost){
    try {
        const [rows] = await pool.query(
            'CALL book_appointment(?, ?, ?, ?)',
            [patientID, apptDate, apptTime, apptCost]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { bookAppointment };
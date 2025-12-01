const pool = require('./connection');

async function assignDoctorToAppointment(patientID, apptDate, apptTime, doctorID){
    try {
        const [rows] = await pool.query(
            'CALL assign_doctor_to_appointment(?, ?, ?, ?)',
            [patientID, apptDate, apptTime, doctorID]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { assignDoctorToAppointment};
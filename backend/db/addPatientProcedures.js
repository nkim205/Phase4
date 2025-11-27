const pool = require('./connection');

async function addPatient(ssn, first_name, last_name, birthdate, address, funds, contact){
    try {
        const [rows] = await pool.query(
            'CALL add_patient(?, ?, ?, ?, ?, ?, ?)',
            [ssn, first_name, last_name, birthdate, address, funds, contact]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { addPatient };
const pool = require('./connection');

async function addPatient(ssn, fname, lname, bdate, address, funds, contact){
    try {
        const [rows] = await pool.query(
            'CALL add_patient(?, ?, ?, ?, ?, ?, ?)',
            [ssn, fname, lname, bdate, address, funds, contact]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { addPatient };
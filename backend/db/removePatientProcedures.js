const pool = require('./connection');

async function removePatient(ssn){
    try {
        const [rows] = await pool.query(
            'CALL remove_patient(?)',
            [ssn]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { removePatient };
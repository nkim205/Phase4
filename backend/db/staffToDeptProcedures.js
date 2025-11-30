const pool = require('./connection');

async function staffToDept(ssn, firstName, lastName, birthdate, startdate, address, staffId, salary) {
    try {
        const [rows] = await pool.query(
            'CALL add_staff_to_dept(?, ?, ?, ?, ?, ?, ?, ?)',
            [ssn, firstName, lastName, birthdate, startdate, address, staffId, salary]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { staffToDept };
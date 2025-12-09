const pool = require('./connection');

async function staffToDept(deptID, ssn, firstName, lastName, birthdate, startdate, address, staffID, salary) {
    try {
        const [rows] = await pool.query(
            'CALL add_staff_to_dept(?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [deptID, ssn, firstName, lastName, birthdate, startdate, address, staffID, salary]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { staffToDept };
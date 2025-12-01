const pool = require('./connection');

async function manageDepartment(ssn, deptID){
    try {
        const [rows] = await pool.query(
            'CALL manage_department(?, ?)',
            [ssn, deptID]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { manageDepartment };
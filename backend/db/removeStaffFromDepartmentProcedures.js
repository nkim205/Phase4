const pool = require('./connection');

async function removeStaffFromDepartment(ssn, deptID){
    try {
        const [rows] = await pool.query(
            'CALL remove_staff_from_dept(?, ?)',
            [ssn, deptID]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { removeStaffFromDepartment };
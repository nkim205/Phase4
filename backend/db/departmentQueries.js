const pool = require('./connection');

async function fetchDepartmentOverview() {
    try {
        const [rows] = await pool.query('SELECT * FROM department_view');
        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { fetchDepartmentOverview }
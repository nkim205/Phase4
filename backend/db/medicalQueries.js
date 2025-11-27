const pool = require('./connection');

async function fetchMedicalStaffOverview() {
    try {
        const [rows] = await pool.query('SELECT * FROM medical_staff_view');
        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { fetchMedicalStaffOverview }
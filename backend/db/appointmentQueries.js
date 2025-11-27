const pool = require('./connection');

async function fetchSymptomsOverview() {
    try {
        const [rows] = await pool.query('SELECT * FROM symptoms_overview_view');
        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { fetchSymptomsOverview }
const pool = require('./connection');

async function fetchOutstandingChargesOverview() {
    try {
        const [rows] = await pool.query('SELECT * FROM outstanding_charges_view');
        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { fetchOutstandingChargesOverview }
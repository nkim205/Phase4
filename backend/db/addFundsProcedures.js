const pool = require('./connection');

async function addFunds(ssn, funds) {
    try {
        const [rows] = await pool.query(
            'CALL add_funds(?, ?)',
            [ssn, funds]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { addFunds };
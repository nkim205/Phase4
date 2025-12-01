const pool = require('./connection');

async function completeOrder(numOrder){
    try {
        const [rows] = await pool.query(
            'CALL complete_order(?)',
            [numOrder]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { completeOrder };
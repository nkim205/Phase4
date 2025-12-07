const pool = require('./connection');

async function completeOrder(numOrders){
    try {
        const [rows] = await pool.query(
            'CALL complete_orders(?)',
            [numOrders]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { completeOrder };
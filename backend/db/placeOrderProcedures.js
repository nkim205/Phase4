const pool = require('./connection');

async function placeOrder(orderNumber, priority, patientID, doctorID, cost, labType, drug, dosage){
    try {
        const [rows] = await pool.query(
            'CALL place_order(?, ?, ?, ?, ?, ?, ?, ?)',
            [orderNumber, priority, patientID, doctorID, cost, labType, drug, dosage]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { placeOrder };
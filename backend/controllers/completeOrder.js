const { completeOrder } = require('../db/completeOrderProcedures');

async function orderCompletion(req, res) {
    const { numOrders } = req.body;

    if (!numOrders) return res.status(400).json({ success: false, error: 'Missing number of orders' });

    try {
        const result = await completeOrder(numOrders);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { orderCompletion };
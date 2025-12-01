const { completeOrder } = require('../db/completeOrderProcedures');

async function orderCompletion(req, res) {
    const { numOrder } = req.body;

    if (!numOrder) return res.status(400).json({ success: false, error: 'Missing numOrder' });

    try {
        const result = await completeOrder(numOrder);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { orderCompletion };
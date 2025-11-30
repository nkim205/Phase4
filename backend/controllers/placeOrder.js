const { placeOrder } = require('../db/placeOrderProcedures');

async function assignOrderToPatient(req, res) {
    const { orderNumber, priority, patientID, doctorID, cost, labType, drug, dosage } = req.body;

    if (!orderNumber) return res.status(400).json({ success: false, error: 'Missing orderNumber' });
    if (!priority) return res.status(400).json({ success: false, error: 'Missing priority' });
    if (!patientID) return res.status(400).json({ success: false, error: 'Missing patientID' });
    if (!doctorID) return res.status(400).json({ success: false, error: 'Missing doctorID' });
    if (!cost) return res.status(400).json({ success: false, error: 'Missing cost' });
    if (!labType) return res.status(400).json({ success: false, error: 'Missing labType' });
    if (!drug) return res.status(400).json({ success: false, error: 'Missing drug' });
    if (!dosage) return res.status(400).json({ success: false, error: 'Missing dosage' });

    try {
        const result = await placeOrder(orderNumber, priority, patientID, doctorID, cost, labType, drug, dosage);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { assignOrderToPatient };
const { addFunds } = require('../db/addFundsProcedures');

async function addFundsToPatient(req, res) {
    const { ssn, funds } = req.body;

    if (!ssn) return res.status(400).json({ success: false, error: 'Missing ssn' });
    if (!funds) return res.status(400).json({ success: false, error: 'Missing funds' });

    try {
        const result = await addFunds(ssn, funds);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { addFundsToPatient };
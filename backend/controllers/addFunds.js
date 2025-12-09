const { addFunds } = require('../db/addFundsProcedures');

async function addFundsToPatient(req, res) {
    const { ssn, funds } = req.body;
    
    try {
        const result = await addFunds(ssn, funds);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { addFundsToPatient };
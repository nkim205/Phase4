const { addPatient } = require('../db/addPatientProcedures');

async function addPatientToTable(req, res) {
    const { ssn, first_name, last_name, birthdate, address, funds, contact } = req.body;

    if (!ssn) return res.status(400).json({ success: false, error: 'Missing ssn' });
    if (!first_name) return res.status(400).json({ success: false, error: 'Missing firstName' });
    if (!last_name) return res.status(400).json({ success: false, error: 'Missing lastName' });
    if (!birthdate) return res.status(400).json({ success: false, error: 'Missing birthdate' });
    if (!address) return res.status(400).json({ success: false, error: 'Missing address' });
    if (!funds) return res.status(400).json({ success: false, error: 'Missing funds' });
    if (!contact) return res.status(400).json({ success: false, error: 'Missing contact' });

    try {
        const result = await addPatient(ssn, first_name, last_name, birthdate, address, funds, contact);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { addPatientToTable };
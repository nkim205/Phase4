const { removePatient } = require('../db/removePatientProcedures');

async function patientRemoval(req, res) {
    const { ssn } = req.body;

    if (!ssn) return res.status(400).json({ success: false, error: 'Missing ssn' });

    try {
        const result = await removePatient(ssn);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { patientRemoval };
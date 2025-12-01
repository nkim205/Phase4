const { recordSymptoms } = require('../db/recordSymptomsProcedures');

async function addSymptomstoPatient(req, res) {
    const { patientID, numDays, apptDate, apptTime, symptomType } = req.body;

    if (!patientID) return res.status(400).json({ success: false, error: 'Missing patientID' });
    if (!numDays) return res.status(400).json({ success: false, error: 'Missing numDays' });
    if (!apptDate) return res.status(400).json({ success: false, error: 'Missing apptDate' });
    if (!apptTime) return res.status(400).json({ success: false, error: 'Missing apptTime' });
    if (!symptomType) return res.status(400).json({ success: false, error: 'Missing symptomType' });

    try {
        const result = await recordSymptoms(patientID, numDays, apptDate, apptTime, symptomType);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { addSymptomstoPatient };
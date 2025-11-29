const { bookAppointment } = require('../db/bookAppointmentProcedures');

async function addPatientToAppointment(req, res) {
    const { patientID, apptDate, apptTime, apptCost } = req.body;

    if (!patientID) return res.status(400).json({ success: false, error: 'Missing patientID' });
    if (!apptDate) return res.status(400).json({ success: false, error: 'Missing apptDate' });
    if (!apptTime) return res.status(400).json({ success: false, error: 'Missing apptTime' });
    if (!apptCost) return res.status(400).json({ success: false, error: 'Missing apptCost' });

    try {
        const result = await bookAppointment(patientID, apptDate, apptTime, apptCost);
        res.json({ success: true, data: result });
    } catch (e) {
        throw e;
    }
}

module.exports = { addPatientToAppointment };
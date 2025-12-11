const { completeAppointment } = require('../db/completeAppointmentProcedures');

async function completionAppointment(req, res) {
    const { patientID, apptDate, apptTime } = req.body;

    if (!patientID) return res.status(400).json({ success: false, error: 'Missing patientID' });
    if (!apptDate) return res.status(400).json({ success: false, error: 'Missing apptDate' });
    if (!apptTime) return res.status(400).json({ success: false, error: 'Missing apptTime' });

    try {
        const result = await completeAppointment(patientID, apptDate, apptTime);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { completionAppointment };
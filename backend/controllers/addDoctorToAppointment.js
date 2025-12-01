const { assignDoctorToAppointment } = require('../db/assignDoctorToAppointmentProcedures');

async function assignDoctor(req, res) {
    const { patientID, apptDate, apptTime, doctorID } = req.body;

    if (!patientID) return res.status(400).json({ success: false, error: 'Missing patientID' });
    if (!apptDate) return res.status(400).json({ success: false, error: 'Missing apptDate' });
    if (!apptTime) return res.status(400).json({ success: false, error: 'Missing apptTime' });
    if (!doctorID) return res.status(400).json({ success: false, error: 'Missing doctorID' });

    try {
        const result = await assignDoctorToAppointment(patientID, apptDate, apptTime, doctorID);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { assignDoctor };
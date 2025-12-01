const { staffToDept } = require('../db/staffToDeptProcedures');

async function addStaffToDept(req, res) {
    const { ssn, firstName, lastName, birthdate, startdate, address, staffId, salary } = req.body;

    if (!ssn) return res.status(400).json({ success: false, error: 'Missing ssn' });
    if (!firstName) return res.status(400).json({ success: false, error: 'Missing firstName' });
    if (!lastName) return res.status(400).json({ success: false, error: 'Missing lastName' });
    if (!birthdate) return res.status(400).json({ success: false, error: 'Missing birthdate' });
    if (!startdate) return res.status(400).json({ success: false, error: 'Missing startdate' });
    if (!address) return res.status(400).json({ success: false, error: 'Missing address' });
    if (!staffID) return res.status(400).json({ success: false, error: 'Missing staffID' });
    if (!salary) return res.status(400).json({ success: false, error: 'Missing salary' });

    try {
        const result = await staffToDept(ssn, firstName, lastName, birthdate, startdate, address, staffId, salary);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { addStaffToDept };
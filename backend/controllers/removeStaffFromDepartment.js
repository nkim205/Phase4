const { removeStaffFromDepartment } = require('../db/removeStaffFromDepartmentProcedures');

async function staffRemoval(req, res) {
    const { ssn } = req.body;

    if (!ssn) return res.status(400).json({ success: false, error: 'Missing ssn' });
    if (!deptID) return res.status(400).json({ success: false, error: 'Missing deptID' });

    try {
        const result = await removePatient(ssn, deptID);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { staffRemoval };
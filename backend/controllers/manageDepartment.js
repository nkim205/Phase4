const { manageDepartment } = require('../db/manageDepartmentProcedures');

async function manageDept(req, res) {
    const { ssn, deptID } = req.body;

    if (!nurseID) return res.status(400).json({ success: false, error: 'Missing ssn' });
    if (!roomNumber) return res.status(400).json({ success: false, error: 'Missing deptID' });

    try {
        const result = await manageDepartment(ssn, deptID);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { manageDept };
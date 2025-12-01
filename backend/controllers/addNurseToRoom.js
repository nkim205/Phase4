const { assignNurseToRoom } = require('../db/assignNurseToRoomProcedures');

async function assignNurse(req, res) {
    const { nurseID, roomNumber } = req.body;

    if (!nurseID) return res.status(400).json({ success: false, error: 'Missing nurseID' });
    if (!roomNumber) return res.status(400).json({ success: false, error: 'Missing roomNumber' });

    try {
        const result = await assignNurseToRoom(nurseID, roomNumber);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { assignNurse };
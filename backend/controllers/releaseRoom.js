const { releaseRoom } = require('../db/releaseRoomProcedures');

async function roomRelease(req, res) {
    const { nurseID, roomNumber } = req.body;

    if (!roomNumber) return res.status(400).json({ success: false, error: 'Missing roomNumber' });

    try {
        const result = await releaseRoom(roomNumber);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { roomRelease };
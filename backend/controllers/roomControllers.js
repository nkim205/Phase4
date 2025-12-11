const { fetchRoomWiseView } = require('../db/roomQueries');
const { assignRoom } = require('../db/roomProcedures');

async function getRoomWiseView(req, res) {
    try {
        const result = await fetchRoomWiseView();
        res.json({
            success: true,
            data: result
        }); 
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        });
    }
};

async function assignRoomToPatient(req, res) {
    const { ssn, roomNumber, roomType } = req.body;

    if (!ssn) return res.status(400).json({ success: false, error: 'Missing ssn' });
    if (!roomNumber) return res.status(400).json({ success: false, error: 'Missing roomNumber' });
    if (!roomType) return res.status(400).json({ success: false, error: 'Missing roomType' });

    try {
        const result = await assignRoom(ssn, roomNumber, roomType);
        res.json({ success: true, data: result });
    } catch (e) {
        res.status(400).json({ success: false, message: e.message });
    }
}

module.exports = { getRoomWiseView, assignRoomToPatient };
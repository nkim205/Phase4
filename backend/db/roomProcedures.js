const pool = require('./connection');

async function assignRoom(ssn, roomNumber, roomType){
    try {
        const [rows] = await pool.query(
            'CALL assign_room_to_patient(?, ?, ?)',
            [ssn, roomNumber, roomType]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { assignRoom };
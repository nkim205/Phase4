const pool = require('./connection');

async function assignNurseToRoom(nurseID, roomNumber){
    try {
        const [rows] = await pool.query(
            'CALL assign_nurse_to_room(?, ?)',
            [nurseID, roomNumber]
        );

        return rows;
    } catch (e) {
        throw e;
    } 
}

module.exports = { assignNurseToRoom };
const pool = require('./connection');

async function releaseRoom(roomNumber){
    try {
        const [rows] = await pool.query(
            'CALL release_room(?)',
            [roomNumber]
        );

        return rows;
    } catch (e) {
        throw e;
    }
}

module.exports = { releaseRoom };
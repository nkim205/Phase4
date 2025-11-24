const pool = require('./connection');

async function fetchRoomWiseView() {
    try {
        const [rows] = await pool.query('SELECT * FROM room_wise_view');
        return rows;
    } catch (e) {
        throw e;
    }
};

module.exports = { fetchRoomWiseView };
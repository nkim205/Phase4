const pool = require('./connection');
const { fetchRoomWiseView } = require('./roomQueries');
const { assignRoom } = require('./roomProcedures');

/**
 * Call specific test functions. Comment out the ones you DON'T want to test.
 * To run tests, make sure to be in the ./backend folder and use `ndoe db/test.js`
 * As inputs to each test:
 *      0 = JSON view
 *      1 = Table view
 */
(async () => {
    // await testInitConnection(0);
    // await testRoomWiseView(1);
    // await testAssignRoomAndView(1);
    await testAssignRoomFail();
})();

async function testInitConnection(type) {
    try {
        const [rows] = await pool.query('SELECT 1');
        if (type == 0) {
            rows.forEach((row, idx) => console.log(`Row ${idx}`, row));    
        } else {
            console.table(rows);
        }
    } catch (e) {
        console.error(`Error: `, e);
    }
}

async function testRoomWiseView(type) {
    try {
        const rows = await fetchRoomWiseView();
        console.log(`Room wise view all rows:`);
        if (type == 0) {
            rows.forEach((row, idx) => console.log(`Row ${idx}`, row));    
        } else {
            console.table(rows);
        }
    } catch (e) {
        console.error(`Error: `, e);
    }
}

async function testAssignRoomAndView(type) {
    try {
        const result = await assignRoom('223-34-5678', 2567, 'Private');
        console.log(`Assign Room To Patient Proc. Result:`, result);
        await testRoomWiseView(type);
    } catch (e) {
        console.error(`Error: `, e)
    }
}

// TODO: In SQL script, add more detailed error handling 
async function testAssignRoomFail() {
    try {   
        const result = await assignRoom(null, 2567, 'Surgery Room');
        console.log(`Expected failure, instead got: `, result);
    } catch (e) {
        // if (e.message.includes('SSN cannot be NULL')) ...
        console.log(`Successfully caught error for NULL ssn: `, e);
    }
}
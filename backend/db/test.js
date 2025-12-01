const pool = require('./connection');
const { fetchRoomWiseView } = require('./roomQueries');
const { assignRoom } = require('./roomProcedures');
const { fetchSymptomsOverview } = require('./appointmentQueries');
const { fetchMedicalStaffOverview } = require('./medicalQueries');
const { fetchDepartmentOverview } = require('./departmentQueries');
const { fetchOutstandingChargesOverview } = require('./outstandingChargesQueries');
const { addPatient } = require('./addPatientProcedures');
const { recordSymptoms } = require('./recordSymptomsProcedures');
const { assignNurseToRoom } = require('./assignNurseToRoomProcedures');
const { bookAppointment } = require('./bookAppointmentProcedures');
const { placeOrder } = require('./placeOrderProcedures');
const { staffToDept } = require('./staffToDeptProcedures');
const { addFunds } = require('./addFundsProcedures');
const { assignDoctorToAppointment } = require('./assignDoctorToAppointmentProcedures');
const { manageDepartment } = require('./manageDepartmentProcedures');
const { releaseRoom } = require('./releaseRoomProcedures');
const { removePatient } = require('./removePatientProcedures');
const { removeStaffFromDepartment } = require('./removeStaffFromDepartmentProcedures');
const { completeAppointment } = require('./completeAppointmentProcedures');
const { completeOrder } = require('./completeOrderProcedures');
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
    // await testAssignRoomFail();
    // await testSymptomOverviewView();
    // await testMedicalStaffOverviewView();
    // await testDepartmentOverviewView();
    // await testOutstandingChargesOverviewView();
    // await testAddPatient(1);
    // await testRecordSymptoms(1);
    // await testAssignNurseToRoom(1);
    // await testAddFunds(1);
    // await testAssignDoctorToAppointment(1);
    // await testManageDepartment(1);
    // await testReleaseRoom(1);
    // await testremovePatient(1);
    // await testremoveStaffFromDepartment(1);
    // await testcompleteAppointment(1);
    // await testcompleteOrder(1);
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
        console.error('Error: ', e)
    }
}

// TODO: In SQL script, add more detailed error handling 
async function testAssignRoomFail() {
    try {   
        const result = await assignRoom('112-23-4567', 3862, 'Surgery Room');
        console.log(`Expected failure, instead got: `, result);
    } catch (e) {
        console.error(e.message);
    }
}

async function testSymptomOverviewView(type) {
    try {
        const rows = await fetchSymptomsOverview();
        console.log(`Symptom overview view all rows:`);
        if (type == 0) {
            rows.forEach((row, idx) => console.log(`Row ${idx}`, row));    
        } else {
            console.table(rows);
        }
    } catch (e) {
        console.error(`Error: `, e);
    }
}

async function testMedicalStaffOverviewView(type) {
    try {
        const rows = await async function testMedicalStaffOverviewView(type) {
            try {
                const rows = await fetchMedicalStaffOverview();
                console.log(`Medical Staff overview view all rows:`);
                if (type == 0) {
                    rows.forEach((row, idx) => console.log(`Row ${idx}`, row));    
                } else {
                    console.table(rows);
                }
            } catch (e) {
                console.error(`Error: `, e);
            }
        }();
    } catch (e) {
        console.error(`Error: `, e);
    }
}

async function testDepartmentOverviewView(type) {
    try {
        const rows = await async function testDepartmentOverviewView(type) {
            try {
                const rows = await fetchDepartmentOverview();
                console.log(`Department overview view all rows:`);
                if (type == 0) {
                    rows.forEach((row, idx) => console.log(`Row ${idx}`, row));    
                } else {
                    console.table(rows);
                }
            } catch (e) {
                console.error(`Error: `, e);
            }
        }();
    } catch (e) {
        console.error(`Error: `, e);
    }
}

async function testOutstandingChargesOverviewView(type) {
    try {
        const rows = await async function testOutstandingChargesOverviewView(type) {
            try {
                const rows = await fetchOutstandingChargesOverview();
                console.log(`Outstanding Charges overview view all rows:`);
                if (type == 0) {
                    rows.forEach((row, idx) => console.log(`Row ${idx}`, row));    
                } else {
                    console.table(rows);
                }
            } catch (e) {
                console.error(`Error: `, e);
            }
        }();
    } catch (e) {
        console.error(`Error: `, e);
    }
}

async function testAddPatient(type) {
    try {
        const result = await addPatient('000-00-0000', 'Nathan', 'Kim', '1990-05-15', '123 Main St, Cityville, ST 12345', 10000, '404-371-2012');
        console.log(`Assign Patient To Table Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }
}

async function testRecordSymptoms(type) {
    try {
        const result = await recordSymptoms('112-23-4567', 5, '2025-02-23', '08:17:21', 'Blurry vision');
        console.log(`Assign Symptoms To Patient Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }
}

async function testAssignNurseToRoom(type) {
    try {
        const result = await assignNurseToRoom('123-45-6789', 1234);
        console.log(`Assign Nurse To Room Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }
}

async function testbookAppointment(type) {
    try {
        const result = await bookAppointment('698-78-2091', '2025-03-10', '09:15:00', 500);
        console.log(`Book Appointment Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }
}

async function testPlaceOrder(type) {
    try {
        const result = await placeOrder();
        console.log(`Place Order Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }
}
// add test cases here

async function testStaffToDept(type) {
    try {
        const result = await staffToDept();
        console.log(`Staff To Dept Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }
}
// add test cases here

async function testAddFunds(type) {
    try {
        const result = await addFunds('112-23-4567', '250');
        console.log(`Add Funds Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}

async function testAssignDoctorToAppointment(type) {
    try {
        const result = await assignDoctorToAppointment('334-45-6789', '2025-02-24', '14:51:18', '210-98-7654');
        console.log(`Assign Doctor To Appointment Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}

async function testManageDepartment(type) {
    try {
        const result = await manageDepartment('321-54-9876', '1');
        console.log(`Manager Assigned To Department Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}

async function testReleaseRoom(type) {
    try {
        const result = await releaseRoom('2567');
        console.log(`Patient Released From Room Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}

async function testremovePatient(type) {
    try {
        const result = await removePatient('667-78-9012');
        console.log(`Patient Removal Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}

async function testremoveStaffFromDepartment(type) {
    try {
        const result = await removeStaffFromDepartment('106-30-2043', '2');
        console.log(`Staff Removal Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}

async function testcompleteAppointment(type) {
    try {
        const result = await completeAppointment('556-67-8901', '2025-02-22', '06:44:01');
        console.log(`Appointment Completion Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}

async function testcompleteOrder(type) {
    try {
        const result = await completeOrder('1998');
        console.log(`Order Completion Proc. Result:`, result);
    } catch (e) {
        console.error(e.message);
    }

}
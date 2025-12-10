require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const roomsRoutes = require('./routes/rooms');
app.use('/api/rooms', roomsRoutes);

const symptomsRoutes = require('./routes/symptoms');
app.use('/api/symptoms', symptomsRoutes);

const staffRoutes = require('./routes/staff');
app.use('/api/staff', staffRoutes);

const departmentRoutes = require('./routes/department');
app.use('/api/department', departmentRoutes);

const chargesRoutes = require('./routes/charges');
app.use('/api/charges', chargesRoutes);

const addFundsRoutes = require('./routes/addFunds');
app.use('/api/addFunds', addFundsRoutes);

const addPatientToTable = require('./routes/addPatient');
app.use('/api/addPatient', addPatientToTable);

const addSymptomstoPatient = require('./routes/recordSymptom');
app.use('/api/recordSymptom', addSymptomstoPatient);

const addPatientToAppointment = require('./routes/bookAppointment');
app.use('/api/bookAppointment', addPatientToAppointment);

const assignOrderToPatient = require('./routes/placeOrder');
app.use('/api/placeOrder', assignOrderToPatient);

const addStaffToDept = require('./routes/addStaffToDept');
app.use('/api/addStaff', addStaffToDept);

const assignNurse = require('./routes/assignNurse');
app.use('/api/assignNurse', assignNurse);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, error: 'Internal server error' });
})

app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Page not found' });
})
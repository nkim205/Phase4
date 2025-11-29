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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
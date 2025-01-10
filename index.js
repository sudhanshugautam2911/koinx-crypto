require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const statsRoutes = require('./routes/stats')
const deviationRoutes = require('./routes/deviation')
require('./jobs/fetchCryptoData');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use('/stats', statsRoutes);
app.use('/deviation', deviationRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is listening to ${PORT} port.`)
})


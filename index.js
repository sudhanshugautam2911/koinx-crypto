require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const statsRoutes = require('./routes/stats')
require('./jobs/fetchCryptoData');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use('/stats', statsRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is listening to ${PORT} port.`)
})


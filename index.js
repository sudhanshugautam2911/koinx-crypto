require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const { fetchCryptoData } = require('./services/cryptoService');
const statsRoutes = require('./routes/stats')
const app = express();
const PORT = process.env.PORT || 3000;


connectDB();
fetchCryptoData();

app.use('/stats', statsRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is listening to ${PORT} port.`)
})


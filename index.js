require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const { fetchCryptoData } = require('./services/cryptoService');

const app = express();
const PORT = process.env.PORT || 3000;


connectDB();
fetchCryptoData();

app.use("/", (req, res)=> {
    res.json({message: "hello world!"})
})

app.listen(PORT, ()=> {
    console.log(`Server is listening to ${PORT} port.`)
})


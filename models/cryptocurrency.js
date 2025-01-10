const mongoose = require('mongoose')

const cryptocurrencySchema = new mongoose.Schema({
    coin: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    marketCap: {
        type: Number,
        required: true
    },
    change24h: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Cryptocurrency = mongoose.model('Cryptocurrency', cryptocurrencySchema);

module.exports = Cryptocurrency;
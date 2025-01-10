const Cryptocurrency = require('../models/cryptocurrency');
const calculateStdDev = require('../utils/calculateStdDev');

const getPriceDeviation = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ message: "Invalid query parameter" });
    }
    
    try {
        const data = await Cryptocurrency.find({ coin }).sort({ timestamp: -1 }).limit(100);

        const prices = data.map(item => item.price);
        
        const stdDev = calculateStdDev(prices);
        res.json({ stdDev });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getPriceDeviation };

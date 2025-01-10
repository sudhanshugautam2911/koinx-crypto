const Cryptocurrency = require("../models/cryptocurrency");

const getCryptoStats = async (req,res) => {
  const { coin } = req.query;

  try {
    const data = await Cryptocurrency.findOne({ coin })
      .sort({ timestamp: -1 })
      .limit(1);
    if (!data) {
      return res.status(404).json({ message: "Coin data not found" });
    }
    res.json({
      price: data.price,
      marketCap: data.marketCap,
      change24h: data.change24h,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCryptoStats };
const axios = require("axios");
const { baseUrl, coins } = require("../config/api");
const Cryptocurrency = require("../models/cryptocurrency");

// Fetch data from coingecko api and store in our database
const fetchCryptoData = async () => {
  try {
    const coinData = await Promise.all(
      Object.keys(coins).map((key) => {
        return axios.get(`${baseUrl}/coins/${coins[key]}`);
      })
    );

    const dataToSave = coinData.map((res, index) => ({
      coin: res.data.id,
      price: res.data.market_data.current_price.usd,
      marketCap: res.data.market_data.market_cap.usd,
      change24h: res.data.market_data.price_change_percentage_24h,
    }));

    await Cryptocurrency.insertMany(dataToSave);
    console.log("Data stored: ", dataToSave);
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
  }
};

module.exports = { fetchCryptoData };

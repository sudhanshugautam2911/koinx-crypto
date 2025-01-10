const cron = require('node-cron');
const { fetchCryptoData } = require('../services/cryptoService');

// Schedule the task to run every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);

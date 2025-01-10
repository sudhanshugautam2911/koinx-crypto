require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const statsRoutes = require("./routes/stats");
const deviationRoutes = require("./routes/deviation");
require("./jobs/fetchCryptoData");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();


app.use("/stats", statsRoutes);
app.use("/deviation", deviationRoutes);

app.use("/", (req, res) => {
  res.send(`
      <html>
        <head>
          <title>API Routes Information</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #2c3e50; }
            p { font-size: 16px; }
            ul { list-style-type: none; padding: 0; }
            li { margin: 10px 0; }
            code { background-color: #ecf0f1; padding: 5px; }
          </style>
        </head>
        <body>
          <h1>Welcome to the API!</h1>
          <p>This API allows you to get statistics and deviations for different coins. Please use the following routes:</p>
          
          <h2>Available Routes:</h2>
          <ul>
            <li><strong>/stats</strong> - Get statistics for the specified coin (e.g., <code>?coin=bitcoin</code>).</li>
            <li><strong>/deviation</strong> - Get deviation information for the specified coin (e.g., <code>?coin=ethereum</code>).</li>
          </ul>
  
          <h2>Query Parameters:</h2>
          <p>Use the <code>?coin=</code> query parameter to specify a coin. Example values for the <code>coin</code> parameter include:</p>
          <ul>
            <li><code>bitcoin</code></li>
            <li><code>ethereum</code></li>
            <li><code>matic-network</code></li>
          </ul>
          <p>Example: <code>/stats?coin=bitcoin</code> will return statistics for Bitcoin.</p>
        </body>
      </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT} port.`);
});

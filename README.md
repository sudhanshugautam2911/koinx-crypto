# API Routes Information

Welcome to the API! This API allows you to get statistics and deviations for different coins. Below are the available routes and how you can use them.

## Available Routes:

- **`/stats`**: Get statistics for the specified coin.  
  Example usage:  
  `/stats?coin=bitcoin` - Get statistics for Bitcoin.  
  `/stats?coin=ethereum` - Get statistics for Ethereum.  
  `/stats?coin=matic-network` - Get statistics for Matic Network.

- **`/deviation`**: Get deviation information for the specified coin.  
  Example usage:  
  `/deviation?coin=bitcoin` - Get deviation for Bitcoin.  
  `/deviation?coin=ethereum` - Get deviation for Ethereum.  
  `/deviation?coin=matic-network` - Get deviation for Matic Network.

## Query Parameters:

You need to specify the `coin` query parameter to get data for a specific coin. The valid values for the `coin` parameter are:

- `bitcoin`
- `ethereum`
- `matic-network`

### Example:

- `/stats?coin=bitcoin` will return statistics for Bitcoin.
- `/deviation?coin=ethereum` will return deviation data for Ethereum.

## How to Use:

Simply append the `?coin=` query parameter to the routes above with one of the available coin names to get the desired data.

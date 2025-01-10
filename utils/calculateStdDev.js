const calculateStdDev = (prices) => {
    const mean = prices.reduce((sum, value) => sum + value, 0) / prices.length;
    const variance = prices.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / prices.length;
    const stdDev = Math.sqrt(variance);

    // Round to 2 decimal places
    return Math.round(stdDev * 100) / 100;
};

// Formula tested on the given test case
// const p = [40000, 45000, 50000];
// console.log(calculateStdDev(p)); // 4082.48


module.exports = calculateStdDev;

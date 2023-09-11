const { fibonacci } = require("../Domain/Fibonacci");

module.exports = async (request) => {
  const { n = 0 } = request.query;
  return fibonacci(Number(n));
};

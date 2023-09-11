const { fibonacci } = require("../Domain/Fibonacci");

module.exports = async (request) => {
  console.log(request);
  const { n = 0 } = request.query;
  console.log({ n });
  return fibonacci(n);
};

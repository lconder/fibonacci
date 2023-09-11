const asyncHandler = require("express-async-handler");
const Response = require("../Domain/Response");

const FibonacciController = (module) => ({
  get: asyncHandler(async (req, res) => {
    const { CalculateFibonacci } = module;
    const value = await CalculateFibonacci(req);
    console.log({ value });
    return Response.single(res, { value });
  }),
});

module.exports = FibonacciController;

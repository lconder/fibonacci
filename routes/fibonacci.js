const { Router } = require("express");
const router = Router();

const CalculateFibonacci = require("../application/CalculateFibonacci");
const { get } = require("../controllers/FibonacciController")({
  CalculateFibonacci,
});

router.get("/v1/fibonacci", get);

module.exports = router;

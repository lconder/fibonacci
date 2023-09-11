const { Router } = require("express");
const router = Router();
const { validate } = require("express-validation");

const CalculateFibonacci = require("../application/CalculateFibonacci");
const { get } = require("../controllers/FibonacciController")({
  CalculateFibonacci,
});
const { calculate } = require("../validators/fibonacci");

router.get("/v1/fibonacci", validate(calculate), get);

module.exports = router;

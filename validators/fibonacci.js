const Joi = require("joi");

const calculate = {
  query: Joi.object({
    n: Joi.number().required().min(0),
  }),
};

module.exports = { calculate };

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Fibonacci API",
      version: "1.0",
      description: "Fibonacci API",
    },
    servers: [
      {
        url: `http://localhost:5555`,
      },
    ],
  },
  apis: ["index.js", "./docs/*.js", "./docs/schemas/*.js"],
};

module.exports = (app) => {
  const specs = swaggerJsDoc(options);
  app.use("/docs", swaggerUI.serve);
  app.get(
    "/docs",
    async (req, res, next) => {
      return next();
    },
    swaggerUI.setup(specs, { customSiteTitle: "Fibonacci API Docs" }),
  );
};

const express = require("express");
const app = express();
const port = 5555;
const routes = require("./routes/fibonacci");

app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: false, limit: "150mb" }));
app.disable("x-powered-by");
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
cors();
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use("/ypost", require("./route/youpost"));
app.use("/shorts", require("./route/shorts"));
app.listen(4000, () => {
  console.log("Server is running on 4000 port...");
});

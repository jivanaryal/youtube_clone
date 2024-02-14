const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/ypost", require("./route/youpost"));
app.use("/shorts", require("./route/shorts"));
app.use("/login", require("./route/login"));
app.listen(4000, () => {
  console.log("Server is running on 4000 port...");
});

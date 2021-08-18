const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: __dirname + "\\.env" });
const authRouter = require("./routes/auth");
const adminpanelRouter = require("./routes/Adminpanel");
const PORT = process.env.PORT || 9001;
const mongoUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster1.skw3y.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API WORKING PROPERLY");
});

app.use("/auth", authRouter);
app.use("/adminpanel", adminpanelRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

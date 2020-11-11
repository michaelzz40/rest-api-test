const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;
const bookRoute = require("./api/book");
const userRoute = require("./api/user");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/books", bookRoute);
app.use("/api/auth", userRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server Starting on ${PORT}`);
    });
  });

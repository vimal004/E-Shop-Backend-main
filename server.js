const express = require("express");
const router = require("./home");
const userrouter = require("./userroutes");
const cors = require("cors");
const mongoose = require("mongoose");
//https://mern-project-backend-green.vercel.app/

const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://2004vimal:zaq1%40wsx@cluster0.kfsrfxi.mongodb.net/";

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Mongo DB connected!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/api/users", userrouter);

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});

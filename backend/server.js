const dotenv = require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./config/dB");

const port = process.env.PORT || 5000;

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));

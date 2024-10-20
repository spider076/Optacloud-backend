const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const addressRoutes = require("./routes/address");
require("dotenv").config();

const app = express();
app.use(require("cors")());

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/address", addressRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

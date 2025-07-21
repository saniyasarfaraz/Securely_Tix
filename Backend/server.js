// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const authRoutes = require('./routes/auth');
// const dataRoutes = require('./routes/data');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/data', dataRoutes);
// require('dotenv').config();
// app.get('/', (req, res) => {
//   res.send('Welcome to the Securelytix API');
// });

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
//   .catch(err => console.log(err));.

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");

const app = express();

// ✅ FIXED CORS: configure properly
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // use your frontend URL here in production
    credentials: true,
  })
);

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Securelytix API");
});

// ✅ MongoDB Connection and Server Startup
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.log("❌ MongoDB connection error:", err));

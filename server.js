const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const userRoutes = require("./routes/userRoutes");

dotenv.config();

console.log(process.env.MONGO_URI);

connectDB();

const app = express();

app.use(express.json());

app.use(cors());


// Routes
app.use("/api/auth", authRoutes);
console.log("MONGO_URI =", process.env.MONGO_URI);
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {

  res.send("API Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
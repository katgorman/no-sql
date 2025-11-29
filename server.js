const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/inventory", {
useNewUrlParser: true,
useUnifiedTopology: true,
});


// Routes
app.use("/api/items", require("./routes/items"));


// Start
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const express = require("express");
const cors = require('cors');
require('dotenv').config();
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());

app.get("/Home", (req, res) => {
    res.send("Welcome to the CleanCloud API!");
});
app.listen(4000, () => console.log("Server is running on port 4000"));

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

//To serve static files
app.use(express.static(path.join(__dirname, "..", "dist")));
// catch-all route for React Router
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});







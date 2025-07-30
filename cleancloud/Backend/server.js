const express = require("express");
const cors = require('cors');
require('dotenv').config();
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the CleanCloud API!");
});

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});





app.listen(4000, () => console.log("Server is running on port 4000"));
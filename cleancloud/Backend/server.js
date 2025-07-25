const express = require("express");
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to the CleanCloud API!");
});


app.listen(4000, () => console.log("Server is running on port 4000"));
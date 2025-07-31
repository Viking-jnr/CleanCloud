const express = require("express");
const router = express.Router();
const { signup, login, requestReset, resetPassword, validateToken } = require('../authentication');

router.post("/signup", signup);
router.post("/login", login);
router.post("/request-reset", requestReset);
router.post("/reset-password", resetPassword);


 


module.exports = router;
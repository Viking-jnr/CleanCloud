const db = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
    const { company, user } = req.body;

    try{
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const companyResult = await db.query(
            `INSERT INTO companies (name, city, country, business_type, num_stores) VALUES ($1, $2, $3, $4, $5) RETURNING id `,
            [company.companyName, company.city, company.country, company.primaryBusinessType, company.numberOfStores]
        );
        const companyID = companyResult.rows[0].id;

        await db.query(
            `INSERT INTO users (name, phone, email, password, company_id) VALUES ($1, $2, $3, $4, $5)`,
            [user.name, user.phoneNumber, user.email, hashedPassword, companyID]
        );
        res.status(200).json({ message: "Sign up Successful"});
    }catch(err){
        res.status(500).json({ error: err.message});
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userResult = await db.query(
            `SELECT * FROM users where email = $1`,
            [email]
        );
        const user = userResult.rows[0];

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid email or password"});
        }

        const token = jwt.sign({ userID: user.id}, process.env.JWT_SECRET, { expiresIn: '1h'});
        res.json({ token });

    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

//Password Reset Function
const crypto = require('crypto');
const nodemailer = require('nodemailer');
//To send users email reset links
exports.requestReset = async (req, res) => {
    const { emailReset } = req.body;
    try{
        const userResult = await db.query(
            `SELECT * FROM users WHERE email = $1`, [emailReset]
        );
        const user = userResult.rows[0];

        if (!user) {
            return res.status(404).json({ error: "User not found!"});
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expiry = new Date(Date.now() + 3600000);//expires in 1hr

        await db.query(
            `INSERT INTO password_resets (email, token, expires_at) VALUES ($1, $2, $3)`,
            [emailReset, token, expiry]
        );

        const resetLink = `https://cleancloud.onrender.com/auth/reset-password?token=${token}`;
        //send email using nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: emailReset,
            subject: 'Password Reset Request',
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password. The link is valid for 1 hour.</p>`
        });
        res.json({ message: "Password reset link sent to your email!" });
    }catch (err) {
        res.status(500).json({error: err.message});
    }
}

//Token Validation
exports.validateToken = async (req, res) => {
    const { token } = req.body;
    try {
        const resetToken = await db.query(
            `SELECT * FROM password_resets WHERE token = $1 AND expires_at > NOW()`,
             [token]
        );

        if (resetToken.rowCount === 0) {
            return res.status(400).send("This link is invalid or has expired.");
  }
        res.status(200).json({ token})
    } catch (err){
        res.status(500).json({ error: err.message });
        console.error("Error validating token:", err.message);
    }
}

//To reset the password after validating the token
exports.resetPassword = async (req, res) => {
    const {  token, newPassword } = req.body;

    try{
        const resetToken = await db.query(
            `SELECT * FROM password_resets WHERE token = $1`, [token] 
        );
        const resetEntry = resetToken.rows[0];

        //Check if user is found and token is expired
        if (!resetEntry){
            return res.status(400).json({error: "Invalid or expired token"});
        }

        const now = new Date();
        if (new Date(resetEntry.expires_at) < now){
            return res.status(400).json({error: "Token has expired"});
        }

        //Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        //update the user's password
        await db.query(
            `UPDATE users SET password= $1 WHERE email= $2`,
            [hashedPassword, resetEntry.email]
        );

        //Delete the reset entry and token so it can not be used again
        await db.query(
            `DELETE FROM password_resets WHERE token = $1`, [token]
        );
        res.json({ message: "Password has been reset successfully!" });
    }catch (err) {
        res.status(500).json({error: err.message});
        console.error("Error resetting password:", err.message);
    }
};
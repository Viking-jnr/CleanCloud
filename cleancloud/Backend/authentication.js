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
            `INSERT INTO users (name, phone, email, password, company_id) VALUES ($1, $2, $3, $4. $5)`,
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
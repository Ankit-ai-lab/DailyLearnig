const express = require('express');
const authrouter = express.Router();

authrouter.post('/signup', (req, res) => {
    res.json({ message: 'Signup success' });
});

module.exports = authrouter;

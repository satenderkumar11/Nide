const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(400).json({ message: 'Registration failed', error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(400).json({ message: 'Login failed', error: err.message });
    }
};

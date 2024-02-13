const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    username: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true },
    role: {type: String, required: true}, // Need clarification
    wishlist: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
    ],
    jobsApplied: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
    ]
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

exports.UserModel = mongoose.model('User', userSchema);

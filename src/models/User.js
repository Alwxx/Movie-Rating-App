const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    date_joined: {
        type: Date,
        default: Date.now,
    },
});


UserSchema.methods.matchPassword = async function (enteredPassword) {
    console.log(enteredPassword, this.password)
    const matchPass = await bcrypt.compare(enteredPassword, this.password);
    console.log(matchPass, "password")
    return matchPass;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;

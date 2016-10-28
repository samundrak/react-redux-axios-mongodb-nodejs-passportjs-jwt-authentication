/* global global*/
const mongoose = global.db;
const formalStringType = {
    type: String,
    lowercase: true
};
const userSchema = mongoose.Schema({
    first_name: formalStringType,
    last_name: formalStringType,
    email: formalStringType,
    password: String,
    status: {
        type: Number,
        default: 0
    },
    hash: String,
    social: String,
    lastLogin: {type: Date, default: Date.now},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('users', userSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//note trim is used to deal with white spacess arround string in any form like username or pass  i.e  p a s s becoms=pass by trim
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

// timestamp is used to get all info like when created edited or deleted
const User = mongoose.model('User', userSchema);

module.exports = User;
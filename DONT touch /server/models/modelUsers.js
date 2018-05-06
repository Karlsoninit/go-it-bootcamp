const mongoose =require('mongoose');

const usersSchem = new mongoose.Schema({
    admin: {
        type: Boolean,
        // required: true,
        default: false
    },
    login: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String, 
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
    points: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('usersModel', usersSchem);
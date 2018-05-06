const mongoose =require('mongoose');

const topicsSchem = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    point: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('TopicsSchem', topicsSchem);
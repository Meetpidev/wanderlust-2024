const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
        default: 3,
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const Feedback = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedback;

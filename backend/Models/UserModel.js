const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 8,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 8,
    },
    type: {
        type: String,
    },
    token: {
        type: String,
    }
}, { versionKey: false })
module.exports = mongoose.model('user', userSchema)
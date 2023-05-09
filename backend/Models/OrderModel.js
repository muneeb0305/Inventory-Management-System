const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    customer_Name: {
        type: String,
        required: true
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('orders', orderSchema)

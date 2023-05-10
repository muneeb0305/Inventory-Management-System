const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventorySchema = new Schema({

    image: {
        type: Buffer,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    priceIn: {
        type: Number,
        required: true
    },
    priceOut: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
}, { versionKey: false })

module.exports = mongoose.model('inventory', inventorySchema)
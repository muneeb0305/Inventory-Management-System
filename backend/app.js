const mongoose = require('mongoose');
const express = require('express')
const Orders = require('./Orders/orders')
const url = 'mongodb://127.0.0.1:27017/InventoryManagementSystem'
const app = express()
const PORT = 8080
mongoose.connect(url)
    .then(
        () => {
            console.log('Connected to Mongo Successfully')
        },
        (e) => {
            console.log(`Connection Error: ${e.message}`)
        }
    )
app.get('/', (req,res)=>{
    res.send('Welcome to Inventory Management System')
})

app.use('/order', Orders)

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`)
})
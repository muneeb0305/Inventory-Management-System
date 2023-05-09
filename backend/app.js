const mongoose = require('mongoose');
const express = require('express')
const Order = require('./Routers/orders')
const url = 'mongodb://127.0.0.1:27017/InventoryManagementSystem'
const app = express()
const PORT = 8080
app.use(express.json())
mongoose.connect(url)
    .then(
        () => {
            console.log('Connected to Mongo Successfully')
        },
        (e) => {
            console.log(`Connection Error: ${e.message}`)
        }
    )
    
    app.get('/', (req, res) => {
        res.send('Welcome to Inventory Management System')
    })
    
    app.use('/order', Order)
    
    //Error Handling
    app.use((error, req, res, next) => {
        console.error(error);
        res.status(500).send('Server Error');
    });
    
    app.listen(PORT, () => {
        console.log(`Server is running on http:localhost:${PORT}`)
})
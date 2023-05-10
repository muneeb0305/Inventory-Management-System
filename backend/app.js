const mongoose = require('mongoose');
const express = require('express')
const Order = require('./Routers/orders')
const Sale = require('./Routers/sale')
const Inventory = require('./Routers/inventory')
const User = require('./Routers/user');
const auth = require('./Middleware/auth');
const url = 'mongodb://127.0.0.1:27017/InventoryManagementSystem'
const app = express()
const PORT = 8080
app.use(express.json())
mongoose.connect(url)
    .then(() => {
        console.log('Connected to Mongo Successfully')
    }, (e) => { console.log(`Connection Error: ${e.message}`) }
    )

app.get('/',auth, (req, res) => {
    res.send('Welcome to Inventory Management System')
})

app.use('/order', auth, Order)
app.use('/sale', auth, Sale)
app.use('/inventory', auth, Inventory)
app.use('/user', User)

//Error Handling
app.use('/', (req, res) => {
    res.status(404).send('API not Found')
})
app.use((error, req, res) => {
    console.error(error);
    res.status(error.statusCode).send(error.message);
});

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`)
})
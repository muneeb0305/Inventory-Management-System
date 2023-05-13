const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const Order = require('./Routers/orders')
const Sale = require('./Routers/sale')
const Inventory = require('./Routers/inventory')
const User = require('./Routers/user');
const auth = require('./Middleware/auth');
const errorHandler = require('./Middleware/errorHandler');
const notFound = require('./Middleware/notFound');
const url = 'mongodb://127.0.0.1:27017/InventoryManagementSystem'
const app = express()
const PORT = 8080
app.use(express.json())


mongoose.connect(url)
    .then(() => {
        console.log('Connected to Mongo Successfully')
    }, (e) => { console.log(`Connection Error: ${e.message}`) }
    )

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.get('/', (req, res) => {
    res.send('Welcome to Inventory Management System')
})

app.use('/user', User)
app.use('/order', Order)
app.use('/sale', auth, Sale)
app.use('/inventory', auth, Inventory)

//If API not Found
app.use('/', notFound)

//Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`)
})
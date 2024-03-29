const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const Order = require('./App/Routers/orders')
const Sale = require('./App/Routers/sale')
const Inventory = require('./App/Routers/inventory')
const User = require('./App/Routers/user');
const auth = require('./App/Middleware/auth');
const errorHandler = require('./App/Middleware/errorHandler');
const notFound = require('./App/Middleware/notFound');
const dbConfig = require('./App/Config/db.config')
const app = express()
const PORT = 8080
app.use(express.json())


mongoose.connect(dbConfig.url)
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
app.use('/order',auth, Order)
app.use('/sale', auth, Sale)
app.use('/inventory', auth, Inventory)

//If API not Found
app.use('/', notFound)

//Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`)
})
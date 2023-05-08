const express = require('express')
const Orders = require('../Models/Orders')
const router = express.Router()

router.get('/admin_cards', async (req, res) => {
    try {
        const orderPlaced = await Orders.countDocuments({ status: 'Order Placed' })
        const orderPending = await Orders.countDocuments({ status: { $nin: ['Order Placed', 'Order Delivered'] } });
        const orderDelivered = await Orders.countDocuments({ status: 'Order Delivered' });

        res.status(200).send({
            'OrderPlaced': orderPlaced,
            'OrderPending': orderPending,
            'OrderDelivered': orderDelivered,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

router.get('/recent_orders', async (req, res) => {
    try {
        const recentOrders = await Orders.find({ status: 'Order Placed' })
            .select(['_id', 'date', 'customer_Name', 'product', 'quantity', 'status', 'amount'])
            .sort('-date').limit(5)
        res.status(200).send(
            recentOrders)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const Found = await Orders.find({ _id: id })
        if (Found.length > 0) {
            const deleteOrder = await Orders.findByIdAndDelete({ _id: id })
            res.status(200).send(deleteOrder)
        }
        else {
            res.status(404).send('Data Not Found')
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})
router.post('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const update = req.body
        const bodyValidation = Object.keys(req.body).length
        if (bodyValidation === 7) {
            const Found = await Orders.find({ _id: id })
            if (Found.length > 0) {
                update.date = Date.now()
                const updatedOrder = await Orders.findByIdAndUpdate(id, update, { new: true });
                res.status(200).send(updatedOrder)
            }
            else {
                res.status(404).send('Order ID Not Found')
            }
        }
        else {
            res.status(400).send("Kindly send all fields")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

router.put('/add', async (req, res) => {
    const { customer_id, customer_Name, product, quantity, address, city, amount } = req.body;
    const bodyValidation = Object.keys(req.body).length
    if(bodyValidation === 8){
        try {
            const newOrder = new Orders({
                customer_id,
                customer_Name,
                product,
                quantity,
                address,
                city,
                amount,
                status: 'Order Placed',
                date: Date.now()
            })
            const savedOrder = await newOrder.save()
            res.status(201).send(savedOrder)
        } catch (error) {
            console.log(error.message)
            res.status(500).send('Server Error')
        }
    }
    else{
        res.status(400).send('Kindly send valid data')
    }
})

module.exports = router
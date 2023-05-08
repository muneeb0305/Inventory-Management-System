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

module.exports = router
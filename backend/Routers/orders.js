const express = require('express')
const router = express.Router()
const { recentOrder, deleteOrder, addOrder, updateOrder, adminOrderCard } = require('../Services/OrderService')

router.get('/admin_cards', (req, res, next) => {
    adminOrderCard()
        .then((cardData) => {
            res.status(200).send(cardData)
        })
        .catch((err) => next(err))
})

router.get('/recent_orders', (req, res, next) => {
    recentOrder()
        .then((orders) => {
            res.status(200).send(orders)
        }).catch((err) => next(err))
})

router.delete('/delete/:id', (req, res, next) => {
    deleteOrder(req.params.id)
        .then(() => {
            res.status(200).send('Order Deleted');
        })
        .catch((error) => next(error));
})

router.post('/update/:id', (req, res, next) => {
    updateOrder(req)
        .then(() => {
            res.status(200).send('Order Updated');
        })
})

router.put('/add', (req, res, next) => {
    addOrder(req)
        .then(() => {
            res.status(201).send("Order Added")
        })
        .catch((error) => next(error));
})

module.exports = router
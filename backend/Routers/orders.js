const express = require('express')
const router = express.Router()
const { orderById, CustomerorderDetails, recentOrder, deleteOrder, addOrder, updateOrder, adminOrderCard, orderDetails, customerCard } = require('../Services/OrderService')

/* Admin Card */
router.get('/admin_cards', (req, res, next) => {
    adminOrderCard()
        .then((cardData) => {
            res.status(200).send(cardData)
        })
        .catch((err) => next(err))
})
/* Customer Card */
router.get('/customer_cards', (req, res, next) => {
    customerCard(req)
        .then((cardData) => {
            res.status(200).send(cardData)
        })
        .catch((err) => next(err))
})
/* Customer Order */
router.get('/customer_order', (req, res, next) => {
    CustomerorderDetails(req)
        .then((orders) => {
            res.status(200).send(orders)
        })
        .catch((err) => next(err))
})
/* Recent Orders */
router.get('/recent_orders', (req, res, next) => {
    recentOrder()
        .then((orders) => {
            res.status(200).send(orders)
        }).catch((err) => next(err))
})
/* Delete Order */
router.delete('/delete/:id', (req, res, next) => {
    deleteOrder(req.params.id)
        .then(() => {
            res.status(200).send('Order Deleted');
        }).catch((error) => next(error));
})
/* Update Order */
router.post('/update/:id', (req, res, next) => {
    updateOrder(req)
        .then(() => {
            res.status(200).send('Order Updated');
        }).catch((error) => next(error))
})
/* Add Order */
router.put('/add', (req, res, next) => {
    addOrder(req)
        .then(() => {
            res.status(201).send("Order Added")
        })
        .catch((error) => next(error));
})
/*Order Details*/
router.get('/details', (req, res, next) => {
    orderDetails()
        .then((data) => {
            res.status(200).send(data)
        }).catch((error) => next(error))
})
/*Order By ID*/
router.get('/:id', (req, res, next) => {
    orderById(req)
        .then((data) => {
            res.status(200).send(data)
        }).catch((error) => next(error))
})

module.exports = router
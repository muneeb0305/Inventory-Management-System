const express = require('express')
const { totalSale, totalOrders, productSold, saleTable } = require('../Services/SaleService')
const router = express.Router()

/*Total Sale */
router.get('/totalsale', (req, res, next) => {
    totalSale()
        .then((amount) => {
            res.status(200).send(amount)
        })
        .catch(err => { throw err })
})
/*Total Orders */
router.get('/totalorders', (req, res, next) => {
    totalOrders()
        .then((orders) => {
            res.status(200).send(orders)
        })
        .catch(err => { throw err })
})
/*Product Sold */
router.get('/productsold', (req, res, next) => {
    productSold()
        .then((orders) => {
            res.status(200).send(orders)
        })
        .catch(err => { throw err })
})
/*Sale by Cities */
router.get('/salebycities', (req, res, next) => {
    saleTable()
        .then((orders) => {
            res.status(200).send(orders)
        })
        .catch(err => { throw err })
})





module.exports = router
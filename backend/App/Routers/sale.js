const express = require('express')
const { saleCard, saleTable } = require('../Controllers/SaleService')
const router = express.Router()

/*Sale Card Data */
router.get('/salecard', (req, res, next) => {
    saleCard()
        .then((data) => {
            res.status(200).send(data)
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
const express = require('express')
const { addItem, deleteItem, updateItem, viewItems, viewItemsbyID } = require('../Controllers/InventoryService')
const router = express.Router()

/* Add Item */
router.put('/add', (req, res, next) => {
    addItem(req)
        .then(() => {
            res.status(201).send("Item Added in Inventory")
        })
        .catch((err) => next(err))
})
/* Delete Item */
router.delete('/delete/:id', (req, res, next) => {
    deleteItem(req.params.id)
        .then(() => {
            res.status(200).send("Item Deleted in Inventory")
        })
        .catch((err) => next(err))
})
/* Update Item */
router.post('/update/:id', (req, res, next) => {
    updateItem(req)
        .then(() => {
            res.status(200).send("Item Updated in Inventory")
        })
        .catch((err) => next(err))
})
/* View Items */
router.get('/viewitems', (req, res, next) => {
    viewItems()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => next(err))
})
/* View Items by id */
router.get('/viewitems/:id', (req, res, next) => {
    viewItemsbyID(req.params.id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => next(err))
})

module.exports = router
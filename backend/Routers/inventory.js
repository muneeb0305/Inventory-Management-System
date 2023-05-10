const express = require('express')
const addItem = require('../Services/InventoryService')
const router = express.Router()

router.put('/add', (req,res,next)=>{
    addItem(req)
    .then(()=>{
        res.status(201).send("Item Added in Inventory")
    })
    .catch((err)=>next(err))
})

module.exports = router
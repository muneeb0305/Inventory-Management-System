const Inventory = require('../Models/InventoryModel')

const addItem = (req) => {
    const { itemName, brand, priceIn, priceOut, category, stock, image } = req.body
    const item = new Inventory({
        itemName,
        brand,
        priceIn,
        priceOut,
        category,
        stock,
        image
    })
    return item.save()
        .then(() => console.log("Item Added in Inventory"))
        .catch((err) => { throw err })
}

module.exports = addItem
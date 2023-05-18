const Inventory = require('../Models/InventoryModel')

const addItem = (req) => {
    const { itemName, brand, priceIn, priceOut, category, stock, image } = req.body
    const bodyValidation = Object.keys(req.body).length
    if (bodyValidation === 7) {
        return Inventory.findOne({ itemName: itemName })
            .then((items) => {
                if (items) {
                    const error = new Error('Item already exist');
                    error.statusCode = 400;
                    throw error;
                }
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
            })
            .catch(err => { throw err })
    }
    else {
        const error = new Error('Kindly send valid data');
        error.statusCode = 400;
        throw error;
    }
}

const deleteItem = (id) => {
    return Inventory.findById(id)
        .then((idFound) => {
            if (!idFound) {
                const error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            }
            else {
                return Inventory.deleteOne({ _id: id })
                    .then(() => { console.log("Deleted") })
                    .catch((error) => { throw error })
            }
        }).catch((error) => { throw error })
};

const updateItem = (req) => {
    const id = req.params.id
    const update = req.body
    const bodyValidation = Object.keys(req.body).length

    if (bodyValidation === 7) {
        return Inventory.findById(id)
            .then((idFound) => {
                if (!idFound) {
                    const error = new Error('Item ID Not Found');
                    error.statusCode = 404;
                    throw error;
                }
                return Inventory.findOne({ itemName: update.itemName })
                    .then((item) => {
                        if (item.itemName != idFound.itemName) {
                            const error = new Error('Item already exist');
                            error.statusCode = 400;
                            throw error;
                        }
                        else if (item.itemName === idFound.itemName) {
                            return Inventory.findByIdAndUpdate(id, update)
                                .then(() => console.log("Item Updated"))
                                .catch(err => { throw err })
                        }
                    })
            }).catch((err) => { throw err; })
    }
    else {
        const error = new Error('Kindly send valid data');
        error.statusCode = 400;
        throw error;
    }
}

const viewItems = () => {
    return Inventory.find().select(['itemName', 'brand', 'priceIn', 'priceOut', 'category', 'stock'])
        .then((items) => {
            return items
        })
        .catch((err) => { throw err })
}
const viewItemsbyID = (id) => {
    return Inventory.findById(id).select(['itemName', 'brand', 'priceIn', 'priceOut', 'category', 'stock','image'])
        .then((items) => {
            return items
        })
        .catch((err) => { throw err })
}
module.exports = { addItem, deleteItem, updateItem, viewItems, viewItemsbyID }
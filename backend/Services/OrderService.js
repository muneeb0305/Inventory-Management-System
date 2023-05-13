const Orders = require('../Models/OrderModel')
const Inventory = require('../Models/InventoryModel');
const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken')
const SecretKey = 'MERNdeveloper'

const adminOrderCard = () => {
    return Promise.all([
        Orders.countDocuments({ status: 'Order Placed' }),
        Orders.countDocuments({ status: { $nin: ['Order Placed', 'Order Delivered'] } }),
        Orders.countDocuments({ status: 'Order Delivered' })
    ])
        .then(([orderPlaced, orderPending, orderDelivered]) => {
            return {
                'OrderPlaced': orderPlaced,
                'OrderPending': orderPending,
                'OrderDelivered': orderDelivered,
            };
        })
        .catch((error) => { throw error });
};
const customerCard = (req) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    let userId;
    jwt.verify(token, SecretKey, (err, decoded) => {
        if (err) {
            throw err;
        } else {
            userId = decoded.ID;
        }
    });
    let orderPlaced
    let orderPending
    let orderDelivered
    return Orders.find({ customer_id: userId })
        .then((orders) => {
            orderPlaced = orders.filter((data) => data.status === "Order Placed").length
            orderPending = orders.filter((data) => data.status != "Order Placed" && data.status != "Order Delivered").length
            orderDelivered = orders.filter((data) => data.status === "Order Delivered").length
            return {
                'OrderPlaced': orderPlaced,
                'OrderPending': orderPending,
                'OrderDelivered': orderDelivered,
            };
        })
        .catch((error) => { throw error });
};

const recentOrder = () => {
    return Orders.find({ status: 'Order Placed' })
        .select(['_id', 'date', 'customer_Name', 'product', 'quantity', 'status', 'amount'])
        .sort('-date').limit(5)
        .then((data) => {
            return data
        }).catch((error) => { throw error });
}

const deleteOrder = (id) => {
    return Orders.findById(id)
        .then((idFound) => {
            if (!idFound) {
                const error = new Error('Data not found');
                error.statusCode = 404;
                throw error;
            }
            else {
                return Inventory.findOne({ itemName: idFound.product })
                    .then((item) => {
                        item.stock += idFound.quantity
                        Promise.all([
                            Orders.deleteOne({ _id: id }),
                            item.save()
                        ])
                            .then(() => { console.log("Item Updated and order Deleted") })
                            .catch((error) => { throw error })
                    })
            }
        }).catch((error) => { throw error })
};

const addOrder = (req) => {
    const { product, quantity, address, city, amount } = req.body;
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    let userID;

        return Inventory.findOne({ itemName: product })
            .then((item) => {
                if (!item) {
                    const error = new Error('Item Not Found');
                    error.statusCode = 400;
                    throw error;
                }
                else if (item.stock < quantity) {
                    const error = new Error('Insufficient Stock');
                    error.statusCode = 400;
                    throw error;
                }
                else {
                    jwt.verify(token, SecretKey, (err, decoded) => {
                        if (err) {
                            throw err
                        } else {
                            userID = decoded.ID;
                        }
                    });
                    return User.findById(userID)
                        .then((user) => {
                            item.stock -= quantity
                            const newOrder = new Orders({
                                customer_id: userID,
                                customer_Name: user.name,
                                product,
                                quantity,
                                address,
                                city,
                                amount,
                                status: 'Order Placed',
                                date: Date.now()
                            })
                            Promise.all([
                                newOrder.save(),
                                item.save()
                            ])
                                .then(() => console.log("Item Updated & Order Saved"))
                                .catch((error) => { throw error })
                        })
                }
            })
            .catch((err) => {
                throw err;
            })
}
const updateOrder = (req) => {
    const id = req.params.id
    const update = req.body
    const bodyValidation = Object.keys(req.body).length
    if (bodyValidation === 8) {
        return Orders.findById(id)
            .then((idFound) => {
                if (!idFound) {
                    const error = new Error('Order ID Not Found');
                    error.statusCode = 404;
                    throw error;
                }
                return Inventory.findOne({ itemName: update.product })
                    .then((item) => {
                        if (!item) {
                            const error = new Error('Item Not Found');
                            error.statusCode = 400;
                            throw error;
                        }
                        else if (item.stock < update.quantity) {
                            const error = new Error('Insufficient Stock');
                            error.statusCode = 400;
                            throw error;
                        }
                        else {
                            if (idFound.quantity != update.quantity) {
                                if (idFound.quantity > update.quantity) {
                                    const quantity = idFound.quantity - update.quantity
                                    item.stock += quantity
                                    update.date = Date.now()
                                    Promise.all([
                                        Orders.findByIdAndUpdate(id, update),
                                        item.save()
                                    ])
                                        .then(() => console.log("Item and Order Updated"))
                                        .catch(err => { throw err })
                                }
                                else if (idFound.quantity < update.quantity) {
                                    const quantity = idFound.quantity - update.quantity
                                    item.stock += quantity
                                    update.date = Date.now()
                                    Promise.all([
                                        Orders.findByIdAndUpdate(id, update),
                                        item.save()
                                    ])
                                        .then(() => console.log("Item and Order Updated"))
                                        .catch(err => { throw err })
                                }
                                else {
                                    update.date = Date.now()

                                    return Orders.findByIdAndUpdate(id, update)
                                        .then(() => console.log("Item and Order Updated"))
                                        .catch(err => {
                                            throw er
                                        })
                                }
                            }
                            else {
                                update.date = Date.now()
                                Promise.all([
                                    Orders.findByIdAndUpdate(id, update),
                                    item.save()
                                ])
                                    .then(() => console.log("Order Updated"))
                                    .catch(err => { throw err })
                            }
                        }
                    })

            }).catch((err) => { throw err; })
    }
}
const orderById = (req) => {
    const id = req.params.id
    return Orders.findById(id)
        .then((order) => {
            return order
        }).catch((err) => { throw err; })
}


const orderDetails = () => {
    return Promise.all(([
        Orders.find({ status: 'Order Placed' }),
        Orders.find({ status: 'Order Received' }),
        Orders.find({ status: 'Order Picked' }),
        Orders.find({ status: 'Order Packaged' }),
        Orders.find({ status: 'Order Shipped' }),
        Orders.find({ status: 'Order Delivered' })
    ]))
        .then(([orderPlaced, orderReceived, orderPicked, orderPackaged, orderShipped, orderDelivered]) => {
            return {
                orderPlaced: orderPlaced,
                orderReceived: orderReceived,
                orderPicked: orderPicked,
                orderPackaged: orderPackaged,
                orderShipped: orderShipped,
                orderDelivered: orderDelivered
            }
        })
        .catch(err => { throw err })
}
const CustomerorderDetails = (req) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    let userId;
    jwt.verify(token, SecretKey, (err, decoded) => {
        if (err) {
            throw err;
        } else {
            userId = decoded.ID;
        }
    });
    return Orders.find({ customer_id: userId })
        .then((data) => {
            return data
        })
        .catch(err => { throw err })
}

module.exports = {orderById, CustomerorderDetails, recentOrder, deleteOrder, addOrder, updateOrder, adminOrderCard, orderDetails, customerCard };
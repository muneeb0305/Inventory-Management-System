const Orders = require('../Models/OrderModel')

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
        .catch(() => { throw error });
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
            console.log(idFound)
            if (!idFound) {
                const error = new Error('Data not found');
                error.statusCode = 404;
                throw error;
            }
            else {
                return Orders.deleteOne({ _id: id })
                    .then(() => { console.log("Deleted") })
                    .catch((error) => { throw error })
            }
        }).catch((error) => { throw error })
};

const addOrder = (req) => {
    const { customer_id, customer_Name, product, quantity, address, city, amount } = req.body;
    const bodyValidation = Object.keys(req.body).length
    if (bodyValidation === 7) {
        const newOrder = new Orders({
            customer_id,
            customer_Name,
            product,
            quantity,
            address,
            city,
            amount,
            status: 'Order Placed',
            date: Date.now()
        })
        return newOrder.save()
            .then(() => console.log("Order Saved"))
            .catch((error) => { throw error })
    } else {
        const error = new Error('Kindly send valid data');
        error.statusCode = 400;
        throw error;
    }
}
const updateOrder = (req) => {
    const id = req.params.id
    const update = req.body
    const bodyValidation = Object.keys(req.body).length

    if (bodyValidation === 7) {
        return Orders.findById(id)
            .then((idFound) => {
                if (!idFound) {
                    const error = new Error('Order ID Not Found');
                    error.statusCode = 404;
                    throw error;
                }
                update.date = Date.now()
                return Orders.findByIdAndUpdate(id, update)
                    .then(() => console.log("Order Updated"))
                    .catch(err => { throw err })

            }).catch((err) => { throw err; })
    }
    else {
        const error = new Error('Kindly send valid data');
        error.statusCode = 400;
        throw error;
    }
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
module.exports = { recentOrder, deleteOrder, addOrder, updateOrder, adminOrderCard, orderDetails };
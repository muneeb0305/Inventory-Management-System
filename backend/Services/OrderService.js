const Orders = require('../Models/OrderModel')

const adminOrderCard = async () => {
    const orderPlaced = await Orders.countDocuments({ status: 'Order Placed' })
    const orderPending = await Orders.countDocuments({ status: { $nin: ['Order Placed', 'Order Delivered'] } });
    const orderDelivered = await Orders.countDocuments({ status: 'Order Delivered' });
    const cardData = {
        'OrderPlaced': orderPlaced,
        'OrderPending': orderPending,
        'OrderDelivered': orderDelivered,
    }
    return cardData
}



const recentOrder = async () => {
    const response = await Orders.find({ status: 'Order Placed' })
        .select(['_id', 'date', 'customer_Name', 'product', 'quantity', 'status', 'amount'])
        .sort('-date').limit(5)
    return response
}

const deleteOrder = async (id) => {
    const order = await Orders.findById(id);
    if (!order) {
        const error = new Error('Data not found');
        error.statusCode = 404;
        throw error;
    }
    else {
        await Orders.deleteOne({ _id: id })
    }
};

const addOrder = async (req) => {
    const { customer_id, customer_Name, product, quantity, address, city, amount } = req.body;
    const bodyValidation = Object.keys(req.body).length
    if (bodyValidation === 8) {
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
        await newOrder.save()
    }
    else {
        const error = new Error('Kindly send valid data');
        error.statusCode = 400;
        throw error;
    }
}
const updateOrder = async (req) => {
    const id = req.params.id
    const update = req.body
    const bodyValidation = Object.keys(req.body).length
    if (bodyValidation === 7) {
        const Found = await Orders.find({ _id: id })
        if (Found.length > 0) {
            update.date = Date.now()
            const updatedOrder = await Orders.findByIdAndUpdate(id, update, { new: true });
        }
        else {
            const error = new Error('Order ID Not Found');
            error.statusCode = 404;
            throw error;
        }
    }
    else {
        const error = new Error('Kindly send all fields');
        error.statusCode = 400;
        throw error;
    }
}
module.exports = { recentOrder, deleteOrder, addOrder, updateOrder, adminOrderCard };
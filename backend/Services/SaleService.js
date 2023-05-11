const Orders = require('../Models/OrderModel')
const User = require('../Models/UserModel')

const saleCard = () => {
    let sale = 0
    let items = 0
    let users = 0
    return Promise.all([
        Orders.find({ status: 'Order Delivered' }),
        User.find({ type: "Customer" }).countDocuments(),
        Orders.find().countDocuments()
    ])
        .then(([Orders, Customers, totalOrders]) => {
            Orders.map((order) => {
                sale += order.amount
                items += order.quantity
            })
            return {
                TotalUsers: Customers,
                TotalSale: sale,
                TotalOrders: totalOrders,
                ProductSold: items
            }
        })
        .catch(err => { throw err })
}
const saleTable = () => {
    return Orders.find({ status: 'Order Delivered' })
        .then((orders) => {
            const CityNames = orders.map((order) => order.city)
            const UniqueCity = new Set(CityNames)
            let CityObject = [...UniqueCity].reduce((arr, city) => {
                let totalAmount = 0
                let productSold = 0
                orders.filter((data) => data.city === city).map((order) => productSold += order.quantity)
                orders.filter((data) => data.city === city).map((order) => totalAmount += order.amount)
                const Client = orders.filter((data) => data.city === city).map((order) => order.customer_id)
                const UniqueClient = new Set(Client.map((id) => id.toString())).size
                arr.push({
                    City: city,
                    Clients: UniqueClient,
                    ProductSold: productSold,
                    Sale: totalAmount
                })
                return arr
            }, [])
            return CityObject
        })
        .catch(err => { throw err })
}

module.exports = { saleCard, saleTable }
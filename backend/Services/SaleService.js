const Orders = require('../Models/OrderModel')

const saleCard = () => {
    let sale = 0
    let items = 0
    return Promise.all([
        Orders.find({ status: 'Order Delivered' }),
        Orders.find().countDocuments()
    ])
        .then(([Orders, totalOrders]) => {
            console.log(totalOrders)
            Orders.map((order) => {
                sale += order.amount
                items += order.quantity
            })
            return {
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
                console.log(Client)
                const UniqueClient = new Set(Client.map((id) => id.toString())).size
                console.log(UniqueClient)
                arr.push({
                    City: city,
                    Clients: UniqueClient,
                    ProductSold: productSold,
                    Sale: totalAmount
                })
                console.log(orders)
                return arr
            }, [])
            return CityObject
        })
        .catch(err => { throw err })
}

module.exports = { saleCard, saleTable }
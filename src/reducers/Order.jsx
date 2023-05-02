// import OrderPickedData from "../data/Orders"

const initialState = [
    {
        order_id: 1683019565023,
        customer_Name: "Muneeb Ahmed",
        customer_id: 1683019535048,
        date: "2023-05-02",
        product: "Pepsi",
        quantity: "4",
        address: "Flat F5, prime appartments, gulberg no 1",
        city: "Peshawar",
        status: "Order Placed",
        amount: 400,
    },
    {
        order_id: 1683019565023,
        customer_Name: "Muneeb Ahmed",
        customer_id: 1683019535048,
        date: "2023-05-02",
        product: "fanta",
        quantity: "9",
        address: "Flat F5, prime appartments, gulberg no 1",
        city: "Peshawar",
        status: "Order Placed",
        amount: 400,
    },
    {
        order_id: 1683019565023,
        customer_Name: "Muneeb Ahmed",
        customer_id: 1683019535048,
        date: "2023-05-02",
        product: "7up",
        quantity: "5",
        address: "Flat F5, prime appartments, gulberg no 1",
        city: "Peshawar",
        status: "Order Placed",
        amount: 400,
    }
]
const Orders = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDORDER':
            return [...state, action.payload]
        case 'DELETORDER':
            return state.filter((data) => data.order_id !== action.payload)
        case 'UPDATEORDER':
            return state.map((data) => data.id === action.payload.id ? action.payload : data)
        default:
            return state
    }
}
export default Orders
const initialState = []
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
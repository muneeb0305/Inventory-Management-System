import OrderPickedData from "../data/Orders"

const initialState = OrderPickedData
const Orders = (state = initialState, action) => {
    switch(action.type){
        case 'ADDORDER':
            return state
        case 'DELETORDER':
            return state.filter((data)=> data.ID !== action.payload)
        case 'UPDATEORDER':
            return state.map((data)=> data.id === action.payload.id?action.payload:data)
        default:
            return state
    }
}
export default Orders
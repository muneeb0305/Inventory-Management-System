const initialState= []
const Inventory = (state = initialState, action)=>{
    switch(action.type){
        case 'ADDITEM':
            return [...state, action.payload]
        case 'DELETEITEM':
            return state.filter((data)=> data.id !== action.payload)
        case 'UPDATEITEM':
            return state.map((data)=> data.id === action.payload.id?action.payload:data)
        default:
            return state
    }
}
export default Inventory
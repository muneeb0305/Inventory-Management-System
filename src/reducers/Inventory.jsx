import InventoryData from "../data/InventoryData"

const initialState= InventoryData
const Inventory = (state = initialState, action)=>{
    switch(action.type){
        case 'ADDITEM':
            return [...state, action.payload]
        case 'DELETEITEM':
            return state.filter((data)=> data.id !== action.payload)
        case 'UPDATEITEM':
            return state.map((data)=> data.id === action.payload.id?action.payload:data)
        case 'QUANTITY_COUNT_DECREASE':
            return  state.map((item)=>{
                if(item.Item_name === action.payload.Item_name){
                    return {...item, stock: item.stock - action.payload.itemCount}
                }
                return item
            } )
        case 'QUANTITY_COUNT_INCREASE':
            return  state.map((item)=>{
                if(item.Item_name === action.payload.Item_name){
                    return {...item, stock: item.stock + action.payload.itemCount}
                }
                return item
            } )
        default:
            return state
    }
}
export default Inventory
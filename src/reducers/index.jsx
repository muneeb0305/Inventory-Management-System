import { combineReducers } from "redux";
import Inventory from "./Inventory";
import Orders from "./Order";

const rootReducer = combineReducers({
    Inventory: Inventory,
    Orders: Orders
})
export default rootReducer
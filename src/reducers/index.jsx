import { combineReducers } from "redux";
import Inventory from "./Inventory";
import User from "./User";
import Orders from "./Order";

const rootReducer = combineReducers({
    User : User,
    Inventory: Inventory,
    Orders: Orders
})
export default rootReducer
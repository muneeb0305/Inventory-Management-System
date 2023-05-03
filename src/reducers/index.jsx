import { combineReducers } from "redux";
import Inventory from "./Inventory";
import User from "./User";
import Orders from "./Order";
import Auth from "./Auth";

const rootReducer = combineReducers({
    User : User,
    Auth : Auth,
    Inventory: Inventory,
    Orders: Orders,
})
export default rootReducer
import { combineReducers } from "redux";
import Inventory from "./Inventory";
import User from "./User";
import Auth from "./Auth";

const rootReducer = combineReducers({
    User : User,
    Auth : Auth,
    Inventory: Inventory,
})
export default rootReducer
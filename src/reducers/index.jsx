import { combineReducers } from "redux";
import Inventory from "./Inventory";

const rootReducer = combineReducers({
    Inventory: Inventory
})
export default rootReducer
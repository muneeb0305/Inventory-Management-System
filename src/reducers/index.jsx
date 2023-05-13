import { combineReducers } from "redux";
import User from "./User";
import Auth from "./Auth";

const rootReducer = combineReducers({
    User : User,
    Auth : Auth,
})
export default rootReducer
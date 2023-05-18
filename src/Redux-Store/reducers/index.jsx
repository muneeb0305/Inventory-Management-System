import { combineReducers } from "redux";
import Auth from "./Auth";
import appState from "./appState";

const rootReducer = combineReducers({
    Auth: Auth,
    appState: appState
})
export default rootReducer
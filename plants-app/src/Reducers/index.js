import { combineReducers } from "redux";
import plantsReducer from "./plantReducer";

const rootReducer = combineReducers({
    plantsR: plantsReducer
})

export default rootReducer;
import { combineReducers } from "@reduxjs/toolkit";
import propsSlice from "./propsSlice";


const rootReducer = combineReducers({
    propsSlice: propsSlice,
});

export default rootReducer;


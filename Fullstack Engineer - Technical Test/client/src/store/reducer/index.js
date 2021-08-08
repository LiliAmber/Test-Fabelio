import { combineReducers } from "redux";

import productReducer from "./reducer";

const reducer = combineReducers({ productReducer });

export default reducer;

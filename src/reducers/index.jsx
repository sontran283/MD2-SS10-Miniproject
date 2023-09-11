import { combineReducers } from "redux";
import { lishProduct } from "./lishProduct";
import { listCart } from "./listCart";


export const reducer = combineReducers({ lishProduct, listCart })

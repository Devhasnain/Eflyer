import { combineReducers } from "@reduxjs/toolkit";
import ProductState from "./reducers/productSlice";
import todosReducer from "./reducers/todoSlice";

const rootReducer = combineReducers({
  ProductState: ProductState,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppSelector<T> = (state: RootState) => T;
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;

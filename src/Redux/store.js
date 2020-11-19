import { createStore } from "redux";
import combineReducers from "./root-reducer";

const store = createStore(combineReducers);
store.subscribe(() => console.log(store.getState()));

export default store;

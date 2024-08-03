import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension"; //! для devtools

//! #1
const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});

//? #2
// const rootReducer = combineReducers({
//     cashReducer,
//     customerReducer,
// })

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./Reducer";

const rootReducer =combineReducers({userReducer});

export const Store =createStore(rootReducer,applyMiddleware(thunk));
// Store.subscribe(()=>{
//     console.log("stored data==>",Store.getState().userReducer.user)
// })
  
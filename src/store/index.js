import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "../redux/reducers/userReducer";
import thunk from "redux-thunk";

const store = createStore(userReducer, compose(applyMiddleware(thunk)));

export default store;

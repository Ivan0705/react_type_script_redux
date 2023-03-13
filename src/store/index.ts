import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {rootReducers} from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(rootReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducers>;

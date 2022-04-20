import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/AuthReducer";
import { dataReducer } from "./Reducers/DataReducer";

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const middleware = [thunk];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

export const rootReducer = combineReducers({
    data: dataReducer,
    auth: authReducer
})
export const store = createStore(rootReducer, enhancer);


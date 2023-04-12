import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import Reducer from "./redux/reducers/reducers";
import Reducers1 from "./redux/reducers/reducers1";
import Reducers2 from "./redux/reducers/reducers2";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const reducers=combineReducers({
    helloWorld:Reducer,
    personalDetails: Reducers1,
    arrayOfObjects: Reducers2
})
const store = createStore(reducers,composeEnhancers(applyMiddleware()));
// const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;
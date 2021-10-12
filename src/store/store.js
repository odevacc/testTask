import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import passengerReducer from './reducers/passengerReducer'

let reducers = combineReducers({

    passenger: passengerReducer
})

const store = createStore(reducers, applyMiddleware(thunk))


export default store;
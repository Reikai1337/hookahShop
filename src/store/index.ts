import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { someReducer } from './reducers/someReducer'


export const store = createStore(combineReducers({ someReducer }), applyMiddleware(thunk))

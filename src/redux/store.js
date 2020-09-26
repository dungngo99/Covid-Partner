import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import combinedReducer from './reducers/index'

const initialState = {}

const store = createStore(
  combinedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;
import { combineReducers } from 'redux'
import UserReducer from './user'

const RootReducers = combineReducers({
  user: UserReducer
})

export default RootReducers

import { count } from 'store/reducers/count'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  count: count
})
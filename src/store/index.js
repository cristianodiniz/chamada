import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'
import middleware from '../middleware'

const initialState = {}

export default () => {
  return createStore(
    reducer,
    initialState,
    middleware // to add other middleware
  )
}
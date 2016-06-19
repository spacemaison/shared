import { applyMiddleware, combineReducers } from 'redux'
import { createStore as _createStore } from 'redux'
import reduxGen from 'redux-gen'
import interceptFetch from './middleware/fetch'
import timeoutMiddleware from './middleware/timeout'
import debugInterceptFetch from './middleware/fetch-debug'
import * as sharedReducers from './reducers/index'

export function createStore (
      addedReducers = {},
      addedMiddleware = [],
      options = {}) {
  let fetchMiddleware = interceptFetch

  if (options.debug === true) {
    fetchMiddleware = debugInterceptFetch
  }

  return _createStore(
      combineReducers(Object.assign({}, addedReducers, sharedReducers)),
      applyMiddleware(
          reduxGen(),
          fetchMiddleware,
          timeoutMiddleware,
          ...addedMiddleware))
}

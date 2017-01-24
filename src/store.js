import { applyMiddleware, combineReducers } from 'redux'
import * as storage from 'redux-storage'
import { createStore as _createStore } from 'redux'
import generatorMiddleware from 'redux-gen'
import interceptFetch from './middleware/fetch'
import timeoutMiddleware from './middleware/timeout'
import debugInterceptFetch from './middleware/fetch-debug'
import * as sharedReducers from './reducers/index'

export function createStore (
      addedReducers = {},
      addedMiddleware = [],
      options = {}) {
  const { globalErrorHandler, globalSuccessHandler } = options
  const fetchMiddleware = options.debug === true
      ? debugInterceptFetch
      : interceptFetch

  const reducers = Object.assign({}, addedReducers, sharedReducers)
  return _createStore(
      storage.reducer(combineReducers(reducers)),
      applyMiddleware(
          generatorMiddleware(globalErrorHandler, globalSuccessHandler),
          fetchMiddleware,
          timeoutMiddleware,
          ...addedMiddleware))
}

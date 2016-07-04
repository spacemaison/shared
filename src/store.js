import { applyMiddleware, combineReducers } from 'redux'
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

  return _createStore(
      combineReducers(Object.assign({}, addedReducers, sharedReducers)),
      applyMiddleware(
          generatorMiddleware(globalErrorHandler, globalSuccessHandler),
          fetchMiddleware,
          timeoutMiddleware,
          ...addedMiddleware))
}

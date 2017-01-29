import {
    applyMiddleware,
    combineReducers,
    createStore as _createStore } from 'redux'
import * as storage from 'redux-storage'
import generatorMiddleware from 'redux-gen'
import filterStorageEngine from 'redux-storage-decorator-filter'
import interceptFetch from './middleware/fetch'
import timeoutMiddleware from './middleware/timeout'
import debugInterceptFetch from './middleware/fetch-debug'
import * as sharedReducers from './reducers/index'
import * as actions from './actions/actions'

export function createStore (
      addedReducers = {},
      addedMiddleware = [],
      options = {}) {
  const { globalErrorHandler, globalSuccessHandler } = options
  const storageEngine = filterStorageEngine(options.storageEngine, [
    'reminders'
  ])
  const storageMiddleware = storage.createMiddleware(storageEngine, [], [
    actions.REMINDER_ADD,
    actions.REMINDER_REMOVE,
    actions.REMINDER_TOGGLE
  ])
  const storageLoader = storage.createLoader(storageEngine)
  const fetchMiddleware = options.debug === true
      ? debugInterceptFetch
      : interceptFetch

  const reducers = Object.assign({}, addedReducers, sharedReducers)
  const store = _createStore(
      storage.reducer(combineReducers(reducers)),
      applyMiddleware(
          generatorMiddleware(globalErrorHandler, globalSuccessHandler),
          fetchMiddleware,
          timeoutMiddleware,
          storageMiddleware,
          ...addedMiddleware))

  storageLoader(store)

  return store
}

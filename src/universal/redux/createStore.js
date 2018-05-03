import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import * as Reducers from './reducers/index.js'
import rootSaga from '../sagas'

export default (history) => {
  const routeMiddleware = routerMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()

  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, routeMiddleware))

  const store = createStore(
    combineReducers({ ...Reducers, router: routerReducer }),
    enhancer
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
     module.hot.accept('./reducers', () => {
       const nextReducers = require('./reducers/index.js')
       const rootReducer = combineReducers({
         ...nextReducers,
         router: routerReducer
       })

       store.replaceReducer(rootReducer)
     })
   }


  return store
}

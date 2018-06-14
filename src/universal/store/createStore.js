import { createStore, combineReducers, applyMiddleware } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import * as Reducers from 'universal/common/reducers/index.js'
import rootSaga from 'universal/common/sagas'

export default (history) => {
  const routeMiddleware = routerMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()

  const enhancer = composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    routeMiddleware
  ))

  const store = createStore(
    enableBatching(combineReducers({
      ...Reducers,
      router: routerReducer,
      form: formReducer
    })),
    enhancer
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
     module.hot.accept('universal/common/reducers', () => {
       const nextReducers = require('universal/common/reducers/index.js')
       const rootReducer = combineReducers({
         ...nextReducers,
         router: routerReducer,
         form: formReducer
       })

       store.replaceReducer(enableBatching(rootReducer))
     })
   }


  return store
}

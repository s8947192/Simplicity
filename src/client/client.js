import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import 'react-select/dist/react-select.css'

import App from './containers/AppContainer.js'

import createStore from '../universal/store/createStore.js'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = createStore(history)

const rootEl = document.getElementById('root')
const renderApp = (Component) => {
    render(
      <AppContainer>
        <Provider store={store}>
          <Component history={history} />
        </Provider>
      </AppContainer>,
      rootEl
    )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./containers/AppContainer.js', () => {
    const nextApp = require('./containers/AppContainer.js')
    renderApp(nextApp)
  })
}

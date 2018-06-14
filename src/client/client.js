import React from 'react'
import {render} from 'react-dom'
import {StripeProvider} from 'react-stripe-elements'
import {AppContainer} from 'react-hot-loader'

// Components
import App from './containers/AppContainer.js'

// Redux
import { Provider } from 'react-redux'
import createStore from '../universal/store/createStore.js'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = createStore(history)

const rootEl = document.getElementById('root')
const renderApp = (Component) => {
    render(
      <StripeProvider apiKey='pk_test_U5zfDnUYzX2WoMAMA8BEqNM9'>
        <AppContainer>
          <Provider store={store}>
            <Component history={history} />
          </Provider>
        </AppContainer>
      </StripeProvider>,
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

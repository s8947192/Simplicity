import React, { Component } from  'react'
import { Route, Switch, Redirect } from 'react-router'

import * as RouteMap from '../routes/static.js'

import App from 'universal/layouts/App'

export default class Routes extends Component {
  render () {
    const { location } = this.props
    return (
      <App>
        <Switch>
          <Route path='/user/:userId' component={RouteMap.Profile} />
          <Route exact path='/404' component={RouteMap.NotFound} />
          <Route path='/' component={RouteMap.Site} />
        </Switch>
      </App>
    )
  }
}

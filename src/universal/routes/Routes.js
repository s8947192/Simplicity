import React, { Component } from  'react'
import { Route, Switch, Redirect } from 'react-router'

import * as RouteMap from '../routes/static.js'

import AppLayout from 'universal/layouts/AppLayout'

export default class Routes extends Component {
  render () {
    const { location } = this.props
    return (
      <AppLayout>
        <Switch>
          <Route path='/user/:userId' component={RouteMap.ProfileLayout} />
          <Route exact path='/404' component={RouteMap.NotFoundLayout} />
          <Route path='/' component={RouteMap.Site} />
        </Switch>
      </AppLayout>
    )
  }
}

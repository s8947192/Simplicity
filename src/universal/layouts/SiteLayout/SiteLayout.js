import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'

import * as RouteMap from 'universal/routes/static.js'
import styles from './siteLayout.scss'

export default class SiteLayout extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        SITE
        <Switch>
          <Redirect exact from='/' to={`${match.url}home`} />
          <Route exact path={`${match.url}home`} component={RouteMap.SiteHomeLayout} />
          <Route exact path={`${match.url}features`} component={RouteMap.SiteFeaturesLayout} />
          <Route exact path={`${match.url}pricing`} component={RouteMap.SitePricingLayout} />
          <Route exact path={`${match.url}contacts`} component={RouteMap.SiteContactsLayout} />
          <Route exact path={`${match.url}login`} component={RouteMap.SiteLoginLayout} />
          <Route exact path={`${match.url}registration`} component={RouteMap.SiteRegistrationLayout} />
          <Redirect from='*' to='/home' />
        </Switch>
      </div>
    )
  }
}

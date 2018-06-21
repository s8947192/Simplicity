import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import HeaderSite from 'universal/common/components/HeaderSite'
import * as RouteMap from 'universal/routes/static.js'

import styles from './siteLayout.scss'

const SiteLayout = ({ match }) => (
  <div className={styles.wrapper}>
    <HeaderSite />
    <Switch>
      <Redirect exact from='/' to={`${match.url}home`} />
      <Route exact path={`${match.url}home`} component={RouteMap.SiteHomeLayout} />
      <Route exact path={`${match.url}features`} component={RouteMap.SiteFeaturesLayout} />
      <Route exact path={`${match.url}pricing`} component={RouteMap.SitePricingLayout} />
      <Route exact path={`${match.url}contacts`} component={RouteMap.SiteContactsLayout} />
      <Route exact path={`${match.url}login`} component={RouteMap.Login} />
      <Route exact path={`${match.url}registration`} component={RouteMap.Register} />
      <Redirect from='*' to='/home' />
    </Switch>
  </div>
)

export default SiteLayout

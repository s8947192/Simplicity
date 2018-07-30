import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import cn from 'classnames'

import HeaderSite from 'universal/common/components/HeaderSite'
import FooterSite from 'universal/common/components/FooterSite'
import * as RouteMap from 'universal/routes/static.js'

import styles from './site.scss'

const Site = ({ match, location: { pathname } }) => {
  const isAuthPage = ['login', 'registration'].some(page => `/${page}` === pathname)
  return (
    <div className={cn(styles.component, { [styles.bg_img]: isAuthPage })}>
      <HeaderSite />
      <Switch>
        <Redirect exact from='/' to={`${match.url}home`} />
        <Route exact path={`${match.url}home`} component={RouteMap.SiteHomeLayout} />
        <Route exact path={`${match.url}features`} component={RouteMap.SiteFeaturesLayout} />
        <Route exact path={`${match.url}pricing`} component={RouteMap.SitePricingLayout} />
        <Route exact path={`${match.url}contacts`} component={RouteMap.SiteContactsLayout} />
        <Route exact path={`${match.url}login`} component={RouteMap.Login} />
        <Route exact path={`${match.url}registration`} component={RouteMap.Registration} />
        <Route exact path='/terms' component={RouteMap.Terms} />
        <Redirect from='*' to='/home' />
      </Switch>
      <FooterSite />
    </div>
  )
}

export default Site

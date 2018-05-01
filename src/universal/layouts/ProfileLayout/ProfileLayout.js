import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import * as RouteMap from 'universal/routes/static.js'
import styles from './profileLayout.scss'

const ProfileLayout = ({ match }) => (
  <div className={styles.test}>
    PROFILE
    <Switch>
      <Route exact path={`${match.url}/home`} component={RouteMap.ProfileHomeLayout} />
      <Route exact path={`${match.url}/students`} component={RouteMap.ProfileStudentsLayout} />
      <Route exact path={`${match.url}/calendar`} component={RouteMap.ProfileCalendarLayout} />
      <Route exact path={`${match.url}/invoices`} component={RouteMap.ProfileInvoicesLayout} />
      <Route exact path={`${match.url}/statistics`} component={RouteMap.ProfileStatisticsLayout} />
      <Route exact path={`${match.url}/notifications`} component={RouteMap.ProfileNotificationsLayout} />
      <Redirect from='*' to={`${match.url}/home`} />
    </Switch>
  </div>
)

export default ProfileLayout

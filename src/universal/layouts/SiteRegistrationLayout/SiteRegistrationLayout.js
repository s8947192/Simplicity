import React from 'react'
import { NavLink } from 'react-router-dom'

import RegStepsTimelineContainer from 'universal/modules/regStepsTimeline/containers/RegStepsTimelineContainer'
import RegSteps from 'universal/modules/regSteps/components/RegSteps'

import styles from './siteRegistrationLayout.scss'

const SiteRegistrationLayout = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <NavLink to='/login' className={styles.navEl} activeClassName={styles.navEl_active}>sign in</NavLink>
        <NavLink to='/registration' className={styles.navEl} activeClassName={styles.navEl_active}>sign up</NavLink>
      </div>
      <div className={styles.horDevider} />
      <div className={styles.pageContentWrapper}>
        <RegStepsTimelineContainer />
        <div className={styles.verDevider} />
        <RegSteps />
      </div>
    </div>
  </div>
)

export default SiteRegistrationLayout

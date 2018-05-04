import React from 'react'
import { NavLink } from 'react-router-dom'

import RegStepsTimeline from 'universal/modules/regStepsTimeline/components/RegStepsTimeline'
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
        <RegStepsTimeline />
        <div className={styles.verDevider} />
        <RegSteps />
      </div>
    </div>
  </div>
)

export default SiteRegistrationLayout

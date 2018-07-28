import React from 'react'

import Auth from 'universal/layouts/Auth'

import Description from './Description'
import Navigation from './Navigation'

import Account from '../containers/Account'
import Subscription from '../containers/Subscription'
import MainSettings from '../containers/MainSettings'

import styles from './registration.scss'

const currentStep = [
  { title: 'Account', desc: 'Add your account info, so you can use this data to log in later', component: <Account /> },
  { title: 'Subscription', desc: 'Choose your subscription to be able to use certain functionality', component: <Subscription /> },
  { title: 'Main Settings', desc: 'Choose your main settings, so we can configure your account properly', component: <MainSettings /> },
  // { title: 'Main Settings', component: MainSettingsStep() },
  // { title: 'Verification', component: VerificationStep() },
  // { title: 'Complete', component: CompleteStep() },
]


const Registration = () => (
  <Auth>
    <div className={styles.wrapper}>
      <div className={styles.leftBar}>
        <Description />
        <Navigation />
      </div>
      <div className={styles.devider} />
      <div className={styles.rightBar}>
        <div className={styles.title}>{ currentStep[2].title }</div>
        <div className={styles.description}>{ currentStep[2].desc }</div>
        { currentStep[2].component }
      </div>
    </div>
  </Auth>
)

export default Registration

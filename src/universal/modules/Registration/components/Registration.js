import React from 'react'

import AuthLayout from 'universal/layouts/AuthLayout'

import Description from './Description'
import Navigation from './Navigation'

import AccountStep from '../containers/AccountStep'

import styles from './registration.scss'

const currentStep = [
  { title: 'Account', desc: 'Add your account info, so you can use this data to log in later', component: <AccountStep /> },
  // { title: 'Subscription', component: SubscriptionStep() },
  // { title: 'Payment Method', component: PaymentMethodStep() },
  // { title: 'Main Settings', component: MainSettingsStep() },
  // { title: 'Verification', component: VerificationStep() },
  // { title: 'Complete', component: CompleteStep() },
]


const Registration = () => (
  <AuthLayout>
    <div className={styles.wrapper}>
      <div className={styles.leftBar}>
        <Description />
        <Navigation />
      </div>
      <div className={styles.devider} />
      <div className={styles.rightBar}>
        <div className={styles.title}>{ currentStep[0].title }</div>
        <div className={styles.description}>{ currentStep[0].desc }</div>
        { currentStep[0].component }
      </div>
    </div>
  </AuthLayout>
)

export default Registration

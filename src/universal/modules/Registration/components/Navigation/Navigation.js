import React from 'react'

import NavEl from './NavEl'

import accountImg from 'universal/assets/icons/registration/account.svg'
import subscriptionImg from 'universal/assets/icons/registration/subscription.svg'
import mainSettingsImg from 'universal/assets/icons/registration/mainSettings.svg'
import paymentMethodImg from 'universal/assets/icons/registration/paymentMethod.svg'
import verificationImg from 'universal/assets/icons/registration/verification.svg'
import doneImg from 'universal/assets/icons/registration/done.svg'

import styles from './navigation.scss'

const Navigation = () => (
  <div className={styles.component}>
    <NavEl img={accountImg} text='Account' isDone />
    <NavEl img={subscriptionImg} text='Subscription' isActive />
    <NavEl img={mainSettingsImg} text='Main Settings' />
    <NavEl img={paymentMethodImg} text='Payment Method' isDone />
    <NavEl img={verificationImg} text='Verification' />
    <NavEl img={doneImg} text='Done' />
  </div>
)

export default Navigation

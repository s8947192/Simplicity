import React from 'react'
import { List, Map } from 'immutable'
import { Field, reduxForm, OrderedSet } from 'redux-form/immutable'

import Auth from 'universal/layouts/Auth'

import Description from './Description'
import Navigation from '../containers/Navigation'

import Account from '../containers/Account'
import Subscription from '../containers/Subscription'
import MainSettings from '../containers/MainSettings'
import PaymentMethod from '../containers/PaymentMethod'
import Verification from '../containers/Verification'
import Done from '../containers/Done'

import styles from './registration.scss'

const steps = List([
  Map({ title: 'Account', desc: 'Add your account info, so you can use this data to log in later', component: <Account /> }),
  Map({ title: 'Subscription', desc: 'Choose your subscription to be able to use certain functionality', component: <Subscription /> }),
  Map({ title: 'Payment Method', desc: 'Add your payment method, so we can charge you later', component: <PaymentMethod /> }),
  Map({ title: 'Verification', desc: 'After you successfully complete this step, you account will be created', component: <Verification /> }),
  Map({ title: 'Done', desc: 'You have successfully been registered', component: <Done /> })
])

const Registration = ({ activeStep }) => {
  const currentStep = steps.get(activeStep)
  return (
    <Auth>
      <div className={styles.wrapper}>
        <div className={styles.leftBar}>
          <Description />
          <Navigation />
        </div>
        <div className={styles.devider} />
        <div className={styles.rightBar}>
          <div className={styles.title}>{ currentStep.get('title') }</div>
          <div className={styles.description}>{ currentStep.get('desc') }</div>
          { currentStep.get('component') }
        </div>
      </div>
    </Auth>
  )
}

export default Registration

import React from 'react'
import cn from 'classnames'

import AccountStep from '../../containers/AccountStep'
import Account from '../Steps/Account'
import UserInfoStep from '../../containers/UserInfoStep'
import SubscriptionStep from '../../containers/SubscriptionStep'
import PaymentMethodStep from '../../containers/PaymentMethodStep'
import BaseSettingsStep from '../../containers/BaseSettingsStep'
import VerificationStep from '../../containers/VerificationStep'
import CompleteStep from '../../containers/CompleteStep'

import styles from './activeStep.scss'

const stepTitles = [
  'Account',
  'Subscription',
  'Payment Method',
  'Basic Settings',
  'Verification',
  'Complete'
]

const ActiveStep = ({ activeStep }) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>{ stepTitles[activeStep] }</div>
    { activeStep === 0 && <Account /> }
    { activeStep === 1 && <SubscriptionStep /> }
    { activeStep === 2 && <PaymentMethodStep /> }
    { activeStep === 3 && <BaseSettingsStep /> }
    { activeStep === 4 && <VerificationStep /> }
    { activeStep === 5 && <CompleteStep /> }
  </div>
)

export default ActiveStep
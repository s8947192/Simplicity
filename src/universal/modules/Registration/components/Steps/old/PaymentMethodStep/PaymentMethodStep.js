import React, { Component } from 'react'

import StripePaymentFormContainer from 'universal/common/containers/StripePaymentFormContainer'
import StepControls from '../../StepControls'

import styles from './paymentMethodStep.scss'

export default class PaymentMethodStep extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <StripePaymentFormContainer />
        {
          /*
          <button
            form='stripe-payment-form'>
            Save
          </button>
          */
        }
        <StepControls
          isPending={false}
          onCompleteClick={() => console.log('COMPLETE')}
          onSkipClick={() => console.log('SKIP')}
          isEnabled={true}
        />
      </div>
    )
  }
}

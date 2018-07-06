import React, { Component } from 'react'

import StripePaymentFormContainer from 'universal/common/containers/StripePaymentFormContainer'
import StepControls from '../../StepControls'

export default class Step3 extends Component {
  render() {
    return (
      <div>
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

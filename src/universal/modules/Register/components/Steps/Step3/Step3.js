import React, { Component } from 'react'

import StripePaymentFormContainer from 'universal/common/containers/StripePaymentFormContainer'

export default class Step3 extends Component {
  render() {
    return (
      <div>
        <StripePaymentFormContainer />
        <button
          form='stripe-payment-form'>
          Save
        </button>
      </div>
    )
  }
}

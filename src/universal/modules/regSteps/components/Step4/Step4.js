import React, { Component } from 'react'
import {Elements} from 'react-stripe-elements'
import StripePaymentFormContainer from 'universal/common/containers/StripePaymentFormContainer'

export default class Step4 extends Component {

  handleAddSubmit = ({ token }, values) => {
    console.log(token)
    console.log(values)
  }

  render() {
    return (
      <div>
        <StripePaymentFormContainer onSubmit={this.handleAddSubmit} />
        <button form='stripe-payment-form'>Save</button>
      </div>
    )
  }
}

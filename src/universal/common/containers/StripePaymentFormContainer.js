import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'

import StripePaymentForm from '../components/StripePaymentForm'

export class StripePaymentFormContainer extends Component {
  handleSubmit = (values, stripe) => {
    const cardData = {
      name: values.nameOnCard
    }
    return stripe.createToken(values).then(token => console.log(token))
  }

  render () {
    return (
      <Elements>
        <StripePaymentForm {...this.props} onSubmit={this.handleSubmit} />
      </Elements>
    )
  }
}

export default connect(null, null)(StripePaymentFormContainer)

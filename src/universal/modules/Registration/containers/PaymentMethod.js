import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'

import PaymentMethod from '../components/Steps/PaymentMethod'

export class PaymentMethodContainer extends Component {
  render () {
    return (
      <Elements>
        <PaymentMethod />
      </Elements>
    )
  }
}

export default connect(null, null)(PaymentMethodContainer)

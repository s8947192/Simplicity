import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'
import { formValueSelector } from 'redux-form'

import StripePayment from '../components/StripePayment'

const formValues = formValueSelector('paymentMethod')

export class StripePaymentContainer extends Component {
  handleSubmit = (values, stripe) => {
    return stripe.createToken().then(token => console.log(token))
  }

  render () {
    const {
      brand
    } = this.props
    return (
      <Elements>
        <StripePayment
          {...this.props}
          onSubmit={this.handleSubmit}
        />
      </Elements>
    )
  }
}

const mapStateToProps = state => ({
  brand: formValues(state, 'cardNumber.brand')
})

export default connect(mapStateToProps, null)(StripePaymentContainer)

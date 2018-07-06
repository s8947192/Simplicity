import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'
import { formValueSelector } from 'redux-form'

import StripePaymentForm from '../components/StripePaymentForm'

const formValues = formValueSelector('paymentMethod')

export class StripePaymentFormContainer extends Component {
  handleSubmit = (values, stripe) => {
    return stripe.createToken().then(token => console.log(token))
  }

  render () {
    const {
      brand
    } = this.props
    return (
      <Elements>
        <StripePaymentForm
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

export default connect(mapStateToProps, null)(StripePaymentFormContainer)

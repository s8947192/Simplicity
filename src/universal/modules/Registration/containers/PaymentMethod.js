import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'

import { actions } from '../actions'
import { getIsStripeTokenPending } from '../selectors'

import PaymentMethod from '../components/Steps/PaymentMethod'

export class PaymentMethodContainer extends Component {
  render () {
    return (
      <Elements>
        <PaymentMethod {...this.props} />
      </Elements>
    )
  }
}

const mapStateToProps = state => ({
  isStripeTokenPending: getIsStripeTokenPending(state),
})

const mapDispatchToProps = dispatch => ({
  savePaymentData: data => dispatch(actions.savePaymentData.start(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodContainer)

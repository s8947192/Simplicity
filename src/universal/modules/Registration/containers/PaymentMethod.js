import React, { Component } from 'react'
import { formValueSelector } from 'redux-form/immutable'
import { connect } from 'react-redux'


import StripeAsyncProvider from 'universal/common/components/HOC/StripeAsyncProvider'

import { actions } from '../actions'
import { getIsStripeTokenPending } from '../selectors'

import PaymentMethod from '../components/Steps/PaymentMethod'


class PaymentMethodContainer extends Component {
  render () {
    return (
      <StripeAsyncProvider>
        <PaymentMethod {...this.props} />
      </StripeAsyncProvider>
    )
  }
}

const mapStateToProps = state => {
  const selector = formValueSelector('paymentMethod')
  const cardInfo = selector(state, 'cardNumber')
  return ({
    isStripeTokenPending: getIsStripeTokenPending(state),
    isCVCValid: selector(state, 'cvc'),
    isExpirityValid: selector(state, 'expirity'),
    isCardValid: cardInfo && cardInfo.complete,
  })
}

const mapDispatchToProps = dispatch => ({
  savePaymentData: data => dispatch(actions.savePaymentData.start(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodContainer)

import React, { Component } from 'react'
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

const mapStateToProps = state => ({
  isStripeTokenPending: getIsStripeTokenPending(state),
})

const mapDispatchToProps = dispatch => ({
  savePaymentData: data => dispatch(actions.savePaymentData.start(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodContainer)

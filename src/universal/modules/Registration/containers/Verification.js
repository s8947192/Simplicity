import { connect } from 'react-redux'

import Verification from '../components/Steps/Verification'

import { actions } from '../actions'

import {
  getFirstName,
  getLastName,
  getNickName,
  getEmail,
  getPassword,
  getActiveSubscription,
  getSubscriptionDuration,
  getLanguage,
  getCurrency,
  getPaymentMethod,
  getIsSavePaymentMethod,
  getCompletedSteps
} from '../selectors'

const mapStateToProps = state => ({
  firstName: getFirstName(state),
  lastName: getLastName(state),
  nickName: getNickName(state),
  email: getEmail(state),
  password: getPassword(state),
  subscription: getActiveSubscription(state),
  subscriptionDuration: getSubscriptionDuration(state),
  systemLanguage: getLanguage(state),
  systemCurrency: getCurrency(state),
  paymentMethod: getPaymentMethod(state),
  savePaymentMethod: getIsSavePaymentMethod(state),
  completedSteps: getCompletedSteps(state)
})

const mapDispatchToProps = dispatch => ({
  verificateAndRegistrate: () => dispatch(actions.verificateAndRegistrate.start())
})

export default connect(mapStateToProps, mapDispatchToProps)(Verification)

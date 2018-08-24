import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form/immutable'

import Verification from '../components/Steps/Verification'

import { actions } from '../actions'
import {
  getIsPending,
  getRegistrationError,
  isStepCompleted,
  getIsPaymentMethodAvailable,
  getPendingMessage
} from '../selectors'


const mapStateToProps = state => {
  const selector = formValueSelector('verification')
  return ({
    isPending: getIsPending(state),
    pendingMessage: getPendingMessage(state),
    registrationError: getRegistrationError(state),
    isAgreedWithTerms: selector(state, 'termsAndPolices'),
    isStep0Completed: isStepCompleted(state, 0),
    isStep1Completed: isStepCompleted(state, 1),
    isStep2Completed: isStepCompleted(state, 2),
    isPaymentMethodAvailable: getIsPaymentMethodAvailable(state),
  })
}

const mapDispatchToProps = dispatch => ({
  registrate: () => dispatch(actions.registrate.start())
})

export default connect(mapStateToProps, mapDispatchToProps)(Verification)

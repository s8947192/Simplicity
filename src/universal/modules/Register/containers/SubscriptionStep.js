import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import SubscriptionStep from '../components/Steps/SubscriptionStep'
import actions from '../actions'

import { actions as subscriptionActions } from 'universal/common/actions/subscriptions'
import {
  getInputFormattedSubscriptions,
  getInitialSelectedSubscriptionId,
  getSelectedSubscriptionPrice
} from 'universal/common/selectors/subscriptions'

import { getSelectedDuration } from '../selectors'

const formValues = formValueSelector('regStep2')

const mapStateToProps = state => ({
  selectedDuration: formValues(state, 'selectedDuration'),
  subscriptionPrice: getSelectedSubscriptionPrice(state),
  subscriptions: getInputFormattedSubscriptions(state),
  enableReinitialize: true,
  initialValues: {
    selectedDuration: getSelectedDuration(state),
    selectedSubscription: getInitialSelectedSubscriptionId(state)
  }
})

const mapDispatchToProps = dispatch => ({
  completeStepOne: data => dispatch(actions.completeStepOne(data)),
  setNextStep: nextStep => dispatch(actions.setNextStep(nextStep)),
  requestSubscriptions: () => dispatch(subscriptionActions.requestSubscriptions()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionStep)
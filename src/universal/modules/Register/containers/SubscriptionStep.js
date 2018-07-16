import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import SubscriptionStep from '../components/Steps/SubscriptionStep'

import { actions } from '../actions'
import { getSelectedSunscription, getSelectedDuration } from '../selectors'

import { actions as subscriptionActions } from 'universal/common/actions/subscriptions'
import { getInputFormattedSubscriptions, getSelectedSubscriptionPrice } from 'universal/common/selectors/subscriptions'

const formValues = formValueSelector('subscriptionStep')

const mapStateToProps = state => ({
  selectedDuration: formValues(state, 'selectedDuration'),
  subscriptionPrice: getSelectedSubscriptionPrice(state),
  subscriptions: getInputFormattedSubscriptions(state),
  enableReinitialize: true,
  initialValues: {
    selectedDuration: getSelectedDuration(state),
    selectedSubscription: getSelectedSunscription(state)
  }
})

const mapDispatchToProps = dispatch => ({
  completeStep: data => dispatch(actions.completeStep(data)),
  setNextStep: nextStep => dispatch(actions.setNextStep(nextStep)),
  requestSubscriptions: () => dispatch(subscriptionActions.requestSubscriptions()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionStep)

import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import SubscriptionStep from '../components/Steps/SubscriptionStep'

import { actions } from '../actions'
import { getSelectedSubscription, getSelectedDuration } from '../selectors'

import { actions as entitiesActions } from 'universal/common/actions/entities'
import { getInputFormattedSubscriptions, getSelectedSubscriptionPrice } from '../selectors'

const formValues = formValueSelector('subscriptionStep')

const mapStateToProps = state => ({
  selectedDuration: formValues(state, 'selectedDuration'),
  subscriptionPrice: getSelectedSubscriptionPrice(state),
  subscriptions: getInputFormattedSubscriptions(state),
  enableReinitialize: true,
  initialValues: {
    selectedDuration: getSelectedDuration(state),
    selectedSubscription: getSelectedSubscription(state)
  }
})

const mapDispatchToProps = dispatch => ({
  completeStep: data => dispatch(actions.completeStep(data)),
  setNextStep: nextStep => dispatch(actions.setNextStep(nextStep)),
  requestSubscriptions: () => dispatch(entitiesActions.requestSubscriptions.start()),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionStep)

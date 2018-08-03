import { connect } from 'react-redux'

import Subscription from '../components/Steps/Subscription'

import { actions as entitiesActions } from 'universal/common/actions/entities'
import { getSubscriptions } from 'universal/common/selectors/entities'

import { actions } from '../actions'
import {
  getActiveSubscriptionId,
  getActiveSubscription,
  getSubscriptionDuration,
  isStepCompleted
} from '../selectors'

const mapStateToProps = state => ({
  isStepCompleted: isStepCompleted(state, 1),
  subscriptions: getSubscriptions(state),
  activeSubscription: getActiveSubscription(state),
  subscriptionDuration: getSubscriptionDuration(state)
})

const mapDispatchToProps = dispatch => ({
  requestSubscriptions: () => dispatch(entitiesActions.requestSubscriptions.start()),
  saveSubscriptionData: data => dispatch(actions.saveSubscriptionData.start(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Subscription)

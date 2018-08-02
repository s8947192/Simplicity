import { connect } from 'react-redux'

import Subscription from '../components/Steps/Subscription'

import { actions as entitiesActions } from 'universal/common/actions/entities'
import { getSubscriptions } from 'universal/common/selectors/entities'

import { actions } from '../actions'
import { getActiveSubscriptionId } from '../selectors'

const mapStateToProps = state => ({
  subscriptions: getSubscriptions(state),
  activeSubscriptionId: getActiveSubscriptionId(state)
})

const mapDispatchToProps = dispatch => ({
  requestSubscriptions: () => dispatch(entitiesActions.requestSubscriptions.start()),
  setActiveSubscriptionId: subscriptionId => dispatch(actions.setActiveSubscriptionId(subscriptionId))
})


export default connect(mapStateToProps, mapDispatchToProps)(Subscription)

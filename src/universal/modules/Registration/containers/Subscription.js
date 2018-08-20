import { connect } from 'react-redux'

import Subscription from '../components/Steps/Subscription'

import { actions as entitiesActions } from 'universal/common/actions/entities'
import {
  getOrderedSubscriptions,
  getCurrentSubscriptionPlans
} from 'universal/common/selectors/entities'

import { actions } from '../actions'
import {
  getSelectedSubscriptionId,
  getSelectedSubscriptionPlanId,
  getIsSelectedSubscriptionFree
} from '../selectors'


const mapStateToProps = state => ({
  subscriptions: getOrderedSubscriptions(state),
  selectedSubscriptionId: getSelectedSubscriptionId(state),
  selectedSubscriptionPlanId: getSelectedSubscriptionPlanId(state),
  isSelectedSubscriptionFree: getIsSelectedSubscriptionFree(state),
  selectedSubscriptionPlans: getCurrentSubscriptionPlans(state, getSelectedSubscriptionId(state))
})

const mapDispatchToProps = dispatch => ({
  requestSubscriptions: () => dispatch(entitiesActions.requestSubscriptions.start()),
  saveSubscriptionData: data => dispatch(actions.saveSubscriptionData.start(data)),
  setActiveSubscriptionPlanId: id => dispatch(actions.setActiveSubscriptionPlanId(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Subscription)

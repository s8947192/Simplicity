import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import SubscriptionCards from '../components/SubscriptionCards'

import { requestSubscriptions } from 'universal/common/actions/subscriptions'
import { getSubscriptions, getDuration } from 'universal/common/selectors/subscriptions'

import { selectPlanWithDuration } from 'universal/common/actions/registration'

const mapStateToProps = state => ({
  subscriptions: getSubscriptions(state),
  duration: getDuration(state)
})

const mapDispatchToProps = dispatch => ({
  requestSubscriptions: () => dispatch(requestSubscriptions()),
  selectPlanWithDuration: (id, duration) => dispatch(selectPlanWithDuration(id, duration))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubscriptionCards))

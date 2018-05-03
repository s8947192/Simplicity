import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import PlanCards from '../components/PlanCards'
import { requestSubscriptionPlans } from 'universal/actions/subscriptionPlanActions'
import { getSubscriptionPlans, getPlanDuration } from 'universal/selectors/subscriptionPlans'

const mapStateToProps = state => ({
  subscriptionPlans: getSubscriptionPlans(state),
  planDuration: getPlanDuration(state)
})

const mapDispatchToProps = dispatch => ({
  requestSubscriptionPlans: () => dispatch(requestSubscriptionPlans())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlanCards))

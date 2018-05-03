import { connect } from 'react-redux'

import PlanDurationSwitcher from '../components/PlanDurationSwitcher'
import { setDuration } from 'universal/actions/subscriptionPlanActions'
import { getPlanDuration } from 'universal/selectors/subscriptionPlans'

const mapStateToProps = state => ({
  planDuration: getPlanDuration(state)
})

const mapDispatchToProps = dispatch => ({
  setDuration: duration => dispatch(setDuration(duration))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlanDurationSwitcher)

import { connect } from 'react-redux'

import RegStepsTimeline from '../components/RegStepsTimeline'
import { setActiveStep } from 'universal/common/actions/registration'
import { requestSubscriptions } from 'universal/common/actions/subscriptions'

import { getSubscriptions } from 'universal/common/selectors/subscriptions'
import {
  getActiveStep,
  getCompletedSteps,
  getSubscriptionId
} from 'universal/common/selectors/registration'


const mapStateToProps = state => ({
  activeStep: getActiveStep(state),
  completedSteps: getCompletedSteps(state),
  subscriptions: getSubscriptions(state),
  selectedSubscriptionId: getSubscriptionId(state)
})

const mapDispatchToProps = dispatch => ({
  setActiveStep: step => dispatch(setActiveStep(step)),
  requestSubscriptions: () => dispatch(requestSubscriptions())
})

export default connect(mapStateToProps, mapDispatchToProps)(RegStepsTimeline)

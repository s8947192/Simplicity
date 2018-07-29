import { connect } from 'react-redux'

import StepNav from '../components/StepsNav'

import { actions } from '../actions'
import { getActiveStep, getCompletedSteps, getIsSelectedSubscriptionFree } from '../selectors'

const mapStateToProps = state => ({
  activeStep: getActiveStep(state),
  completedSteps: getCompletedSteps(state),
  isSubscrFree: getIsSelectedSubscriptionFree(state)
})

const mapDispatchToProps = dispatch => ({
  switchToStep: nextStep => dispatch(actions.switchToStep(nextStep))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepNav)

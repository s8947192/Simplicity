import { connect } from 'react-redux'

import StepNav from '../components/StepsNav'
import { actions } from '../actions'

import { getIsSelectedSubscriptionFree } from 'universal/common/selectors/subscriptions'

import {
  getActiveStep,
  getCompletedSteps
} from '../selectors'

const mapStateToProps = state => ({
  activeStep: getActiveStep(state),
  completedSteps: getCompletedSteps(state),
  isSelectedSubscriptionFree: getIsSelectedSubscriptionFree(state)
})

const mapDispatchToProps = dispatch => ({
  setNextStep: nextStep => dispatch(actions.setNextStep(nextStep))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepNav)

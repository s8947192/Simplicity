import { connect } from 'react-redux'

import StepNav from '../components/StepsNav'
import { actions } from '../actions'

import {
  getActiveStep,
  getCompletedSteps
} from '../selectors'

const mapStateToProps = state => ({
  activeStep: getActiveStep(state),
  completedSteps: getCompletedSteps(state)
})

const mapDispatchToProps = dispatch => ({
  setNextStep: nextStep => dispatch(actions.setNextStep(nextStep))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepNav)

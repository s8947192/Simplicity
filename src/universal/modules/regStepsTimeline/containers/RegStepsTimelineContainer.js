import { connect } from 'react-redux'

import RegStepsTimeline from '../components/RegStepsTimeline'
import { actions as registrationActions } from 'universal/common/actions/registration'
import { getActiveStep, getCompletedSteps } from 'universal/common/selectors/registration'


const mapStateToProps = state => ({
  activeStep: getActiveStep(state),
  completedSteps: getCompletedSteps(state)
})

const mapDispatchToProps = dispatch => ({
  setNextStep: nextStep => dispatch(registrationActions.setNextStep(nextStep))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegStepsTimeline)

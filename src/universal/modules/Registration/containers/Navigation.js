import { connect } from 'react-redux'

import Navigation from '../components/Navigation'

import { actions } from '../actions'
import { getCompletedSteps, getActiveStep } from '../selectors'

const mapStateToProps = state => ({
  completedSteps: getCompletedSteps(state),
  activeStep: getActiveStep(state)
})

const mapDispatchToProps = dispatch => ({
  setActiveStep: (activeStep) => dispatch(actions.setActiveStep(activeStep)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

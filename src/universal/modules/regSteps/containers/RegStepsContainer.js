import { connect } from 'react-redux'

import RegSteps from '../components/RegSteps'
import { getActiveStep } from 'universal/common/selectors/registration'

const mapStateToProps = state => ({
  activeStep: getActiveStep(state)
})

export default connect(mapStateToProps, null)(RegSteps)

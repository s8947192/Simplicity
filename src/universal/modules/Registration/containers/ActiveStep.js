import { connect } from 'react-redux'

import ActiveStep from '../components/ActiveStep'
import { getActiveStep } from '../selectors'

const mapStateToProps = state => ({
  activeStep: getActiveStep(state)
})

export default connect(mapStateToProps, null)(ActiveStep)

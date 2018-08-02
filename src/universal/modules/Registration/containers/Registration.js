import { connect } from 'react-redux'

import Registration from '../components/Registration'

import { getActiveStep } from '../selectors'

const mapStateToProps = state => ({
  activeStep: getActiveStep(state),
})

export default connect(mapStateToProps, null)(Registration)

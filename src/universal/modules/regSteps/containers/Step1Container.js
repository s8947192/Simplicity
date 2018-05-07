import { connect } from 'react-redux'

import Step1 from '../components/Step1/Step1'
import { completeStepOne, clearAlreadyTakenEmail } from 'universal/common/actions/registration'
import { getIsStepPending, getTakenEmail } from 'universal/common/selectors/registration'

const mapStateToProps = state => ({
  isStepPending: getIsStepPending(state),
  takenEmail: getTakenEmail(state)
})

const mapDispatchToProps = dispatch => ({
  completeStepOne: (email, password) => dispatch(completeStepOne(email, password)),
  clearAlreadyTakenEmail: () => dispatch(clearAlreadyTakenEmail())
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)

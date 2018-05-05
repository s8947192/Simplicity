import { connect } from 'react-redux'

import Step1 from '../components/Step1/Step1'
import { completeStepOne } from 'universal/common/actions/registration'
import { getIsStepPending } from 'universal/common/selectors/registration'

const mapStateToProps = state => ({
  isStepPending: getIsStepPending(state)
})

const mapDispatchToProps = dispatch => ({
  completeStepOne: (email, password) => dispatch(completeStepOne(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)

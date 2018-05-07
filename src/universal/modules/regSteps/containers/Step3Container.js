import { connect } from 'react-redux'

import Step3 from '../components/Step3/Step3'

import { getSubscriptions } from 'universal/common/selectors/subscriptions'
import { completeStepThree } from 'universal/common/actions/registration'

const mapStateToProps = state => ({
  subscriptions: getSubscriptions(state)
})

const mapDispatchToProps = dispatch => ({
  completeStepThree: (duration, subscription) => dispatch(completeStepThree(duration, subscription))
})

export default connect(mapStateToProps, mapDispatchToProps)(Step3)

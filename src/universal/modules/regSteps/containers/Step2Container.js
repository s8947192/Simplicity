import { connect } from 'react-redux'

import Step2 from '../components/Step2/Step2'
import { completeStepTwo, selectLanguage } from 'universal/common/actions/registration'

const mapDispatchToProps = dispatch => ({
  completeStepTwo: (firstName, lastName, systemLanguage) =>
    dispatch(completeStepTwo(firstName, lastName, systemLanguage)),
  selectLanguage: language => dispatch(selectLanguage(language))
})

export default connect(null, mapDispatchToProps)(Step2)

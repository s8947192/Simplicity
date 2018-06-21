import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import Step2 from '../components/Steps/Step2'
import actions from '../actions'

import {
  getSelectedDuration,
  getSelectedSunscription
} from '../selectors'

const formValues = formValueSelector('regStep2')

const mapStateToProps = state => ({
  selectedDuration: formValues(state, 'selectedDuration'),
  selectedSubscription: formValues(state, 'selectedSubscription'),
  initialValues: {
    selectedDuration: getSelectedDuration(state),
    selectedSubscription: getSelectedSunscription(state)
  }
})

const mapDispatchToProps = dispatch => ({
  completeStepOne: data => dispatch(actions.completeStepOne(data)),
  setNextStep: nextStep => dispatch(actions.setNextStep(nextStep))
})

export default connect(mapStateToProps, mapDispatchToProps)(Step2)

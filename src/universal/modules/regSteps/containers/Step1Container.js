import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import Step1 from '../components/Step1/Step1'

import { actions as registrationActions } from 'universal/common/actions/registration'
import { checkIfUserExists } from 'universal/api/registration'
import { emailCheck } from 'universal/utils/formFieldsValidation'

import {
  getEmail,
  getPassword,
  getRepeatPassword,
  getIsStepPending,
  getIsEmailTaken
} from 'universal/common/selectors/registration'

const asyncValidate = (values, dispatch, props, field) => {
  const { email } = values
  const emailError = emailCheck(email)
  if (emailError) return Promise.reject({ email: emailError })
  if (!email.length) return Promise.reject({ email: 'required' })
  return checkIfUserExists(email).then(result => {
    if (result.data.length) throw { email: 'this email is taken' }
  })
}

const shouldAsyncValidate = params => {
  if (params.blurredField !== 'email') {
    return false
  }
  switch (params.trigger) {
    case 'blur':
      return false
    case 'change':
      return true
    case 'submit':
      return false
    default:
      return true
  }
}

const formValues = formValueSelector('regStep1')

const mapStateToProps = state => ({
  isStepPending: getIsStepPending(state),
  isEmailTaken: getIsEmailTaken(state),
  shouldAsyncValidate,
  asyncValidate,
  password: formValues(state, 'password'),
  initialValues: {
    email: getEmail(state),
    password: getPassword(state),
    repeatPassword: getRepeatPassword(state)
  }
})

const mapDispatchToProps = dispatch => ({
  completeStepOne: data => dispatch(registrationActions.completeStepOne(data)),
  setNextStep: nextStep => dispatch(registrationActions.setNextStep(nextStep))
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)

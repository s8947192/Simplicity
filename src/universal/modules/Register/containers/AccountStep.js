import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import AccountStep from '../components/Steps/AccountStep'
import { actions } from '../actions'

import {
  getUsername,
  getEmail,
  getPassword,
  getRepeatPassword
} from '../selectors'

import { findUserByEmail } from 'universal/api/auth'
import { emailCheck } from 'universal/utils/formFieldsValidation'

const formValues = formValueSelector('accountStep')

const asyncValidate = (values, dispatch, props, field) => {
  const { email } = values
  const emailError = emailCheck(email)
  if (emailError) return Promise.reject({ email: emailError })
  if (!email.length) return Promise.reject({ email: 'required' })
  return findUserByEmail(email).then(result => {
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

const mapStateToProps = state => ({
  shouldAsyncValidate,
  asyncValidate,
  password: formValues(state, 'password'),
  initialValues: {
    username: getUsername(state),
    email: getEmail(state),
    password: getPassword(state),
    repeatPassword: getRepeatPassword(state)
  }
})

const mapDispatchToProps = dispatch => ({
  completeStep: data => dispatch(actions.completeStep(data)),
  skipStep: () => dispatch(actions.skipStep())
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountStep)

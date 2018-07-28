import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

import Account from '../components/Steps/Account'

import { findUserByEmail } from 'universal/api/auth'
import { emailCheck } from 'universal/utils/formFieldsValidation'

const formValues = formValueSelector('accountStep')

const asyncValidate = values => {
  const email = values.get('email')
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
  asyncValidate
})


export default connect(mapStateToProps, null)(Account)

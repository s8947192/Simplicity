import { connect } from 'react-redux'

import Account from '../components/Steps/Account'

import { actions } from '../actions'
import { isStepCompleted } from '../selectors'

import { findUserByEmail } from 'universal/api/auth'
import { emailCheck } from 'universal/utils/formFieldsValidation'

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
  isStepCompleted: isStepCompleted(state, 0),
  shouldAsyncValidate,
  asyncValidate
})

const mapDispatchToProps = dispatch => ({
  saveAccountData: data => dispatch(actions.saveAccountData.start(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Account)

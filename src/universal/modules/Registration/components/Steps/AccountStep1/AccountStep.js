import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import Input from 'universal/common/components/FormFields/Input'
import PasswordSecurityProgress from 'universal/common/components/ProgressBars/PasswordSecurityProgress'
import StepControls from '../../StepControls'

import styles from './accountStep.scss'

import {
  requiredCheck,
  emailCheck,
  minLength6Check,
  maxLength12Check,
  passwordsMatchCheck
} from 'universal/utils/formFieldsValidation'

class AccountStep extends PureComponent {

  onSubmit = props => values => props.completeStep(values)

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      valid,
      asyncValidating,
      password,
      skipStep
    } = this.props

    return (
      <form className={styles.wrapper}>
        <Field
          type='text'
          name='username'
          label='username'
          placeholder='enter your username'
          component={Input}
          validate={[
            requiredCheck,
            maxLength12Check
          ]}
        />
        <Field
          type='email'
          name='email'
          label='email'
          placeholder='enter your email'
          component={Input}
          validate={[
            requiredCheck,
            emailCheck
          ]}
        />
        <Field
          type='password'
          name='password'
          label='password'
          placeholder='enter your password'
          component={Input}
          validate={[
            requiredCheck,
            minLength6Check,
            maxLength12Check
          ]}
        />
        <PasswordSecurityProgress
          currentString={password}
        />
        <Field
          type='password'
          name='repeatPassword'
          label='repeatPassword'
          placeholder='repeat your password'
          component={Input}
          validate={[
            passwordsMatchCheck,
            requiredCheck,
            minLength6Check,
            maxLength12Check
          ]}
        />
        <StepControls
          onCompleteClick={handleSubmit(this.onSubmit(this.props))}
          onSkipClick={skipStep}
          isEnabled={valid && !submitting && !asyncValidating}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'accountStep'
})(AccountStep)

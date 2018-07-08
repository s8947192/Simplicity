import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import cn from 'classnames'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import PasswordSecurityProgress from 'universal/common/components/ProgressBars/PasswordSecurityProgress'
import StepControls from '../../StepControls'

import russianFlag from 'universal/assets/icons/flags/russia.svg'
import snglishFlag from 'universal/assets/icons/flags/england.svg'
import germanyFlag from 'universal/assets/icons/flags/germany.svg'
import spanishFlag from 'universal/assets/icons/flags/spain.svg'

import styles from './step1.scss'

import {
  requiredCheck,
  emailCheck,
  minLength6Check,
  maxLength12Check,
  passwordsMatchCheck
} from 'universal/utils/formFieldsValidation'

class Step1 extends PureComponent {

  onSubmit = props => values => this.props.completeStepOne(values)

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      valid,
      asyncValidating,
      password,
      setNextStep
    } = this.props

    return (
      <form className={styles.wrapper}>
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
          isPending={false}
          onCompleteClick={handleSubmit(this.onSubmit(this.props))}
          onSkipClick={() => setNextStep(2)}
          isEnabled={valid && !submitting && !asyncValidating}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'regStep1'
})(Step1)

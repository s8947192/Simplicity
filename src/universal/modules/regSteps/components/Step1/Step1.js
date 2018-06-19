import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import cn from 'classnames'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import PasswordSecurityProgress from 'universal/common/components/ProgressBars/PasswordSecurityProgress'
import Controls from '../Controls/Controls'

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
      <form>
        <Field
          name='select'
          label='select'
          component={Select}
          options={[
            { value: 'rus', label: 'Russian', email: 'john@smith1.com' },
            { value: 'eng', label: 'English', email: 'john@smith2.com' },
            { value: 'ger', label: 'German', email: 'john@smith3.com' },
            { value: 'spa', label: 'Spanish', email: 'john@smith4.com' }
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
          type='text'
          name='furstName'
          label='first name'
          placeholder='enter your first name'
          component={Input}
          validate={[
            requiredCheck
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
        <Controls
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

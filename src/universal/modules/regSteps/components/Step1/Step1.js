import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import cn from 'classnames'

import Input from 'universal/common/components/FormFields/Input'
import Controls from '../Controls/Controls'

import styles from './step1.scss'

import {
  requiredCheck,
  emailCheck,
  minLength6Check,
  maxLength12Check,
  passwordsMatchCheck
} from 'universal/utils/formFieldsValidation'

const Progress = ({
  currentString,
  maxLength = 12
}) => {
  const currentLength = currentString ? currentString.length : 0
  const progress = 100 - 100 / maxLength * currentLength
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressText}>weak</div>
      <div className={styles.progressWrapper}>
        <div
          style={{ width: `${progress}%` }}
          className={
            cn(
              { [styles.progressLine__noRightBorder]: progress < 100 },
              { [styles.progressLine__noBorder]: progress <= 0 },
              styles.progressLine
            )
          }
        />
      </div>
      <div className={styles.progressText}>strong</div>
    </div>
  )
}

class Step1 extends PureComponent {

  onSubmit = props => values => {
    const { email, password, repeatPassword } = values
    const { completeStepOne } = this.props
    completeStepOne(email, password, repeatPassword)
  }

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      valid,
      asyncValidating,
      password
    } = this.props
    return (
      <form>
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
        <Progress currentString={password} />
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
          isEnabled={valid && !submitting && !asyncValidating}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'regStep1'
})(Step1)

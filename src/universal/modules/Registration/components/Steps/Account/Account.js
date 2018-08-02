import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import Input from 'universal/common/components/FormFields/Input'
import Button from 'universal/common/components/Button'

import {
  requiredCheck,
  emailCheck,
  minLength6Check,
  maxLength12Check,
  passwordsMatchCheck
} from 'universal/utils/formFieldsValidation'

import styles from './account.scss'

class AccountStep extends Component {

  onSubmit = props => values => props.saveAccountData(values)

  render() {
    const {
      handleSubmit,
      valid,
      submitting,
      asyncValidating,
      isStepCompleted
    } = this.props
    return (
      <form className={styles.form}>
        <div className={styles.row}>
          <Field
            name='firstName'
            label='First Name'
            placeholder='enter your real name...'
            className={styles.inputWrapper}
            component={Input}
          />
          <div className={styles.devider} />
          <Field
            name='lastName'
            label='Last Name'
            placeholder='enter your real last name...'
            className={styles.inputWrapper}
            component={Input}
          />
        </div>
        <Field
          name='nickName'
          label='Nickname'
          placeholder='enter your nickname...'
          className={styles.inputWrapper}
          component={Input}
          validate={[
            requiredCheck,
            maxLength12Check
          ]}
        />
        <Field
          name='email'
          label='Email'
          placeholder='enter your email...'
          className={styles.inputWrapper}
          component={Input}
          validate={[
            requiredCheck,
            emailCheck
          ]}
        />
        <Field
          name='password'
          label='Password'
          type='password'
          placeholder='enter your password...'
          className={styles.inputWrapper}
          component={Input}
          validate={[
            requiredCheck,
            minLength6Check,
            maxLength12Check
          ]}
        />
        <Field
          name='repeatPassword'
          label='Repeat Password'
          type='password'
          placeholder='repeat your password...'
          className={styles.inputWrapper}
          component={Input}
          validate={[
            requiredCheck,
            minLength6Check,
            maxLength12Check,
            passwordsMatchCheck
          ]}
        />
        <div className={styles.buttonWrapper}>
          <Button
            disabled={!valid || submitting || asyncValidating}
            onClick={handleSubmit(this.onSubmit(this.props))}
            value={isStepCompleted ? 'update' : 'complete'}
          />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'accountStep'
})(AccountStep)

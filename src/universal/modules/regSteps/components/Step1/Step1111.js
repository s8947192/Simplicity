import React, { Component } from 'react'
import cn from 'classnames'

import styles from './step1.scss'

import Input from 'universal/common/components/Input'
import Controls from '../Controls/Controls'

export default class Step1 extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      passwordRepeat: '',
      formErrors: { email: '', password: '', passwordRepeat: '' },
      emailValid: false,
      passwordValid: false,
      passwordRepeatValid: false,
      formValid: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const { email, formErrors } = this.state
    const { takenEmail } = nextProps
    const takenEmailMessage = 'this email is already in use'
    if (email === takenEmail) {
      this.setState({
        formErrors: {...formErrors, email: takenEmailMessage},
        emailValid: false,
      }, this.validateForm)
    }
  }

  onComplete = () => this.props.completeStepOne(this.state.email, this.state.password)

  onChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value}, () => { this.validateField(name, value) })
  }

  validateField = (fieldName, value) => {
    let {
      formErrors,
      emailValid,
      passwordValid,
      passwordRepeatValid,
      password,
      passwordRepeat
    } = this.state

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        formErrors.email = emailValid ? '' : 'email is invalid'
        break
      case 'password':
        passwordValid = value.length >= 6
        formErrors.password = passwordValid ? '': 'password is too short'
        passwordRepeatValid = value === passwordRepeat
        formErrors.passwordRepeat = passwordRepeatValid ? '': 'passwords don\'t match'
        break
      case 'passwordRepeat':
        const ruleLength = value.length >= 6
        const ruleMatch = value === password
        passwordRepeatValid = ruleLength && ruleMatch
        formErrors.passwordRepeat = !ruleMatch ? 'passwords don\'t match' : !ruleLength ? 'password is too short' : ''
        break
      default:
        break
    }
    this.setState({
      formErrors: formErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      passwordRepeatValid: passwordRepeatValid
    }, this.validateForm)
  }

  validateForm = () => {
    const { emailValid, passwordValid, passwordRepeatValid } = this.state
    this.setState({ formValid: emailValid && passwordValid && passwordRepeatValid })
  }

  render() {
    const {
      isStepPending,
      clearAlreadyTakenEmail
    } = this.props
    const {
      email,
      password,
      passwordRepeat,
      formErrors,
      formValid
    } = this.state
    const progress = 100 - 100 / 15 * password.length
    return (
      <div>
        <Input
          name='email'
          label='Email address *'
          placeholder='enter your email'
          style={{ marginBottom: 20 }}
          error={email && formErrors.email}
          onChange={this.onChange}
          value={email}
        />
        <Input
          name='password'
          label='Password (min 6 letters) *'
          placeholder='enater your password'
          style={{ marginBottom: 10 }}
          error={password && formErrors.password}
          onChange={this.onChange}
          value={password}
        />
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
        <Input
          name='passwordRepeat'
          label='Repeat password *'
          placeholder='repeat your password'
          style={{ marginBottom: 20 }}
          error={passwordRepeat && formErrors.passwordRepeat}
          onChange={this.onChange}
          value={passwordRepeat}
        />
        <Controls
          isPending={isStepPending}
          onCompleteClick={this.onComplete}
          isEnabled={formValid}
        />
      </div>
    )
  }
}

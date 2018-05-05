import React, { Component } from 'react'

import styles from './step1.scss'

import Input from 'universal/common/components/Input'
import Button from 'universal/common/components/Button'
import Preloader from 'universal/common/components/Preloader'

import warningIcon from 'universal/assets/icons/warning1.svg'

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

  onComplete = () => this.props.completeStepOne(this.state.email, this.state.password)

  onChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value}, () => { this.validateField(name, value) })
  }

  validateField = (fieldName, value) => {
    let fieldValidatErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    let passwordRepeatValid = this.state.passwordRepeatValid

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidatErrors.email = emailValid ? '' : 'email is invalid'
        break
      case 'password':
        passwordValid = value.length >= 6
        fieldValidatErrors.password = passwordValid ? '': 'password is too short'
        passwordRepeatValid = value === this.state.passwordRepeat
        fieldValidatErrors.passwordRepeat = passwordRepeatValid ? '': 'passwords don\'t match'
        break
      case 'passwordRepeat':
        const ruleLength = value.length >= 6
        const ruleMatch = value === this.state.password
        passwordRepeatValid = ruleLength && ruleMatch
        fieldValidatErrors.passwordRepeat = !ruleMatch ? 'passwords don\'t match' : !ruleLength ? 'password is too short' : ''
        break
      default:
        break
    }
    this.setState({
      formErrors: fieldValidatErrors,
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
    const { isStepPending } = this.props
    const {
      email,
      password,
      passwordRepeat,
      formErrors,
      formValid
    } = this.state
    const progress = 100 - 100 / 15 * password.length
    return (
      <div className={styles.wrapper}>
        {
          !!0 && (
            <div className={styles.overlay}>
              <div className={styles.layout}>
                <div className={styles.modalWrapper}>
                  <div className={styles.warningHeader}>
                    <img className={styles.warningIcon} src={warningIcon} />
                    <div className={styles.warningTitle}>not saved changes will not be lost</div>
                  </div>
                  <div className={styles.warningDesc}>would you still want to proceed?</div>
                  <div className={styles.buttonsWrapper}>
                    <Button title='cancel' />
                    <Button type='green' title='proceed' />
                  </div>
                </div>
              </div>
            </div>
          )
        }
        <Input name='email' label='Email address *' placeholder='enter your email' marginBottom={20}
          error={email && formErrors.email}
          onChange={this.onChange}
          value={email}
        />
        <Input name='password' label='Password (min 6 letters) *' placeholder='enater your password' marginBottom={10}
          error={password && formErrors.password}
          onChange={this.onChange}
          value={password}
        />
        <div className={styles.progressContainer}>
          <div className={styles.progressText}>weak</div>
          <div className={styles.progressWrapper}>
            <div style={{ width: `${progress}%` }} className={styles.progressLine} />
          </div>
          <div className={styles.progressText}>strong</div>
        </div>
        <Input name='passwordRepeat' label='Repeat password *' placeholder='repeat your password' marginBottom={20}
          error={passwordRepeat && formErrors.passwordRepeat}
          onChange={this.onChange}
          value={passwordRepeat}
        />
        {
          isStepPending && (
            <div className={styles.preloaderWrapper}>
              <Preloader />
            </div>
          )
        }
        {
          !isStepPending && (
            <div className={styles.controlsWrapper}>
              <div className={styles.controlsLabel}>You can click "finish" at any time</div>
              <div className={styles.controls}>
                <Button title='skip' />
                <Button type='green' onClick={formValid && this.onComplete} title='finish' disabled={!formValid} />
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

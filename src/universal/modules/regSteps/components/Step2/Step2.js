import React, { Component } from 'react'

import styles from './step2.scss'

import Input from 'universal/common/components/Input'
import Select from 'universal/common/components/Select'
// import Select1 from 'universal/common/components/FormFields/Select'
import Controls from '../Controls/Controls'

export default class Step2 extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      formErrors: { firstName: '' },
      firstNameValid: false,
      formValid: false,
      systemLanguage: 'english'
    }
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value}, () => { this.validateField(name, value) })
  }

  validateField = (fieldName, value) => {
    let { formErrors, firstNameValid } = this.state
    firstNameValid = value.length
    formErrors.firstName = firstNameValid ? '': 'name can\'t be empty'
    this.setState({ formErrors: formErrors, firstNameValid: firstNameValid }, this.validateForm)
  }

  validateForm = () => {
    const { firstNameValid } = this.state
    this.setState({ formValid: firstNameValid })
  }

  onComplete = () => {
    const { firstName, lastName, systemLanguage } = this.state
    this.props.completeStepTwo(firstName, lastName, systemLanguage)
  }

  onSelect = value => {
    this.setState({ systemLanguage: value })
    this.props.selectLanguage(value)
  }

  render() {
    const {
      firstName,
      lastname,
      formValid
    } = this.state
    return (
      <div>
        <div className={styles.namesWrapper}>
          <Input
            name='firstName'
            label='First Name *'
            placeholder='enter your name'
            style={{ marginRight: 10 }}
            value={firstName}
            onChange={this.onChange}
          />
          <Input
            name='lastName'
            label='Last Name (optional)'
            placeholder='enter your last name'
            value={lastname}
            onChange={this.onChange}
          />
        </div>
        <Select
          label='System Language'
          style={{ marginBottom: 20 }}
          onSelect={this.onSelect}
          options={[
            { text: 'english', value: 'eng' },
            { text: 'russian', value: 'rus' },
            { text: 'spanish', value: 'spain' },
            { text: 'german', value: 'ger' }
          ]}
        />
        <Controls
          onCompleteClick={this.onComplete}
          isEnabled={formValid}
        />
      </div>
    )
  }
}

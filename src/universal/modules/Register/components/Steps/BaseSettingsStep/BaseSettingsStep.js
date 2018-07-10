import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import currencies from 'currency-codes'
import cn from 'classnames'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import StepControls from '../../StepControls'

import russianFlag from 'universal/assets/icons/flags/russia.svg'
import englishFlag from 'universal/assets/icons/flags/england.svg'
import germanyFlag from 'universal/assets/icons/flags/germany.svg'
import spanishFlag from 'universal/assets/icons/flags/spain.svg'

import {
  requiredCheck,
  maxLength12Check,
} from 'universal/utils/formFieldsValidation'

import styles from './baseSettingsStep.scss'

const durationOptions = [
  { value: 'english', label: 'English', imgSrc: russianFlag },
  { value: 'russian', label: 'Russian', imgSrc: englishFlag },
  { value: 'german', label: 'German', imgSrc: germanyFlag },
  { value: 'spanish', label: 'Spanish', imgSrc: spanishFlag }
]

const ValueRenderer = ({ children, value }) => (
  <div className={cn('Select-value', styles.value)}>
    <span className={cn('Select-value-label', styles.valueEl)}>
      <img height={24} className={styles.icon} src={value.imgSrc} />
      { children }
    </span>
  </div>
)

class BaseSettingsStep extends PureComponent {
  render() {
    console.log(currencies.codes())
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
          name='systemLanguage'
          label='system language'
          component={Select}
          options={durationOptions}
        />
        <StepControls
          isPending={false}
          onCompleteClick={() => console.log('SUBMIT')}
          onSkipClick={() => console.log('SKIP')}
          isEnabled={valid}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'baseSettings'
})(BaseSettingsStep)

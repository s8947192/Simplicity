import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import cn from 'classnames'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import StepControls from '../../StepControls'

import russianFlag from 'universal/assets/icons/flags/russia.svg'
import englishFlag from 'universal/assets/icons/flags/england.svg'
import germanyFlag from 'universal/assets/icons/flags/germany.svg'
import spanishFlag from 'universal/assets/icons/flags/spain.svg'

import dollarIcon from 'universal/assets/icons/currencies/dollar.svg'
import euroIcon from 'universal/assets/icons/currencies/euro.svg'
import yuanIcon from 'universal/assets/icons/currencies/yuan.svg'
import poundSterlingIcon from 'universal/assets/icons/currencies/pound-sterling.svg'
import rubleIcon from 'universal/assets/icons/currencies/ruble.svg'

import styles from './baseSettingsStep.scss'

const durationOptions = [
  { value: 'english', label: 'English', imgSrc: englishFlag },
  { value: 'russian', label: 'Russian', imgSrc: russianFlag },
  { value: 'german', label: 'German', imgSrc: germanyFlag },
  { value: 'spanish', label: 'Spanish', imgSrc: spanishFlag }
]

const currencyOptions = [
  { value: 'dollar', label: 'Dollar', imgSrc: dollarIcon },
  { value: 'euro', label: 'Euro', imgSrc: euroIcon },
  { value: 'yuan', label: 'Yuan', imgSrc: yuanIcon },
  { value: 'poundSterling', label: 'Pound-Sterling', imgSrc: poundSterlingIcon },
  { value: 'ruble', label: 'Ruble', imgSrc: rubleIcon }
]


class BaseSettingsStep extends PureComponent {
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
          name='systemLanguage'
          label='interface language'
          component={Select}
          options={durationOptions}
        />
        <Field
          name='defaultCurrency'
          label='default currency'
          component={Select}
          options={currencyOptions}
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

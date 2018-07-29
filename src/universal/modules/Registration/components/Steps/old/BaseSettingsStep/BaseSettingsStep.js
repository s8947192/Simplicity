import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import cn from 'classnames'

import Input from 'universal/common/components/FormFields/Input'
import Select from 'universal/common/components/FormFields/Select'
import Notification from 'universal/common/components/Notification'

import russianFlag from 'universal/assets/icons/flags/russia.svg'
import englishFlag from 'universal/assets/icons/flags/england.svg'
import germanyFlag from 'universal/assets/icons/flags/germany.svg'
import spanishFlag from 'universal/assets/icons/flags/spain.svg'

import dollarIcon from 'universal/assets/icons/currencies/dollar.svg'
import euroIcon from 'universal/assets/icons/currencies/euro.svg'
import yuanIcon from 'universal/assets/icons/currencies/yuan.svg'
import poundSterlingIcon from 'universal/assets/icons/currencies/pound-sterling.svg'
import rubleIcon from 'universal/assets/icons/currencies/ruble.svg'

import StepControls from '../../StepControls'

import styles from './baseSettingsStep.scss'

const durationOptions = [
  { value: 'english', label: 'English', imgSrc: englishFlag },
  { value: 'russian', label: 'Russian', imgSrc: russianFlag },
  { value: 'german', label: 'German', imgSrc: germanyFlag },
  { value: 'spanish', label: 'Spanish', imgSrc: spanishFlag }
]

const currencyOptions = [
  { value: 'dollar', label: 'Dollar', imgSrc: dollarIcon, imgSize: 18 },
  { value: 'euro', label: 'Euro', imgSrc: euroIcon, imgSize: 18 },
  { value: 'yuan', label: 'Yuan', imgSrc: yuanIcon, imgSize: 18 },
  { value: 'poundSterling', label: 'Pound-Sterling', imgSrc: poundSterlingIcon, imgSize: 18 },
  { value: 'ruble', label: 'Ruble', imgSrc: rubleIcon, imgSize: 18 }
]


class BaseSettingsStep extends PureComponent {

  componentWillMount() {
    const { languages, currencies, requestBaseSettings } = this.props
    if (!languages.length && !currencies.length) {
      requestBaseSettings()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { languages, currencies, requestBaseSettings } = nextProps
    if (!languages.length && !currencies.length) {
      requestBaseSettings()
    }
  }

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

    const infoMessage = 'You can easily change default currency and interface language from your profile page'

    return (
      <form className={styles.wrapper}>
        <Notification message={infoMessage} />
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

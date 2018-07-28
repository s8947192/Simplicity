import React from 'react'
import { Field, reduxForm } from 'redux-form'
import cn from 'classnames'

import TitleDevider from 'universal/common/components/TitleDevider'
import Select from 'universal/common/components/FormFields/Select'

import russianFlag from 'universal/assets/icons/flags/russia.svg'
import englishFlag from 'universal/assets/icons/flags/england.svg'
import germanyFlag from 'universal/assets/icons/flags/germany.svg'
import spanishFlag from 'universal/assets/icons/flags/spain.svg'

import dollarIcon from 'universal/assets/icons/currencies/dollar.svg'
import euroIcon from 'universal/assets/icons/currencies/euro.svg'
import yuanIcon from 'universal/assets/icons/currencies/yuan.svg'
import poundSterlingIcon from 'universal/assets/icons/currencies/pound-sterling.svg'
import rubleIcon from 'universal/assets/icons/currencies/ruble.svg'

import worldwideImg from 'universal/assets/icons/common/worldwide.svg'
import moneyImg from 'universal/assets/icons/common/money.svg'

import styles from './mainSettings.scss'

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

const MainSettings = ({  }) => {
  return (
    <form>
      <TitleDevider img={worldwideImg} text='Select subscription plan' />
      <Field
        name='systemLanguage'
        component={Select}
        options={durationOptions}
      />
      <TitleDevider img={moneyImg} text='Select subscription plan' />
      <Field
        name='defaultCurrency'
        component={Select}
        options={currencyOptions}
      />
    </form>
  )
}

export default reduxForm({
  form: 'mainSettings'
})(MainSettings)

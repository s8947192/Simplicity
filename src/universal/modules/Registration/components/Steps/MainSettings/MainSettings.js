import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import cn from 'classnames'

import TailSpin from 'universal/common/components/Preloaders/TailSpin'
import TitleDevider from 'universal/common/components/TitleDevider'
import Select from 'universal/common/components/FormFields/Select'
import Button from 'universal/common/components/Button'

import worldwideImg from 'universal/assets/icons/common/worldwide.svg'
import moneyImg from 'universal/assets/icons/common/money.svg'

import styles from './mainSettings.scss'

class MainSettings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      optionLanguages: null,
      optionCurrencies: null
    }
  }

  async componentWillMount() {
    const { languages, currencies, requestMainSettings } = this.props
    if (!languages.size || !currencies.size) {
      return requestMainSettings()
    }
    const optionLanguages = await this.formOptions('flags', languages)
    const optionCurrencies = await this.formOptions('currencies', currencies, 14)
    this.setState({ optionLanguages, optionCurrencies })
  }

  async componentWillReceiveProps(nextProps) {
    const optionLanguages = await this.formOptions('flags', nextProps.languages)
    const optionCurrencies = await this.formOptions('currencies', nextProps.currencies, 14)
    this.setState({ optionLanguages, optionCurrencies })
  }

  async formOptions(type, entities, imgSize=24) {
    if (!entities.size) return
    const optionLanguages = entities.toList().toJS().map(async entity => {
      const img = await import(`universal/assets/icons/${type}/${entity.title}.svg`)
      return {
        value: entity.id,
        label: entity.title,
        imgSrc: img,
        imgSize: imgSize
      }
    })
    return await Promise.all(optionLanguages)
  }

  onSubmit = props => values => props.saveMainSettings(values)

  render() {

    const {
      optionLanguages,
      optionCurrencies
    } = this.state

    const {
      handleSubmit
    } = this.props

    if (!optionLanguages || !optionCurrencies) {
      return (
        <div className={styles.preloader}>
          <TailSpin size={50} />
          <div className={styles.preloader__desc}>loading main settings...</div>
        </div>
      )
    }

    return (
      <form className={styles.component}>
        <div className={styles.wrapper}>
          <div className={styles.el}>
            <TitleDevider
              img={worldwideImg}
              text='Select system language'
            />
            <Field
              name='systemLanguage'
              component={Select}
              options={optionLanguages}
            />
          </div>
          <div className={styles.devider} />
          <div className={styles.el}>
            <TitleDevider
              img={moneyImg}
              text='Select system currency'
            />
            <Field
              name='systemCurrency'
              component={Select}
              options={optionCurrencies}
            />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={handleSubmit(this.onSubmit(this.props))}
            value='complete'
          />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'mainSettings'
})(MainSettings)

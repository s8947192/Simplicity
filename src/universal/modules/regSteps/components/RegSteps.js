import React, { Component } from 'react'
import cn from 'classnames'

import styles from './regSteps.scss'

import Step1Container from '../containers/Step1Container'
import Step2Container from '../containers/Step2Container'
import Step3Container from '../containers/Step3Container'

export default class RegSteps extends Component {
  render() {
    const {
      activeStep
    } = this.props
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Account</div>
        { activeStep === 1 && <Step1Container /> }
        { activeStep === 2 && <Step2Container /> }
        { activeStep === 3 && <Step3Container /> }
      </div>
    )
  }
}

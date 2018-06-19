import React, { Component } from 'react'
import cn from 'classnames'

import styles from './regSteps.scss'

import Step1Container from '../containers/Step1Container'
import Step2Container from '../containers/Step2Container'
import Step3Container from '../containers/Step3Container'
import Step4 from './Step4/Step4'

export default class RegSteps extends Component {
  render() {
    const { activeStep } = this.props
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Account</div>
        { activeStep === 1 && <Step1Container /> }
        { activeStep === 2 && <Step3Container /> }
        { activeStep === 4 && <Step4 /> }
      </div>
    )
  }
}

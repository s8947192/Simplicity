import React from 'react'
import cn from 'classnames'

import Step1 from '../../containers/Step1'
import Step2 from '../../containers/Step2'

import styles from './activeStep.scss'

const ActiveStep = ({ activeStep }) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Account</div>
    { activeStep === 1 && <Step1 /> }
    { activeStep === 2 && <Step2 /> }
  </div>
)

export default ActiveStep

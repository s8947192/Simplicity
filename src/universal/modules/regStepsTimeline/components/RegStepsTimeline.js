import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './regStepsTimeline.scss'

import Input from 'universal/common/components/Input'
import Step from './Step/Step'

export default class RegStepsTimeline extends Component {
  render() {
    const {
      activeStep,
      setActiveStep
    } = this.props
    return (
      <div className={styles.stepsWrapper}>
        <Step onClick={() => setActiveStep(1)}
          isActive={activeStep === 1}
          stepNumber={1}
          hasLeadingLine
          stepTitle='Account'
        />
        <Step onClick={() => setActiveStep(2)}
          isActive={activeStep === 2}
          stepNumber={2}
          hasLeadingLine
          stepTitle='Personal'
        />
        <Step onClick={() => setActiveStep(3)}
          isActive={activeStep === 3}
          stepNumber={3}
          hasLeadingLine
          stepTitle='Subscription'
        />
        <Step onClick={() => setActiveStep(4)}
          isActive={activeStep === 4}
          stepNumber={4}
          hasLeadingLine
          stepTitle='Payment'
        />
        <Step onClick={() => setActiveStep(5)}
          isActive={activeStep === 5}
          stepNumber={5}
          hasLeadingLine
          stepTitle='Verification'
        />
        <Step onClick={() => setActiveStep(6)}
          isActive={activeStep === 6}
          stepNumber={6}
          stepTitle='Done'
        />
      </div>
    )
  }
}

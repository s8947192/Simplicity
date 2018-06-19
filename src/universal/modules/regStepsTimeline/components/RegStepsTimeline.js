import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './styles.scss'

import Input from 'universal/common/components/Input'
import Step from './Step/Step'

export default class RegStepsTimeline extends Component {
  render() {
    const {
      activeStep,
      completedSteps,
      setNextStep
    } = this.props
    return (
      <div className={styles.stepsWrapper}>
        <Step thisStep={1}
          activeStep={activeStep}
          completedSteps={completedSteps}
          setNextStep={setNextStep}
          stepLabel='Account'
        />
        <Step thisStep={2}
          activeStep={activeStep}
          completedSteps={completedSteps}
          setNextStep={setNextStep}
          stepLabel='Subscription'
        />
        <Step thisStep={3}
          activeStep={activeStep}
          completedSteps={completedSteps}
          setNextStep={setNextStep}
          stepLabel='Payment'
        />
        <Step thisStep={4}
          activeStep={activeStep}
          completedSteps={completedSteps}
          setNextStep={setNextStep}
          stepLabel='Verification'
        />
        <Step thisStep={5} noLine
          activeStep={activeStep}
          completedSteps={completedSteps}
          setNextStep={setNextStep}
          stepLabel='Done'
        />
      </div>
    )
  }
}

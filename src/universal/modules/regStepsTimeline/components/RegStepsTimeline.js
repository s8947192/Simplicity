import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './regStepsTimeline.scss'

import Input from 'universal/common/components/Input'
import Step from './Step/Step'

export default class RegStepsTimeline extends Component {

  isStepDone = (steps, currentStep) => steps.indexOf(currentStep) !== -1
  isStepActive = (activeStep, currentStep) => activeStep === currentStep

  render() {
    const {
      activeStep,
      completedSteps,
      setNextStep
    } = this.props
    return (
      <div className={styles.stepsWrapper}>
        <Step onClick={() => setNextStep(1)}
          isDone={this.isStepDone(completedSteps, 1)}
          isActive={this.isStepActive(activeStep, 1)}
          stepNumber={1}
          hasLeadingLine
          stepTitle='Account'
        />
        <Step onClick={() => setNextStep(2)}
          isDone={this.isStepDone(completedSteps, 2)}
          isActive={this.isStepActive(activeStep, 2)}
          stepNumber={2}
          hasLeadingLine
          stepTitle='Personal'
        />
        <Step onClick={() => setNextStep(3)}
          isDone={this.isStepDone(completedSteps, 3)}
          isActive={this.isStepActive(activeStep, 3)}
          stepNumber={3}
          hasLeadingLine
          stepTitle='Subscription'
        />
        <Step onClick={() => setNextStep(4)}
          isDone={this.isStepDone(completedSteps, 4)}
          isActive={this.isStepActive(activeStep, 4)}
          stepNumber={4}
          hasLeadingLine
          stepTitle='Payment'
        />
        <Step onClick={() => setNextStep(5)}
          isDone={this.isStepDone(completedSteps, 5)}
          isActive={this.isStepActive(activeStep, 5)}
          stepNumber={5}
          hasLeadingLine
          stepTitle='Verification'
        />
        <Step onClick={() => setNextStep(6)}
          isDone={this.isStepDone(completedSteps, 6)}
          isActive={this.isStepActive(activeStep, 6)}
          stepNumber={6}
          stepTitle='Done'
        />
      </div>
    )
  }
}

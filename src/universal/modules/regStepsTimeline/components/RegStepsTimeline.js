import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './regStepsTimeline.scss'

import Input from 'universal/common/components/Input'
import Step from './Step/Step'

export default class RegStepsTimeline extends Component {

  componentWillMount() {
    // const { subscriptions, requestSubscriptions } = this.props
    // if (!subscriptions.length) {
    //   requestSubscriptions()
    // }
  }

  render() {
    const {
      activeStep,
      setActiveStep,
      completedSteps,
      isSubscriptionPredefined,
      subscriptions,
      selectedSubscriptionId
    } = this.props
    const shouldShowPayment = !!subscriptions.length && subscriptions[0].id === selectedSubscriptionId
    const isStepThreeDone = completedSteps.some(step => step === 3)
    return (
      <div className={styles.stepsWrapper}>
        <Step onClick={() => setActiveStep(1)}
          isDone={completedSteps.some(step => step === 1)}
          isActive={activeStep === 1}
          stepNumber={1}
          hasLeadingLine
          stepTitle='Account'
        />
        <Step onClick={() => setActiveStep(2)}
          isDone={completedSteps.some(step => step === 2)}
          isActive={activeStep === 2}
          stepNumber={2}
          hasLeadingLine
          stepTitle='Personal'
        />
        <Step onClick={() => setActiveStep(3)}
          isDone={isStepThreeDone}
          isActive={activeStep === 3}
          isSkipped={!isStepThreeDone && selectedSubscriptionId}
          stepNumber={3}
          hasLeadingLine
          stepTitle='Subscription'
        />
        {
          !shouldShowPayment && (
            <Step onClick={() => setActiveStep(4)}
              isDone={completedSteps.some(step => step === 4)}
              isActive={activeStep === 4}
              stepNumber={4}
              hasLeadingLine
              stepTitle='Payment'
            />
          )
        }
        <Step onClick={() => setActiveStep(5)}
          isDone={completedSteps.some(step => step === 5)}
          isActive={activeStep === 5}
          stepNumber={5}
          hasLeadingLine
          stepTitle='Verification'
        />
        <Step onClick={() => setActiveStep(6)}
          isDone={completedSteps.some(step => step === 6)}
          isActive={activeStep === 6}
          stepNumber={6}
          stepTitle='Done'
        />
      </div>
    )
  }
}

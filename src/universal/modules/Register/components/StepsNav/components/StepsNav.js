import React from 'react'

import Input from 'universal/common/components/Input'
import Step from './Step'

import styles from './stepsNav.scss'

const StepsNav = ({
  activeStep,
  completedSteps,
  setNextStep,
  isSelectedSubscriptionFree
}) => (
  <div className={styles.wrapper}>
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
    {
      !isSelectedSubscriptionFree && (
        <Step thisStep={3}
          activeStep={activeStep}
          completedSteps={completedSteps}
          setNextStep={setNextStep}
          stepLabel='Payment'
        />
      )
    }
    <Step thisStep={!isSelectedSubscriptionFree ? 4 : 3}
      activeStep={activeStep}
      completedSteps={completedSteps}
      setNextStep={setNextStep}
      stepLabel='Verification'
    />
    <Step thisStep={!isSelectedSubscriptionFree ? 5 : 4} noLine
      activeStep={activeStep}
      completedSteps={completedSteps}
      setNextStep={setNextStep}
      stepLabel='Done'
    />
  </div>
)

export default StepsNav

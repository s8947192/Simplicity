import React, { Component } from 'react'
import cn from 'classnames'

import AnimatedMount from 'universal/common/components/AnimatedMount'

import styles from './step.scss'

const Step = ({
  activeStep,
  completedSteps,
  thisStep,
  switchToStep,
  stepLabel,
  isEnabled=true,
  isAppearing,
  isSubscrFree,
  noLine
}) => {

  const isDone = completedSteps.indexOf(thisStep) !== -1
  const isActive = activeStep === thisStep
  const stepNumber = isSubscrFree ? thisStep : thisStep + 1

  return (
    <div className={styles.step}>
      <div
        onClick={() => (isEnabled && switchToStep(thisStep))}
        className={cn(
          styles.step__number,
          {[cn(styles['step__number_active'], styles['step__number_active--red'])]: isActive && !isDone},
          {[cn(styles['step__number_active'], styles['step__number_active--green'])]: isActive && isDone},
          {[styles['step__number_done']]: !isActive && isDone},
          {[styles['step__number_invis']]: !isEnabled}
        )}
      >
        { !isActive && !isDone && isEnabled && stepNumber }
      </div>
      <div
        onClick={() => (isEnabled && switchToStep(thisStep))}
        className={cn(
          styles.step__desc,
          {[styles[`step__desc_active`]]: isActive },
          {[styles[`step__desc_done`]]: isDone },
          {[styles[`step__desc_invis`]]: !isEnabled }
        )}
      >
        { isActive ? <strong>{ stepLabel }</strong> : stepLabel }
      </div>
      {
        !noLine && (
          <div className={cn(
            styles.step__leadingLine,
            { [styles['step__leadingLine--done']]: isDone }
          )} />
        )
      }
    </div>
  )
}

export default Step

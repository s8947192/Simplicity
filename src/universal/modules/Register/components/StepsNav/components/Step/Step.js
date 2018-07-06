import React, { Component } from 'react'
import cn from 'classnames'

import styles from './step.scss'

const Step = ({
  activeStep,
  completedSteps,
  thisStep,
  setNextStep,
  stepLabel,
  isEnabled=true,
  noLine
}) => {

  const isDone = completedSteps.indexOf(thisStep) !== -1
  const isActive = activeStep === thisStep

  return (
    <div className={styles.step}>
      <div
        onClick={() => (isEnabled && setNextStep(thisStep))}
        className={cn(
          styles.step__number,
          {[cn(styles['step__number_active'], styles['step__number_active--red'])]: isActive && !isDone},
          {[cn(styles['step__number_active'], styles['step__number_active--green'])]: isActive && isDone},
          {[styles['step__number_done']]: !isActive && isDone},
          {[styles['step__number_invis']]: !isEnabled}
        )}
      >
        { !isActive && !isDone && isEnabled && thisStep }
      </div>
      <div
        onClick={() => (isEnabled && setNextStep(thisStep))}
        className={cn(
          styles.step__desc,
          {[styles[`step__desc_active`]]: isActive },
          {[styles[`step__desc_done`]]: isDone },
          {[styles[`step__desc_invis`]]: !isEnabled }
        )}
      >
        { isActive ? <strong>{ stepLabel }</strong> : stepLabel }
      </div>
      { !noLine && <div className={styles.step__leadingLine} /> }
    </div>
  )
}

export default Step

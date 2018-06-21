import React, { Component } from 'react'
import cn from 'classnames'

import styles from './step.scss'

const Step = ({
  activeStep,
  completedSteps,
  thisStep,
  setNextStep,
  stepLabel,
  noLine
}) => {

  const isDone = completedSteps.indexOf(thisStep) !== -1
  const isActive = activeStep === thisStep

  return (
    <div className={styles.step}>
      <div
        onClick={() => setNextStep(thisStep)}
        className={cn(
          styles.step__number,
          {[styles['step__number_active']]: isActive},
          {[styles['step__number_done']]: isDone}
        )}
      >
        { !isActive && thisStep }
      </div>
      <div
        onClick={() => setNextStep(thisStep)}
        className={cn(
          styles.step__desc,
          {[styles[`step__desc_active`]]: isActive },
          {[styles[`step__desc_done`]]: isDone }
        )}
      >
        { isActive ? <strong>{ stepLabel }</strong> : stepLabel }
      </div>
      { !noLine && <div className={styles.step__leadingLine} /> }
    </div>
  )
}

export default Step

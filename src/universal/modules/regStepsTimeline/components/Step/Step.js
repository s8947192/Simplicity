import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './step.scss'

const Step = ({
    isActive,
    isError,
    isSkipped,
    isDone,
    onClick,
    stepNumber,
    stepTitle,
    hasLeadingLine
  }) => {
  const styleType = isActive ? 'active' : isError ? 'err' : isSkipped ? 'skipped' : isDone ? 'done' : ''
  return (
    <div className={styles.step}>
      <div className={cn(styles.step__number, {[styles[`step__number_${styleType}`]]: styleType.length })}>
        { !styleType.length && stepNumber }
      </div>
      <div className={cn(styles.step__desc, {[styles[`step__desc_${styleType}`]]: styleType.length })}>
        { styleType === 'active' ? <strong>{ stepTitle }</strong> : stepTitle }
      </div>
      { hasLeadingLine && <div className={styles.step__leadingLine} /> }
    </div>
  )
}

export default Step

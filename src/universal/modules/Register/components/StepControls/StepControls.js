import React, { Component } from 'react'

import styles from './stepControls.scss'

import Button from 'universal/common/components/Button'
import Preloader from 'universal/common/components/Preloader'

const StepControls = ({
  isPending,
  onCompleteClick,
  onSkipClick,
  isEnabled
}) => {
  if (isPending) {
    return (
      <div className={styles.preloader}>
        <Preloader />
      </div>
    )
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Button title='skip' onClick={onSkipClick} />
        <Button type='green' onClick={isEnabled && onCompleteClick} title='complete' disabled={!isEnabled} />
      </div>
    </div>
  )
}

export default StepControls

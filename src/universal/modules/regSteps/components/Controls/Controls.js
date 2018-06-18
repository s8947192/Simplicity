import React, { Component } from 'react'

import styles from './controls.scss'

import Button from 'universal/common/components/Button'
import Preloader from 'universal/common/components/Preloader'

export default class Controls extends Component {
  render() {
    const {
      isPending,
      onCompleteClick,
      onSkipClick,
      isEnabled
    } = this.props

    if (isPending) {
      return (
        <div className={styles.preloaderWrapper}>
          <Preloader />
        </div>
      )
    }

    return (
      <div className={styles.controlsWrapper}>
        <div className={styles.controlsLabel}>You can click "finish" at any time</div>
        <div className={styles.controls}>
          <Button title='skip' onClick={onSkipClick} />
          <Button type='green' onClick={isEnabled && onCompleteClick} title='finish' disabled={!isEnabled} />
        </div>
      </div>
    )
  }
}

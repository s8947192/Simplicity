import React, { Component } from 'react'
import cn from 'classnames'

import styles from './step.scss'

export default class Step extends Component {

  onSetNextStep = () => this.props.setNextStep(this.props.thisStep)

  render() {
    const {
      activeStep,
      completedSteps,
      thisStep,
      setNextStep,
      stepLabel,
      noLine
    } = this.props

    const isDone = completedSteps.indexOf(thisStep) !== -1
    const isActive = activeStep === thisStep

    return (
      <div className={styles.step}>
        <div
          onClick={this.onSetNextStep}
          className={cn(
            styles.step__number,
            {[styles['step__number_active']]: isActive},
            {[styles['step__number_done']]: isDone}
          )}
        >
          { !isActive && thisStep }
        </div>
        <div
          onClick={this.onSetNextStep}
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
}

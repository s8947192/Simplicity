import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './regStepsTimeline.scss'

import Input from 'universal/common/components/Input'
import Step from './Step/Step'

export default class RegStepsTimeline extends Component {
  render() {
    return (
      <div className={styles.stepsWrapper}>
        <Step
          isActive
          hasLeadingLine
          stepNumber={1}
          stepTitle='Account'
          onClick={() => console.log('CLICK')}
        />
        <Step
          isError
          hasLeadingLine
          stepNumber={2}
          stepTitle='Personal'
          onClick={() => console.log('CLICK')}
        />
        <Step
          isSkipped
          hasLeadingLine
          stepNumber={3}
          stepTitle='Subscription'
          onClick={() => console.log('CLICK')}
        />
        <Step
          isDone
          hasLeadingLine
          stepNumber={4}
          stepTitle='Payment'
          onClick={() => console.log('CLICK')}
        />
        <Step
          isDone
          hasLeadingLine
          stepNumber={5}
          stepTitle='Verification'
          onClick={() => console.log('CLICK')}
        />
        <Step
          stepNumber={6}
          stepTitle='Done'
          onClick={() => console.log('CLICK')}
        />
      </div>
    )
  }
}

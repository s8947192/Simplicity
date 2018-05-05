import React, { Component } from 'react'
import cn from 'classnames'

import styles from './regSteps.scss'

import Input from 'universal/common/components/Input'
import Step1Container from '../containers/Step1Container'

export default class RegSteps extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Account</div>
        <Step1Container />
      </div>
    )
  }
}

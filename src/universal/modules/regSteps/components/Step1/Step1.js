import React, { Component } from 'react'

import styles from './step1.scss'

import Input from 'universal/common/components/Input'
import Button from 'universal/common/components/Button'

export default class Step1 extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Input marginBottom={20} name='email' label='Email address *' value='' placeholder='enter your email' />
        <Input marginBottom={10} name='password' label='Password (min 6 letters) *' value='' placeholder='enateryour password' />
        <div className={styles.progressContainer}>
          <div className={styles.progressText}>weak</div>
          <div className={styles.progressWrapper}>
            <div className={styles.progressLine} />
          </div>
          <div className={styles.progressText}>strong</div>
        </div>
        <Input marginBottom={20} name='password' label='Repeat password *' value='' placeholder='repeat your password' />
        <div className={styles.controlsWrapper}>
          <div className={styles.controlsLabel}>You can click "finish" at any time</div>
          <div className={styles.controls}>
            <Button title='skip' />
            <Button type='green' title='finish' />
          </div>
        </div>
      </div>
    )
  }
}

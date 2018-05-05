import React, { Component } from 'react'
import cn from 'classnames'
import styles from './subscriptionSwitcher.scss'

export default class SubscriptionSwitcher extends Component {

  setDuration = duration => this.props.selectDuration(duration)

  render () {
    const { duration } = this.props
    return (
      <div className={styles.planContainer}>
        <div onClick={() => this.setDuration(1)} className={cn(styles.planEl, {[styles.planEl_active]: duration === 1})}>1 month pricing</div>
        <div onClick={() => this.setDuration(3)} className={cn(styles.planEl, {[styles.planEl_active]: duration === 3})}>3 month pricing</div>
        <div onClick={() => this.setDuration(6)} className={cn(styles.planEl, {[styles.planEl_active]: duration === 6})}>6 month pricing</div>
        <div className={cn(styles.switcher, styles[`switcher__offset_${duration}`])} />
      </div>
    )
  }
}

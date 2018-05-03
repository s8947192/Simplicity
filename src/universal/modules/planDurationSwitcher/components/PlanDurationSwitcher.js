import React, { Component } from 'react'
import cn from 'classnames'
import styles from './planDurationSwitcher.scss'

export default class PlanSwitcher extends Component {

  setDuration = duration => this.props.setDuration(duration)

  render () {
    const {
      planDuration
    } = this.props
    return (
      <div className={styles.planContainer}>
        <div onClick={() => this.setDuration(1)} className={cn(styles.planEl, {[styles.planEl_active]: planDuration === 1})}>1 month pricing</div>
        <div onClick={() => this.setDuration(3)} className={cn(styles.planEl, {[styles.planEl_active]: planDuration === 3})}>3 month pricing</div>
        <div onClick={() => this.setDuration(6)} className={cn(styles.planEl, {[styles.planEl_active]: planDuration === 6})}>6 month pricing</div>
        <div className={cn(styles.switcher, styles[`switcher__offset_${planDuration}`])} />
      </div>
    )
  }
}

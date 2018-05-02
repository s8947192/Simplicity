import React, { Component } from 'react'
import cn from 'classnames'
import styles from './sitePricingLayout.scss'

export default class SitePricingLayout extends Component {
  constructor () {
    super()
    this.state = {
      activeEl: 1
    }
  }

  setToActive = el => this.setState({ activeEl: el })

  render () {
    const {
      activeEl
    } = this.state
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Subscription Options</div>
        <div className={styles.desc}>You are currently on FREE plan - Upgrade, downgrade, or cancel at any time</div>
        <div className={styles.planWrapper}>
          <div className={styles.planContainer}>
            <div onClick={() => this.setToActive(1)} className={cn(styles.planEl, {[styles.planEl_active]: activeEl === 1})}>1 month pricing</div>
            <div onClick={() => this.setToActive(2)} className={cn(styles.planEl, {[styles.planEl_active]: activeEl === 2})}>3 month pricing</div>
            <div onClick={() => this.setToActive(3)} className={cn(styles.planEl, {[styles.planEl_active]: activeEl === 3})}>6 month pricing</div>
            <div className={cn(styles.switcher, styles[`switcher__offset_${this.state.activeEl}`])} />
          </div>
        </div>
        <div className={styles.planCardsWrapper}>
          <div className={styles.planCardWrapper}>
            <div className={styles.planTitle}>free</div>
            <div className={styles.planPrice}>
              <span className={styles.planPrice__sup}>$</span>
              <span className={styles.planPrice__main}>0</span>
            </div>
            <div className={styles.planAdvantages}>
              <div className={styles.planAdvantages__el}><strong>3</strong> month trial period</div>
              <div className={styles.planAdvantages__el}><strong>2</strong> active clients</div>
            </div>
            <div className={styles.button}>sign up now</div>
          </div>
          <div className={styles.planCardWrapper}>
            <div className={styles.planTitle}>standart</div>
            <div className={styles.planPrice}>
              <span className={styles.planPrice__sup}>$</span>
              <span className={styles.planPrice__main}>{activeEl * 8}.</span>
              <span className={styles.planPrice__leading}>99</span>
            </div>
            <div className={styles.planAdvantages}>
              <div className={styles.planAdvantages__el}><strong>3</strong> month trial period</div>
              <div className={styles.planAdvantages__el}><strong>2</strong> active clients</div>
            </div>
            <div className={styles.button}>sign up now</div>
          </div>
          <div className={styles.planCardWrapper}>
            <div className={styles.planTitle}>standart +</div>
            <div className={styles.planPrice}>
              <span className={styles.planPrice__sup}>$</span>
              <span className={styles.planPrice__main}>{activeEl * 13}.</span>
              <span className={styles.planPrice__leading}>99</span>
            </div>
            <div className={styles.planAdvantages}>
              <div className={styles.planAdvantages__el}><strong>3</strong> month trial period</div>
              <div className={styles.planAdvantages__el}><strong>2</strong> active clients</div>
            </div>
            <div className={styles.button}>sign up now</div>
          </div>
          <div className={styles.planCardWrapper}>
            <div className={styles.planTitle}>business</div>
            <div className={styles.planPrice}>
              <span className={styles.planPrice__sup}>$</span>
              <span className={styles.planPrice__main}>{activeEl * 48}.</span>
              <span className={styles.planPrice__leading}>99</span>
            </div>
            <div className={styles.planAdvantages}>
              <div className={styles.planAdvantages__el}><strong>3</strong> month trial period</div>
              <div className={styles.planAdvantages__el}><strong>2</strong> active clients</div>
            </div>
            <div className={styles.button}>sign up now</div>
          </div>
        </div>
        <div className={styles.bg} />
      </div>
    )
  }
}

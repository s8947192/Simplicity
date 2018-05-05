import React, { Component } from 'react'

import Button from 'universal/common/components/Button'
import styles from './subscriptionCard.scss'

export default class SubscriptionCard extends Component {

  constructor() {
    super()
    this.countdown = null
    this.state = {
      diff: 0
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { diff } = nextState
    if (diff === 0) {
      clearInterval(this.countdown)
      this.countdown = null
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdown)
  }

  componentWillReceiveProps(nextProps) {
    const currentDiscount = this.props.duration === 1 ? 0 : this.props.duration === 3 ? 0.1 : 0.2
    const nextDiscount = nextProps.duration === 1 ? 0 : nextProps.duration === 3 ? 0.1 : 0.2
    const currentPrice = Math.floor(Math.round(this.props.price * this.props.duration * (1 - currentDiscount)) - 0.01)
    const nextPrice = Math.floor(Math.round(nextProps.price * nextProps.duration * (1 - nextDiscount)) - 0.01)
    const diff = nextPrice - currentPrice
    if (diff !== 0) {
      this.setState({ diff: diff })
      if (!this.countdown) this.countdown = setInterval(this.timer, 1);
    }
  }

  timer = () => this.setState({ diff: this.state.diff > 0 ? this.state.diff - 1 : this.state.diff + 1 })

  render() {
    const {
      title,
      price,
      duration,
      isFree,
      numOfStudents,
      onClick
    } = this.props

    const {
      diff
    } = this.state

    const discount = duration === 1 ? 0 : duration === 3 ? 0.1 : 0.2
    const originalPrice = price * duration
    const totalPrice = Math.floor(Math.round(price * duration * (1 - discount)) - 0.01) - diff

    if (price === 0) {
      return (
        <div className={styles.planCardWrapper}>
          <div className={styles.planTitle}>{ title }</div>
          <div className={styles.planPrice}>
            <span className={styles.planPrice__sup}>$</span>
            <span className={styles.planPrice__main}>0</span>
          </div>
          <div className={styles.planAdvantages}>
            <div className={styles.planAdvantages__el}><strong>3</strong> month trial period</div>
            <div className={styles.planAdvantages__el}><strong>2</strong> active clients</div>
          </div>
          <Button title='sign up now' onClick={onClick} textCapitalize />
        </div>
      )
    }

    return (
      <div className={styles.planCardWrapper}>
        {
          duration > 1 && (
            <div className={styles.discountWrapper}>
              <div className={styles.discountValue}>${ originalPrice }</div>
              <div className={styles.discountLabel}>{discount * 100}% OFF</div>
            </div>
          )
        }
        <div className={styles.planTitle}>{ title }</div>
        <div className={styles.planPrice}>
          <span className={styles.planPrice__sup}>$</span>
          <span className={styles.planPrice__main}>{ totalPrice }</span>
          <span className={styles.planPrice__leading}>.99</span>
        </div>
        <div className={styles.planAdvantages}>
          <div className={styles.planAdvantages__el}><strong>{ numOfStudents }</strong> active clients</div>
        </div>
        <Button type='green' title='sign up now' onClick={onClick} textUppercase />
      </div>
    )
  }
}

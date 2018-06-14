import React, { Component } from 'react'

import Button from 'universal/common/components/Button'

import styles from './subscriptionCard.scss'

const discounts = {
  '1': 0,
  '3': 0.1,
  '6': 0.2
}

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
    const { duration: currentDuration, price: price } = this.props
    const { duration: nextDuration } = nextProps
    const diff = this.findPriceDifference(currentDuration, nextDuration, price)
    if (diff !== 0) {
      this.setState({ diff })
      if (!this.countdown) this.countdown = setInterval(this.timer, 20);
    }
  }

  findPriceDifference = (currentDuration, nextDuration, price) => {
    const currentDiscount  = 1 - discounts[currentDuration]
    const nextDiscount = 1 - discounts[nextDuration]
    const currentPrice = parseFloat(price, 2)
    const currentDiscountedPrice = Math.floor(Math.round(currentPrice * currentDuration * currentDiscount) - 0.01)
    const nextDiscountedPrice = Math.floor(Math.round(currentPrice * nextDuration * nextDiscount) - 0.01)
    return nextDiscountedPrice - currentDiscountedPrice
  }

  timer = () => {
    const { diff } = this.state
    if (diff > 10) return this.setState({ diff: 10 })
    if (diff > 0) return this.setState({ diff: diff - 1 })
    if (diff < -10) return this.setState({ diff: -10 })
    if (diff <= 0) return this.setState({ diff: diff + 1 })
  }

  render() {
    const {
      title,
      price,
      duration,
      numOfStudents,
      onClick
    } = this.props

    const {
      diff
    } = this.state

    const discount = 1 - discounts[duration]
    const totalPrice = Math.floor(Math.round(price * duration * discount) - 0.01) - diff

    if (price == 0) {
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
          discount !== 1 && (
            <div className={styles.discountWrapper}>
              <div className={styles.discountValue}>${ price * duration }</div>
              <div className={styles.discountLabel}>{ 100 - discount * 100 }% OFF</div>
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

import React, { Component } from 'react'
import cn from 'classnames'

import styles from './card.scss'

export default class Card extends Component {

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
    const { value: currentValue } = this.props
    const { value: nextValue } = nextProps
    const { duration: nextDuration, price: nextPrice } = nextProps
    const diff = Math.round(nextValue - currentValue)
    if (diff !== 0) {
      this.setState({ diff })
      if (!this.countdown) this.countdown = setInterval(this.timer, 50)
    }
  }

  timer = () => {
    const { diff } = this.state
    const { type } = this.props
    if (diff > 11) return this.setState({ diff: 10 })
    if (diff > 0) return this.setState({ diff: diff - 1 })
    if (diff < -11) return this.setState({ diff: -10 })
    if (diff <= 0) return this.setState({ diff: diff + 1 })
  }

  render () {
    const { diff } = this.state
    const {
      isShaded,
      isExpanded,
      isImproved,
      pattern,
      title,
      type,
      value
    } = this.props
    const nextValue = type === '%' ? value - diff : (value - diff).toFixed(2)
    return (
      <div className={cn(
        { [styles['card--shaded']]: isShaded },
        { [styles['card--expanded']]: isExpanded },
        { [styles['card--improved']]: isImproved },
        styles.card
      )}>
        <div className={styles.card__title}>{`${title}:`}</div>
        <div className={styles.card__text}>{ pattern.replace('%s', nextValue) }</div>
      </div>
    )
  }
}

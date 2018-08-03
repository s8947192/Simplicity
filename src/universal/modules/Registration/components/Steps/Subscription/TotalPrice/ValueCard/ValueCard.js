import React, { Component } from 'react'

export default class ValueCard extends Component {

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
    const diff = Math.floor(nextValue - currentValue)
    if (diff !== 0) {
      this.setState({ diff })
      if (!this.countdown) this.countdown = setInterval(this.timer, 50)
    }
  }

  timer = () => {
    const { diff } = this.state
    if (diff > 11) return this.setState({ diff: 10 })
    if (diff > 0) return this.setState({ diff: diff - 1 })
    if (diff < -11) return this.setState({ diff: -10 })
    if (diff <= 0) return this.setState({ diff: diff + 1 })
  }

  render () {
    const { diff } = this.state
    const { value, label } = this.props
    const nextValue = (value - diff).toFixed(2)
    return (
      <div>
        { label }
        { nextValue }
      </div>
    )
  }
}

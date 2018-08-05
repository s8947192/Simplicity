import React, { Component } from 'react'

const AnimatedMount = ({ unmountedStyle, mountedStyle }) => {
  return (Wrapped) => class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        style: unmountedStyle,
        isAvailable: false
      }
    }

    componentWillAppear(callback) {
      this.transitionTrigger(callback)
    }

    componentWillEnter(callback) {
      this.transitionTrigger(callback)
    }

    transitionTrigger = callback => {
      this.onTransitionEnd = callback
      setTimeout(() => {
        this.setState({
          style: mountedStyle,
          isAvailable: true
        })
      }, 10)
    }

    componentWillLeave(callback) {
      this.onTransitionEnd = callback
      this.setState({
        style: unmountedStyle,
        isAvailable: false
      })
    }

    render() {
      const { style, isAvailable } = this.state
      const { onClick } = this.props
      return (
        <div style={style} onTransitionEnd={this.onTransitionEnd} >
          <Wrapped { ...this.props } onClick={isAvailable ? onClick : undefined} />
        </div>
      )
    }
  }
}

export default AnimatedMount

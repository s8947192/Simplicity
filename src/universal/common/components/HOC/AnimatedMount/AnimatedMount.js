import React, { Component } from 'react'

const AnimatedMount = ({ unmountedStyle, mountedStyle }) => {
  return (Wrapped) => class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        style: unmountedStyle,
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
        })
      }, 10)
    }

    componentWillLeave(callback) {
      this.onTransitionEnd = callback
      this.setState({
        style: unmountedStyle,
      })
    }

    render() {
      return <div
        style={this.state.style}
        onTransitionEnd={this.onTransitionEnd}
      >
        <Wrapped { ...this.props } />
      </div>
    }
  }
}

export default AnimatedMount

import React, { Component } from 'react'
import { StripeProvider } from 'react-stripe-elements'
import { Elements } from 'react-stripe-elements'

import TailSpinDotted from 'universal/common/components/Preloaders/TailSpinDotted'

import styles from './stripeAsyncProvider.scss'

const stripeKey = 'pk_test_U5zfDnUYzX2WoMAMA8BEqNM9'

export default class StripeAsyncProvider extends Component {
  constructor() {
    super()
    this.state = {
      stripe: null
    }
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({ stripe: window.Stripe(stripeKey) })
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        this.setState({stripe: window.Stripe(stripeKey)})
      })
    }
  }

  render () {
    if (!this.state.stripe) {
      return (
        <div className={styles.loader}>
          <TailSpinDotted />
        </div>
      )
    }
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          { this.props.children }
        </Elements>
      </StripeProvider>
    )
  }
}

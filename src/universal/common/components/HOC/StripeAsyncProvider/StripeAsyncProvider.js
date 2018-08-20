import React, { Component } from 'react'
import { StripeProvider } from 'react-stripe-elements'
import { Elements } from 'react-stripe-elements'

export default class StripeAsyncProvider extends Component {
  constructor() {
    super()
    this.state = {
      stripe: null
    }
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_U5zfDnUYzX2WoMAMA8BEqNM9')})
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        this.setState({stripe: window.Stripe('pk_test_U5zfDnUYzX2WoMAMA8BEqNM9')})
      })
    }
  }

  render () {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          { this.props.children }
        </Elements>
      </StripeProvider>
    )
  }
}

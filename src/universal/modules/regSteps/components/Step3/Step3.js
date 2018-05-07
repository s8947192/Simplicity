import React, { Component } from 'react'

import styles from './step3.scss'

import Select from 'universal/common/components/Select'
import Controls from '../Controls/Controls'

export default class Step3 extends Component {
  constructor() {
    super()
    this.state = {
      duration: 1,
      subscription: null
    }
  }

  onComplete = () => {
    const { duration, subscription } = this.state
    this.props.completeStepThree(duration, subscription)
  }

  render() {
    const {
      subscriptions
    } = this.props
    const subscriptionsList = subscriptions.length && subscriptions.map(subscription => {
      return {
        text: `${subscription.title}: $${subscription.price}`,
        value: subscription.id
      }
    })
    return (
      <div>
        <Select
          label='Duration'
          style={{ marginBottom: 20, width: 200 }}
          options={[
            { text: '1 month', value: 1 },
            { text: '3 month', value: 3 },
            { text: '6 month', value: 6 }
          ]}
        />
        <Select
          label='Subscription'
          style={{ marginBottom: 20 }}
          options={subscriptionsList || []}
        />
        <Controls
          onCompleteClick={this.onComplete}
          isEnabled={true}
        />
      </div>
    )
  }
}

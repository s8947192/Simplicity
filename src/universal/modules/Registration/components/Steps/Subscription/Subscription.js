import React, { Component } from 'react'
import { List, Map } from 'immutable'

import TitleDevider from 'universal/common/components/TitleDevider'
import Button from 'universal/common/components/Button'

import InfoCard from './InfoCard'
import DurationOption from './DurationOption'
import TotalPrice from './TotalPrice'

import subscriptionImg from 'universal/assets/icons/registration/subscription.svg'
import stopwatchImg from 'universal/assets/icons/common/stopwatch.svg'
import bargainImg from 'universal/assets/icons/common/bargain.svg'

import styles from './subscription.scss'

import TailSpin from 'universal/common/components/Preloaders/TailSpin'

export default class Subscription extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeSubscription: props.activeSubscription || new Map(),
      subscriptionDuration: props.subscriptionDuration
    }
  }

  componentWillMount() {
    const { subscriptions, requestSubscriptions } = this.props
    if (!subscriptions.size) {
      requestSubscriptions()
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      activeSubscription,
      subscriptionDuration
    } = nextProps
    this.setState({
      activeSubscription,
      subscriptionDuration
    })
  }

  saveSubscriptionData = () => {
    const { activeSubscription, subscriptionDuration } = this.state
    const activeSubscriptionId = activeSubscription.get('id')
    this.props.saveSubscriptionData({ activeSubscriptionId, subscriptionDuration })
  }

  render() {

    const {
      subscriptions,
      selectSubscriptionDuration,
      isStepCompleted
    } = this.props

    const {
      activeSubscription,
      subscriptionDuration
    } = this.state

    if (!subscriptions.size) {
      return (
        <div className={styles.preloader}>
          <TailSpin size={50} />
          <div className={styles.preloader__desc}>loading subscriptions...</div>
        </div>
      )
    }
    return (
      <div className={styles.component}>
        <TitleDevider img={subscriptionImg} text='Select subscription plan' />
        <div className={styles.subscriptions}>
          {
            activeSubscription && subscriptions.toList().map((subscription, index) =>
              <InfoCard key={index}
                isActive={activeSubscription.get('id') === subscription.get('id')}
                onClick={() => this.setState({ activeSubscription: subscription})}
                title={subscription.get('title')}
                value={subscription.get('price')}
              />
            )
          }
        </div>
        {
          activeSubscription && activeSubscription.get('title') !== 'free' && (
            <div>
              <TitleDevider img={stopwatchImg} text='Select subscription duration' />
              <div className={styles.durationOptions}>
                <DurationOption
                  text='1 month'
                  textAfter='0%'
                  textAfterLabel='save'
                  isActive={subscriptionDuration === 1}
                  onClick={() => this.setState({ subscriptionDuration: 1 })}
                />
                <DurationOption
                  text='3 month'
                  textAfter='10%'
                  textAfterLabel='save'
                  isActive={subscriptionDuration === 3}
                  onClick={() => this.setState({ subscriptionDuration: 3 })}
                />
                <DurationOption
                  text='6 month'
                  textAfter='20%'
                  textAfterLabel='save'
                  isActive={subscriptionDuration === 6}
                  onClick={() => this.setState({ subscriptionDuration: 6 })}
                />
              </div>
              <TitleDevider img={bargainImg} text='Billing info' />
              <TotalPrice
                originalPrice={activeSubscription.get('price')}
                duration={subscriptionDuration}
              />
            </div>
          )
        }
        <div className={styles.buttonWrapper}>
          <Button
            disabled={!activeSubscription}
            onClick={this.saveSubscriptionData}
            value={isStepCompleted ? 'update' : 'complete'}
          />
        </div>
      </div>
    )
  }
}

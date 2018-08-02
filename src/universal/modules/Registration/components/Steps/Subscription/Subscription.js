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
  componentWillMount() {
    const { subscriptions, requestSubscriptions } = this.props
    if (!subscriptions.size) {
      requestSubscriptions()
    }
  }
  render() {
    const {
      subscriptions,
      activeSubscriptionId,
      setActiveSubscriptionId
    } = this.props
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
            subscriptions.toList().map((subscription, index) =>
              <InfoCard key={index}
                isActive={activeSubscriptionId === subscription.get('id')}
                onClick={() => setActiveSubscriptionId(subscription.get('id'))}
                title={subscription.get('title')}
                value={subscription.get('price')}
              />
            )
          }
        </div>
        <TitleDevider img={stopwatchImg} text='Select subscription duration' />
        <div className={styles.durationOptions}>
          <DurationOption
            text='1 month'
            textAfter='0%'
            textAfterLabel='save'
            onClick={() => console.log('CLICK')}
          />
          <DurationOption
            isActive
            text='3 month'
            textAfter='10%'
            textAfterLabel='save'
            onClick={() => console.log('CLICK')}
          />
          <DurationOption
            text='6 month'
            textAfter='20%'
            textAfterLabel='save'
            onClick={() => console.log('CLICK')}
          />
        </div>
        <TitleDevider img={bargainImg} text='Billing info' />
        <TotalPrice originalPrice={248.99} discount={0.2} />
        <div className={styles.buttonWrapper}>
          <Button onClick={() => console.log('CLICK')} value='complete' />
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

import SubscriptionCard from './SubscriptionCard/SubscriptionCard'
import Preloader from 'universal/common/components/Preloader'

import styles from './subscriptionCards.scss'

export default class SubscriptionCards extends Component {
  componentWillMount() {
    this.props.requestSubscriptions()
  }

  onSelectPlan = id => {
    const { selectPlanWithDuration, duration, history } = this.props
    selectPlanWithDuration(id, duration)
    history.push('/registration')
  }

  render() {
    const {
      subscriptions,
      duration
    } = this.props
    return (
      <div className={styles.planCardsWrapper}>
        {
          !subscriptions.length && <Preloader color='white' />
        }
        {
          subscriptions.map(subscription => (
            <SubscriptionCard
              key={subscription.id}
              title={subscription.title}
              price={subscription.price}
              durationDiscounts={subscription.durationDiscounts}
              numOfStudents={subscription.max_clients}
              onClick={() => this.onSelectPlan(subscription.id)}
              duration={duration}
            />
          ))
        }
      </div>
    )
  }
}

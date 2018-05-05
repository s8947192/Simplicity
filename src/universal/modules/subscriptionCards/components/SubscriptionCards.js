import React, { Component } from 'react'

import SubscriptionCard from './SubscriptionCard/SubscriptionCard'
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
          subscriptions.map(plan => (
            <SubscriptionCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              numOfStudents={plan.students}
              onClick={() => this.onSelectPlan(plan.id)}
              duration={duration}
            />
          ))
        }
      </div>
    )
  }
}

import React, { Component } from 'react'

import PlanCard from './PlanCard/PlanCard'
import styles from './planCards.scss'

export default class PlanCards extends Component {
  componentWillMount() {
    this.props.requestSubscriptionPlans()
  }

  onRedirectClick = () => this.props.history.push('/registration')

  render() {
    const {
      subscriptionPlans,
      planDuration
    } = this.props
    return (
      <div className={styles.planCardsWrapper}>
        {
          subscriptionPlans.map(plan => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              numOfStudents={plan.students}
              duration={planDuration}
              onClick={this.onRedirectClick}
            />
          ))
        }
      </div>
    )
  }
}

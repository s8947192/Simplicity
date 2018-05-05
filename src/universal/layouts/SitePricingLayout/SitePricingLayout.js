import React, { Component } from 'react'
import cn from 'classnames'
import styles from './sitePricingLayout.scss'

import SubscriptionSwitcherContainer from 'universal/modules/subscriptionSwitcher/containers/SubscriptionSwitcherContainer'
import SubscriptionCardsContainer from 'universal/modules/subscriptionCards/containers/SubscriptionCardsContainer'

const SitePricingLayout = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Subscription Options</div>
    <div className={styles.desc}>You are currently on FREE plan - Upgrade, downgrade, or cancel at any time</div>
    <div className={styles.planWrapper}>
      <SubscriptionSwitcherContainer />
    </div>
    <SubscriptionCardsContainer />
    <div className={styles.bg} />
  </div>
)

export default SitePricingLayout

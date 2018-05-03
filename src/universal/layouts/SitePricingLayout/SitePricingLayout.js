import React, { Component } from 'react'
import cn from 'classnames'
import styles from './sitePricingLayout.scss'

import PlanDurationSwitcherContainer from 'universal/modules/planDurationSwitcher/containers/PlanDurationSwitcherContainer'
import PlanCardsContainer from 'universal/modules/planCards/containers/PlanCardsContainer'

const SitePricingLayout = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Subscription Options</div>
    <div className={styles.desc}>You are currently on FREE plan - Upgrade, downgrade, or cancel at any time</div>
    <div className={styles.planWrapper}>
      <PlanDurationSwitcherContainer />
    </div>
    <PlanCardsContainer />
    <div className={styles.bg} />
  </div>
)

export default SitePricingLayout

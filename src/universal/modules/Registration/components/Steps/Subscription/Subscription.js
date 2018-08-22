import React, { Component } from 'react'
import cn from 'classnames'

import TailSpinDotted from 'universal/common/components/Preloaders/TailSpinDotted'
import Button from 'universal/common/components/Button'
import SubscriptionCard from './SubscriptionCard'
import DurationCard from './DurationCard'
import TotalPrice from './TotalPrice'

import stopWatchImg from 'universal/assets/icons/common/stopwatch.svg'

import styles from './subscription.scss'

export default class Subscriptions extends Component {
  componentWillMount() {
    const { subscriptions, requestSubscriptions } = this.props
    if (!subscriptions.size) {
      requestSubscriptions()
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      activeSubscriptionId: nextProps.selectedSubscriptionId,
      activePlanId: nextProps.selectedSubscriptionPlanId,
      selectedSubscriptionPlans: nextProps.selectedSubscriptionPlans
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      activeSubscriptionId: props.selectedSubscriptionId,
      activePlanId: props.selectedSubscriptionPlanId,
      selectedSubscriptionPlans: props.selectedSubscriptionPlans
    }
  }

  setActiveSubscriptionPlanId = id => this.setState({ activePlanId: id })
  saveSubscriptionData = () => {
    const { activeSubscriptionId, activePlanId } = this.state
    const { saveSubscriptionData } = this.props
    saveSubscriptionData({ activeSubscriptionId, activePlanId })
  }
  changeSubscription = subscription => {
    const defaultPlan = subscription.get('name') === 'free'
      ? subscription.getIn(['plans', 0])
      : subscription.get('plans').find(plan => plan.get('nickname') === 'monthly')
    this.setState({
      activeSubscriptionId: subscription.get('id'),
      activePlanId: defaultPlan.get('id'),
      selectedSubscriptionPlans: subscription.get('plans')
    })
  }

  render() {
    const {
      subscriptions,
      isStepCompleted
    } = this.props
    const {
      activeSubscriptionId,
      activePlanId,
      selectedSubscriptionPlans
    } = this.state
    if (!subscriptions.size || !selectedSubscriptionPlans) {
      return (
        <div className={styles.loader}>
          <TailSpinDotted />
        </div>
      )
    }
    const activeSubscription = subscriptions.find(subscription => subscription.get('id') === activeSubscriptionId)
    const activePlan = activeSubscription.get('plans').find(plan => plan.get('id') === activePlanId)
    return (
      <div className={styles.wrapper}>
        <div className={styles.subscriptions}>
          {
            subscriptions.valueSeq().map((subscription, index) => {
              const monthlyPlan = subscription.get('plans').find(plan => plan.get('nickname') === 'monthly')
              return (
                <SubscriptionCard
                  key={index}
                  title={subscription.get('name')}
                  desc={`${subscription.getIn(['metadata', 'clients'])} clients`}
                  price={monthlyPlan.get('amount') / 100}
                  isActive={activeSubscriptionId === subscription.get('id')}
                  onClick={() => this.changeSubscription(subscription)}
                />
              )
            })
          }
        </div>
        {
          activeSubscription.get('name') !== 'free' && (
            <div className={styles.durations}>
              {
                selectedSubscriptionPlans.valueSeq().map((plan, index) => {
                  const discount = plan.getIn(['metadata', 'discount'])
                  const interval = plan.get('interval') === 'year' ? 12 : 1
                  const nickname = plan.get('nickname')
                  const price = plan.get('amount') / 100 / plan.get('interval_count') / interval
                  const discountedPrice = price - price * discount
                  const desc = ['monthly', 'yearly'].some(field => nickname === field)
                    ? 'automatic billing'
                    : 'stops when expired'

                  return (
                    <DurationCard
                      key={index}
                      title={plan.get('nickname')}
                      desc={desc}
                      price={discountedPrice}
                      discount={discount}
                      isActive={activePlanId === plan.get('id')}
                      onClick={() => this.setActiveSubscriptionPlanId(plan.get('id'))}
                    />
                  )
                })
              }
              <TotalPrice
                originalPrice={activePlan.get('amount') / 100}
                discount={activePlan.getIn(['metadata', 'discount'])}
              />
            </div>
          )
        }
        <div className={styles.buttonWrapper}>
          <Button
            onClick={this.saveSubscriptionData}
            value={isStepCompleted ? 'update' : 'complete'}
          />
        </div>
      </div>
    )
  }
}

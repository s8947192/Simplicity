import { createSelector } from 'reselect'

import { getSubscriptions } from 'universal/common/selectors/entities'

export const getCompletedSteps = state => state.getIn(['registration', 'completedSteps'])
export const getActiveStep = state => state.getIn(['registration', 'activeStep'])
export const getActiveSubscriptionId = state => state.getIn(['registration', 'activeSubscriptionId'])
export const getSubscriptionDuration = state => state.getIn(['registration', 'subscriptionDuration'])

export const getActiveSubscription = createSelector(
  [getSubscriptions, getActiveSubscriptionId],
  (subscriptions, id) => {
    if (!subscriptions.size || !id) return
    return subscriptions.find(subscription => subscription.get('id') === id)
  }
)

export const isStepCompleted = createSelector(
  [getCompletedSteps, (_, stepToSearch) => stepToSearch],
  (steps, step) => steps.has(step)
)

import { createSelector } from 'reselect'
import { formValueSelector } from 'redux-form'

import { getSubscriptionsArray } from 'universal/common/selectors/entities'
const formValues = formValueSelector('subscriptionStep')

// StepsNav
export const getCompletedSteps = state => state.getIn(['registration', 'completedSteps'])

// AccountStep
export const getActiveStep = state => state.getIn(['registration', 'activeStep'])
export const getEmail = state => state.getIn(['registration', 'email'])
export const getUsername = state => state.getIn(['registration', 'username'])
export const getPassword = state => state.getIn(['registration', 'password'])
export const getRepeatPassword = state => state.getIn(['registration', 'repeatPassword'])

// SubscriptionStep
export const getSelectedDuration = state => state.getIn(['registration', 'selectedDuration'])
export const getSelectedSubscription = state => state.getIn(['registration', 'selectedSubscription'])
const getSelectedSubscriptionId = state => state.getIn(['registration', 'selectedSubscription'])
const getFormSubscriptionId = state => formValues(state, 'selectedSubscription')

export const getSelectedSubscriptionPrice = createSelector(
  [getSelectedSubscription],
  subscription => {
    if (!subscription) return 0
    return subscription.price
  }
)

export const getInputFormattedSubscriptions = createSelector(
  [getSubscriptionsArray],
  subscriptions => subscriptions.map(el => ({
    value: el.id,
    label: `${el.title}: $${el.price}`
  }))
)

export const getIsSelectedSubscriptionFree = createSelector(
  [getSelectedSubscriptionId, getFormSubscriptionId, getSubscriptionsArray],
  (selectedSubscriptionId, formSubscriptionId, subscriptions) => {
    if (formSubscriptionId || selectedSubscriptionId) {
      const subscriptionId = formSubscriptionId ? formSubscriptionId : selectedSubscriptionId
      const currentSubscription = subscriptions.find(subscription => subscription.id === subscriptionId)
      return currentSubscription.title === 'free'
    }
    return true
  }
)

import { createSelector } from 'reselect'
import { formValueSelector } from 'redux-form'

const formValues = formValueSelector('subscriptionStep')

export const getSubscriptions = state => state.subscriptions.get('subscriptions')
export const getSelectedSubscriptionId = state => state.registration.get('selectedSubscription')

const getFormSubscriptionId = state => formValues(state, 'selectedSubscription')

const getSelectedSubscription = createSelector(
  [getSubscriptions, getFormSubscriptionId],
  (subscriptions, id) => subscriptions.find(subscription => subscription.id === id)
)

export const getSelectedSubscriptionPrice = createSelector(
  [getSelectedSubscription],
  subscription => {
    if (!subscription) return 0
    return subscription.price
  }
)

export const getInputFormattedSubscriptions = createSelector(
  [getSubscriptions],
  subscriptions => subscriptions.map(el => ({
    value: el.id,
    label: `${el.title}: $${el.price}`
  }))
)

export const getIsSelectedSubscriptionFree = createSelector(
  [getSelectedSubscriptionId, getFormSubscriptionId, getSubscriptions],
  (selectedSubscriptionId, formSubscriptionId, subscriptions) => {
    if (formSubscriptionId || selectedSubscriptionId) {
      const subscriptionId = formSubscriptionId ? formSubscriptionId : selectedSubscriptionId
      const currentSubscription = subscriptions.find(subscription => subscription.id === subscriptionId)
      return currentSubscription.title === 'free'
    }
    return true
  }
)

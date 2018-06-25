import { createSelector } from 'reselect'
import { formValueSelector } from 'redux-form'

const formValues = formValueSelector('regStep2')

export const getSubscriptions = state => state.subscriptions.get('subscriptions')
export const getInitialSelectedSubscriptionId = state => state.subscriptions.get('initialSelectedSubscriptionId')

const getSelectedSubscriptionId = state => formValues(state, 'selectedSubscription')
const getSelectedSubscription = createSelector(
  [getSubscriptions, getSelectedSubscriptionId],
  (subscriptions, id) => subscriptions.find(subscription => subscription.id === id)
)

export const getSelectedSubscriptionPrice = createSelector(
  [getSelectedSubscription],
  subscription => {
    if (!subscription) return null
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
  [getInitialSelectedSubscriptionId, getSelectedSubscriptionId, getSubscriptions],
  (stateSubscriptionId, formSubscriptionId, subscriptions) => {
    if (formSubscriptionId) {
      const currentSubscription = subscriptions.find(el => el.id === formSubscriptionId)
      return currentSubscription.title === 'free'
    }
    if (stateSubscriptionId) {
      const currentSubscription = subscriptions.find(el => el.id === stateSubscriptionId)
      return currentSubscription.title === 'free'
    }
    return true
  }
)

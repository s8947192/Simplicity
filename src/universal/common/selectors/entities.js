import { createSelector } from 'reselect'

export const getLanguages = state => state.getIn(['entities', 'languages']) // TODO remove
export const getCurrencies = state => state.getIn(['entities', 'currencies']) // TODO remove
export const getSubscriptions = state => state.getIn(['entities', 'subscriptions'])

const orderedSort = (c, n) => {
  const cValue = c.getIn(['metadata', 'position'])
  const nValue = n.getIn(['metadata', 'position'])
  if (cValue < nValue) return -1
  if (cValue > nValue) return 1
  return 0
}

export const getOrderedSubscriptions = createSelector(
  [getSubscriptions],
  (subscriptions) => {
    if (!subscriptions) return
    return subscriptions
      .sort(orderedSort)
      .map(subscription => subscription.updateIn(['plans'], plans => plans.sort(orderedSort)))
  }
)

export const getCurrentSubscriptionPlans = createSelector(
  [getOrderedSubscriptions, (_, selectedSubscriptionId) => selectedSubscriptionId],
  (subscriptions, id) => {
    if (!subscriptions || !id) return
    return subscriptions
      .find(subscription => subscription.get('id') === id)
      .get('plans')
  }
)

import { createSelector } from 'reselect'
import { toJS } from 'immutable'

export const getSubscriptions = state => state.getIn(['entities', 'subscriptions'])
export const getLanguages = state => state.getIn(['entities', 'languages'])
export const getCurrencies = state => state.getIn(['entities', 'currencies'])

export const getSubscriptionsArray = createSelector(
  [getSubscriptions],
  subscriptions => Object.values(subscriptions.toJS())
)

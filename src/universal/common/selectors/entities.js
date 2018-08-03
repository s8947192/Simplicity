import { createSelector } from 'reselect'

export const getSubscriptions = state => state.getIn(['entities', 'subscriptions'])

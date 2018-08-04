import { createSelector } from 'reselect'

export const getSubscriptions = state => state.getIn(['entities', 'subscriptions'])
export const getLanguages = state => state.getIn(['entities', 'languages'])
export const getCurrencies = state => state.getIn(['entities', 'currencies'])

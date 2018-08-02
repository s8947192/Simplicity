import { createSelector } from 'reselect'
import { toJS } from 'immutable'

export const getSubscriptions = state => state.getIn(['entities', 'subscriptions'])

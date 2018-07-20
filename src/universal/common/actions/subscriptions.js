import { createTypes, async, actionCreator } from 'redux-action-creator'

export const types = createTypes([
  'SELECT_DURATION',
  ...async('REQUEST_SUBSCRIPTIONS')
], 'SUBSCRIPTION')

export const actions = {
  selectDuration: actionCreator(types.SELECT_DURATION, 'duration'),
  requestSubscriptions: actionCreator(types.REQUEST_SUBSCRIPTIONS),
  requestSubscriptionsSuccess: actionCreator(types.REQUEST_SUBSCRIPTIONS_SUCCESS, 'data'),
  requestSubscriptionsFail: actionCreator(types.REQUEST_SUBSCRIPTIONS_FAIL, 'error'),
}

import { createTypes, async, actionCreator } from 'redux-action-creator'
import createRequestAction from 'universal/utils/createRequestAction'

export const types = createTypes([
  ...async('REQUEST_SUBSCRIPTIONS')
], 'ENTITIES')

export const actions = {
  requestSubscriptions: createRequestAction(types.REQUEST_SUBSCRIPTIONS)
}

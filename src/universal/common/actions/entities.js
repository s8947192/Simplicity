import { createTypes, async, actionCreator } from 'redux-action-creator'
import createRequestAction from 'universal/utils/createRequestAction'

export const types = createTypes([
  ...async('REQUEST_SUBSCRIPTIONS'),
  ...async('REQUEST_LANGUAGES'),
  ...async('REQUEST_CURRENCIES')
], 'ENTITIES')

export const actions = {
  requestSubscriptions: createRequestAction(types.REQUEST_SUBSCRIPTIONS),
  requestLanguages: createRequestAction(types.REQUEST_LANGUAGES),
  requestCurrencies: createRequestAction(types.REQUEST_CURRENCIES)
}

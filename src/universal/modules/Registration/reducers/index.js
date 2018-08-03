import typeToReducer from 'type-to-reducer'
import { fromJS, Map, OrderedSet } from 'immutable'

import { types } from '../actions'

const initialState = fromJS({
  completedSteps: OrderedSet(),
  activeStep: 0,
  firstName: null,
  lastName: null,
  nickName: null,
  email: null,
  password: null,
  activeSubscriptionId: null,
  subscriptionDuration: 1,
  systemLanguage: null,
  systemCurrency: null,
  cardNumber: null,
  nameOnCard: null,
  cvcNumber: null,
  cardExpirity: null,
  savePaymentMethod: false,
  agreeWithTermsOfPolices: false,
  agreeToBuySubscription: false
})

export default typeToReducer({
  [types.UPDATE_COMPLETED_STEPS]: (state, { payload }) => state
    .updateIn(['completedSteps'], completedSteps => completedSteps.add(payload.completedStep)),
  [types.SET_ACTIVE_STEP]: (state, { payload }) => state.set('activeStep', payload.activeStep),
  [types.SET_ACTIVE_SUBSCRIPTION_ID]: (state, { payload }) => state.set('activeSubscriptionId', payload.subscriptionId),
  [types.SAVE_SUBSCRIPTION_DATA_SUCCESS]: (state, { payload }) => state
    .set('activeSubscriptionId', payload.activeSubscriptionId)
    .set('subscriptionDuration', payload.subscriptionDuration),
  [types.SAVE_ACCOUNT_DATA_SUCCESS]: (state, { payload }) => state
    .set('firstName', payload.get('firstName'))
    .set('lastName', payload.get('lastName'))
    .set('nickName', payload.get('nickName'))
    .set('email', payload.get('email'))
    .set('password', payload.get('password'))
}, initialState)

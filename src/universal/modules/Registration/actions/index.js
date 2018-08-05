import { createTypes, async, actionCreator } from 'redux-action-creator'
import createRequestAction from 'universal/utils/createRequestAction'

export const types = createTypes([
  'UPDATE_COMPLETED_STEPS',
  'SET_ACTIVE_STEP',
  'SET_ACTIVE_SUBSCRIPTION_ID',
  'SET_DEFAULT_LANGUAGE_ID',
  'SET_DEFAULT_CURRENCY_ID',
  'TOGGLE_STRIPE_TOKEN_PENDING',
  'SHOULD_REMEMBER_PAYMENT_METHOD',

  ...async('SAVE_SUBSCRIPTION_DATA'),
  ...async('SAVE_ACCOUNT_DATA'),
  ...async('REQUEST_MAIN_SETTINGS'),
  ...async('SAVE_MAIN_SETTINGS'),
  ...async('SAVE_PAYMENT_DATA'),
], 'REGISTRATION')

export const actions = {
  updateCompletedSteps: actionCreator(types.UPDATE_COMPLETED_STEPS, 'completedStep'),
  setActiveStep: actionCreator(types.SET_ACTIVE_STEP, 'activeStep'),
  setActiveSubscriptionId: actionCreator(types.SET_ACTIVE_SUBSCRIPTION_ID, 'subscriptionId'),
  setDefaultLanguageId: actionCreator(types.SET_DEFAULT_LANGUAGE_ID, 'languageId'),
  setDefaultCurrencyId: actionCreator(types.SET_DEFAULT_CURRENCY_ID, 'currencyId'),
  toggleStripeTokenPending: actionCreator(types.TOGGLE_STRIPE_TOKEN_PENDING, 'isPending'),
  shouldRememberPaymentMethod: actionCreator(types.SHOULD_REMEMBER_PAYMENT_METHOD, 'isRemember'),

  saveSubscriptionData: createRequestAction(types.SAVE_SUBSCRIPTION_DATA),
  saveAccountData: createRequestAction(types.SAVE_ACCOUNT_DATA),
  requestMainSettings: createRequestAction(types.REQUEST_MAIN_SETTINGS),
  saveMainSettings: createRequestAction(types.SAVE_MAIN_SETTINGS),
  savePaymentData: createRequestAction(types.SAVE_PAYMENT_DATA)
}

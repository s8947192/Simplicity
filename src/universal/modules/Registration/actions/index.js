import { createTypes, async, actionCreator } from 'redux-action-creator'
import createRequestAction from 'universal/utils/createRequestAction'

export const types = createTypes([
  'UPDATE_COMPLETED_STEPS',
  'SET_ACTIVE_STEP',
  'SET_ACTIVE_SUBSCRIPTION_ID',
  'SET_ACTIVE_SUBSCRIPTION_PLAN_ID',
  'SHOW_PENDING_MESSAGE',

  ...async('SAVE_SUBSCRIPTION_DATA'),
  ...async('SAVE_ACCOUNT_DATA'),
  ...async('SAVE_PAYMENT_DATA'),
  ...async('REGISTRATE')
], 'REGISTRATION')

export const actions = {
  updateCompletedSteps: actionCreator(types.UPDATE_COMPLETED_STEPS, 'completedStep'),
  setActiveStep: actionCreator(types.SET_ACTIVE_STEP, 'activeStep'),
  setActiveSubscriptionId: actionCreator(types.SET_ACTIVE_SUBSCRIPTION_ID, 'subscriptionId'),
  setActiveSubscriptionPlanId: actionCreator(types.SET_ACTIVE_SUBSCRIPTION_PLAN_ID, 'planId'),
  showPendingMessage: actionCreator(types.SHOW_PENDING_MESSAGE, 'message'),

  saveSubscriptionData: createRequestAction(types.SAVE_SUBSCRIPTION_DATA),
  saveAccountData: createRequestAction(types.SAVE_ACCOUNT_DATA),
  savePaymentData: createRequestAction(types.SAVE_PAYMENT_DATA),
  registrate: createRequestAction(types.REGISTRATE)
}

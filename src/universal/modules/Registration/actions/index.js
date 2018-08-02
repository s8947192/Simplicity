import { createTypes, async, actionCreator } from 'redux-action-creator'
import createRequestAction from 'universal/utils/createRequestAction'

export const types = createTypes([
  'UPDATE_COMPLETED_STEPS',
  'SET_ACTIVE_STEP',
  'SET_ACTIVE_SUBSCRIPTION_ID',
  ...async('SAVE_ACCOUNT_DATA'),
], 'REGISTRATION')

export const actions = {
  updateCompletedSteps: actionCreator(types.UPDATE_COMPLETED_STEPS, 'completedStep'),
  setActiveStep: actionCreator(types.SET_ACTIVE_STEP, 'activeStep'),
  saveAccountData: createRequestAction(types.SAVE_ACCOUNT_DATA),
  setActiveSubscriptionId: actionCreator(types.SET_ACTIVE_SUBSCRIPTION_ID, 'subscriptionId')
}

import { createTypes, async, actionCreator } from 'redux-action-creator'

export const types = createTypes([
  'SET_NEXT_STEP',
  ...async('COMPLETE_STEP_ONE')
], 'REGISTRATION')

export const actions = {
  setNextStep: actionCreator(types.SET_NEXT_STEP, 'nextStep'),
  completeStepOne: actionCreator(types.COMPLETE_STEP_ONE, 'data'),
  completeStepOneSuccess: actionCreator(types.COMPLETE_STEP_ONE_SUCCESS, 'data'),
}

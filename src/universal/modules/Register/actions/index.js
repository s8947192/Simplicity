import { createTypes, async, actionCreator } from 'redux-action-creator'

export const types = createTypes([
  'SKIP_STEP',
  'SET_NEXT_ACTIVE_STEP',
  'SWITCH_TO_STEP',
  'UPDATE_COMPLETED_STEPS',
  ...async('COMPLETE_STEP'),
], 'REGISTRATION')

export const actions = {
  skipStep: actionCreator(types.SKIP_STEP, 'currentStep'),
  setNextActiveStep: actionCreator(types.SET_NEXT_ACTIVE_STEP, 'nextActiveStep'),
  switchToStep: actionCreator(types.SWITCH_TO_STEP, 'nextStep'),
  updateCompletedSteps: actionCreator(types.UPDATE_COMPLETED_STEPS, 'currentStep'),
  completeStep: actionCreator(types.COMPLETE_STEP, 'data'),
  completeStepSuccess: actionCreator(types.COMPLETE_STEP_SUCCESS, 'data')
}

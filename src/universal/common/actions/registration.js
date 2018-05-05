export const SELECT_PLAN_WITH_DURATION = 'SELECT_PLAN_WITH_DURATION'
export const SET_ACTIVE_STEP = 'SET_ACTIVE_STEP'
export const COMPLETE_STEP_ONE = 'COMPLETE_STEP_ONE'
export const COMPLETE_STEP_ONE_PENDING = 'COMPLETE_STEP_ONE_PENDING'
export const COMPLETE_STEP_ONE_REJECTED = 'COMPLETE_STEP_ONE_REJECTED'
export const COMPLETE_STEP_ONE_FULFILLED = 'COMPLETE_STEP_ONE_FULFILLED'

export const selectPlanWithDuration = (id, duration) => ({ type: SELECT_PLAN_WITH_DURATION, id, duration })
export const setActiveStep = step => ({ type: SET_ACTIVE_STEP, step })
export const completeStepOne = (email, password) => ({ type: COMPLETE_STEP_ONE, email, password })
export const completeStepOnePending = () => ({ type: COMPLETE_STEP_ONE_PENDING })
export const completeStepOneFulfilled = (newCompletedSteps, email, password) => ({
  type: COMPLETE_STEP_ONE_FULFILLED, newCompletedSteps, email, password
})
export const completeStepOneRejected = () => ({ type: COMPLETE_STEP_ONE_REJECTED })

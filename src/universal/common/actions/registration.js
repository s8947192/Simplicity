export const SELECT_PLAN_WITH_DURATION = 'SELECT_PLAN_WITH_DURATION'
export const SET_ACTIVE_STEP = 'SET_ACTIVE_STEP'
export const COMPLETE_STEP_ONE = 'COMPLETE_STEP_ONE'
export const COMPLETE_STEP_ONE_PENDING = 'COMPLETE_STEP_ONE_PENDING'
export const COMPLETE_STEP_ONE_REJECTED = 'COMPLETE_STEP_ONE_REJECTED'
export const COMPLETE_STEP_ONE_FULFILLED = 'COMPLETE_STEP_ONE_FULFILLED'
export const SET_ALREADY_TAKEN_EMAIL = 'SET_ALREADY_TAKEN_EMAIL'
export const CLEAR_ALREADY_TAKEN_EMAIL = 'CLEAR_ALREADY_TAKEN_EMAIL'
export const COMPLETE_STEP_TWO = 'COMPLETE_STEP_TWO'
export const COMPLETE_STEP_TWO_FULFILLED = 'COMPLETE_STEP_TWO_FULFILLED'
export const UPDATE_COMPLETED_STEPS = 'UPDATE_COMPLETED_STEPS'

export const selectPlanWithDuration = (id, duration) =>
  ({ type: SELECT_PLAN_WITH_DURATION, id, duration })

export const setActiveStep = step =>
  ({ type: SET_ACTIVE_STEP, step })

export const completeStepOne = (email, password) =>
  ({ type: COMPLETE_STEP_ONE, email, password })

export const completeStepOnePending = () =>
  ({ type: COMPLETE_STEP_ONE_PENDING })

export const completeStepOneRejected = () =>
  ({ type: COMPLETE_STEP_ONE_REJECTED })

export const setAlreadyTakenEmail = email =>
  ({ type: SET_ALREADY_TAKEN_EMAIL, email })

export const clearAlreadyTakenEmail = () =>
  ({ type: CLEAR_ALREADY_TAKEN_EMAIL })

export const updateCompletedSteps = completedSteps =>
  ({ type: UPDATE_COMPLETED_STEPS, completedSteps })

export const completeStepOneFulfilled = (email, password) => ({
  type: COMPLETE_STEP_ONE_FULFILLED, email, password
})

export const completeStepTwo = (firstName, lastName, systemLanguage) => ({
  type: COMPLETE_STEP_TWO, firstName, lastName, systemLanguage
})

export const completeStepTwoFulfilled = (firstName, lastName, systemLanguage) => ({
  type: COMPLETE_STEP_TWO_FULFILLED, firstName, lastName, systemLanguage
})

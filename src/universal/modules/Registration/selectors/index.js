import { createSelector } from 'reselect'

// STEP 0 (Account)
export const getCompletedSteps = state => state.getIn(['registration', 'completedSteps'])
export const getActiveStep = state => state.getIn(['registration', 'activeStep'])

export const isStepCompleted = createSelector(
  [getCompletedSteps, (_, stepToSearch) => stepToSearch],
  (steps, step) => steps.has(step)
)

// STEP 1 (Subscription)
export const getActiveSubscriptionId = state => state.getIn(['registration', 'activeSubscriptionId'])

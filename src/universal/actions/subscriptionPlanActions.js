export const REQUEST_SUBSCRIPTION_PLANS = 'REQUEST_SUBSCRIPTION_PLANS'
export const REQUEST_SUBSCRIPTION_PLANS_PENDING = 'REQUEST_SUBSCRIPTION_PLANS_PENDING'
export const REQUEST_SUBSCRIPTION_PLANS_REJECTED = 'REQUEST_SUBSCRIPTION_PLANS_REJECTED'
export const REQUEST_SUBSCRIPTION_PLANS_FULFILLED = 'REQUEST_SUBSCRIPTION_PLANS_FULFILLED'

export const SET_DURATION = 'SET_DURATION'

export const requestSubscriptionPlans = () => ({ type: REQUEST_SUBSCRIPTION_PLANS })
export const requestSubscriptionPlansPending = () => ({ type: REQUEST_SUBSCRIPTION_PLANS_PENDING })
export const requestSubscriptionPlansRejected = () => ({ type: REQUEST_SUBSCRIPTION_PLANS_REJECTED })
export const requestSubscriptionPlansFulfilled = plans => ({ type: REQUEST_SUBSCRIPTION_PLANS_FULFILLED, plans })

export const setDuration = duration => ({ type: SET_DURATION, duration })

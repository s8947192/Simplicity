export const REQUEST_SUBSCRIPTIONS = 'REQUEST_SUBSCRIPTIONS'
export const REQUEST_SUBSCRIPTIONS_PENDING = 'REQUEST_SUBSCRIPTIONS_PENDING'
export const REQUEST_SUBSCRIPTIONS_REJECTED = 'REQUEST_SUBSCRIPTIONS_REJECTED'
export const REQUEST_SUBSCRIPTIONS_FULFILLED = 'REQUEST_SUBSCRIPTIONS_FULFILLED'
export const SELECT_DURATION = 'SELECT_DURATION'

export const requestSubscriptions = () => ({ type: REQUEST_SUBSCRIPTIONS })
export const requestSubscriptionsPending = () => ({ type: REQUEST_SUBSCRIPTIONS_PENDING })
export const requestSubscriptionsRejected = () => ({ type: REQUEST_SUBSCRIPTIONS_REJECTED })
export const requestSubscriptionsFulfilled = subscriptions => ({ type: REQUEST_SUBSCRIPTIONS_FULFILLED, subscriptions })
export const selectDuration = duration => ({ type: SELECT_DURATION, duration })

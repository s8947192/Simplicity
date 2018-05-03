import typeToReducer from 'type-to-reducer'

import { REQUEST_SUBSCRIPTION_PLANS, SET_DURATION } from 'universal/actions/subscriptionPlanActions'

const initialState = {
  duration: 1,
  price: null,
  isPending: false,
  error: null,
  plansList: []
}

export default typeToReducer({
  [REQUEST_SUBSCRIPTION_PLANS]: {
    PENDING: () => ({
      ...state,
      isPending: true
    }),
    FULFILLED: (state, action) => ({
      ...state,
      isPending: false,
      plansList: action.plans,
      error: null
    }),
    REJECTED: (state, action) => ({
      ...state,
      error: action.message,
      isPending: false
    })
  },
  [SET_DURATION]: (state, action) => ({
    ...state,
    duration: action.duration
  })
}, initialState)

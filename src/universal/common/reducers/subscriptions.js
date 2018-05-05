import typeToReducer from 'type-to-reducer'

import { REQUEST_SUBSCRIPTIONS, SELECT_DURATION } from 'universal/common/actions/subscriptions'

const initialState = {
  subscriptions: [],
  duration: 1,
  isPending: false,
  error: null
}

export default typeToReducer({
  [REQUEST_SUBSCRIPTIONS]: {
    PENDING: () => ({
      ...initialState,
      isPending: true
    }),
    FULFILLED: (state, action) => ({
      ...state,
      subscriptions: action.subscriptions
    }),
    REJECTED: (state, action) => ({
      ...initialState,
      error: action.message
    })
  },
  [SELECT_DURATION]: (state, action) => ({
    ...state,
    duration: action.duration
  })
}, initialState)

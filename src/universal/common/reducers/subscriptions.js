import typeToReducer from 'type-to-reducer'
import { fromJS, Map } from 'immutable'

import { types } from '../actions/subscriptions'

const initialState = fromJS({
  subscriptions: [],
  duration: 1,
  initialSelectedSubscriptionId: null,
  isPending: false,
  error: null
})

export default typeToReducer({
  [types.REQUEST_SUBSCRIPTIONS]: {
    SUCCESS: (state, { payload: { data } }) => {
      return state
        .set('subscriptions', data)
        .set('initialSelectedSubscriptionId', data[0].id)
    },
    FAIL: (state, { error }) => initialState.set('error', error)
  },
  [types.SELECT_DURATION]: (state, { payload }) => state.set('duration', payload.duration)
}, initialState)

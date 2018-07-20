import typeToReducer from 'type-to-reducer'
import { fromJS, Map } from 'immutable'

import { types } from '../actions/subscriptions'

const initialState = fromJS({
  subscriptions: {},
  duration: 1,
  isPending: false,
  error: null
})

export default typeToReducer({
  [types.REQUEST_SUBSCRIPTIONS]: {
    SUCCESS: (state, action) => {
      return state.mergeIn(['subscriptions'], action.payload.data)
    }
  },
  [types.SELECT_DURATION]: (state, { payload }) => state.set('duration', payload.duration)
}, initialState)

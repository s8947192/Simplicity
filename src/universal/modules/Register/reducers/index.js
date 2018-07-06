import typeToReducer from 'type-to-reducer'
import { fromJS, Map } from 'immutable'

import { types } from '../actions'

const initialState = fromJS({
  completedSteps: [1,2],
  activeStep: 1,
  email: null,
  password: null,
  repeatPassword: null,
  selectedDuration: 1,
  selectedSubscription: 'id0'
})

export default typeToReducer({
  [types.SET_NEXT_STEP]: (state, { payload }) => {
    return state.set('activeStep', payload.nextStep)
  },
  [types.COMPLETE_STEP_ONE]: {
    SUCCESS: (state, { payload }) => {
      return state
        .set('email', payload.data.email)
        .set('password', payload.data.password)
        .set('repeatPassword', payload.data.repeatPassword)
    }
  }
}, initialState)

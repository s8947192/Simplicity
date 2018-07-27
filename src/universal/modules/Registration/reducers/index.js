import typeToReducer from 'type-to-reducer'
import { fromJS, Map } from 'immutable'

import { types } from '../actions'

const initialState = fromJS({
  completedSteps: [],
  activeStep: 0,
  username: null,
  email: null,
  password: null,
  repeatPassword: null,
  selectedDuration: null,
  selectedSubscription: null,
  languages: null,
  currencies: null
})

export default typeToReducer({
  [types.SET_NEXT_ACTIVE_STEP]: (state, { payload }) => state.set('activeStep', payload.nextActiveStep),
  [types.UPDATE_COMPLETED_STEPS]: (state, { payload }) => state.updateIn(['completedSteps'], arr => arr.push(payload.currentStep)),
  [types.COMPLETE_STEP]: { SUCCESS: (state, { payload }) => state.merge(payload.data) }
}, initialState)

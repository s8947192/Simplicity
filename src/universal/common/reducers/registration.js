import typeToReducer from 'type-to-reducer'

import { types } from 'universal/common/actions/registration'

const initialState = {
  completedSteps: [],
  activeStep: 1,
  email: null,
  password: null,
  repeatPassword: null
}

export default typeToReducer({
  [types.SET_NEXT_STEP]: (state, { payload }) => ({
    ...state,
    activeStep: payload.nextStep
  }),
  [types.COMPLETE_STEP_ONE]: {
    SUCCESS: (state, { payload }) => ({
      ...state,
      email: payload.data.email,
      password: payload.data.password,
      repeatPassword: payload.data.repeatPassword
    })
  }
}, initialState)

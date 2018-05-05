import typeToReducer from 'type-to-reducer'

import {
  SELECT_PLAN_WITH_DURATION,
  SET_ACTIVE_STEP,
  COMPLETE_STEP_ONE
} from 'universal/common/actions/registration'

const initialState = {
  completedSteps: [],
  activeStep: 1,
  stepPending: false,
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  timeZone: null,
  language: 'eng',
  cardNumber: null,
  cardEcpirity: null,
  cardCVC: null,
  subscriptionId: null,
  subscriptionDuration: 1
}

export default typeToReducer({
  [SELECT_PLAN_WITH_DURATION]: (state, action) => ({
    ...state,
    subscriptionId: action.id,
    subscriptionDuration: action.duration
  }),
  [SET_ACTIVE_STEP]: (state, action) => ({
    ...state,
    activeStep: action.step
  }),
  [COMPLETE_STEP_ONE]: {
    PENDING: (state, action) => ({
      ...state,
      stepPending: !state.stepPending
    }),
    FULFILLED: (state, action) => ({
      ...state,
      completedSteps: action.newCompletedSteps,
      activeStep: state.activeStep + 1,
      stepPending: false,
      email: action.email,
      password: action.password
    }),
    REJECTED: (state, action) => ({
      ...state,
      stepPending: false
    })
  },
}, initialState)

import typeToReducer from 'type-to-reducer'

import {
  SELECT_PLAN_WITH_DURATION,
  SET_ACTIVE_STEP,
  COMPLETE_STEP_ONE,
  SET_ALREADY_TAKEN_EMAIL,
  CLEAR_ALREADY_TAKEN_EMAIL,
  COMPLETE_STEP_TWO,
  UPDATE_COMPLETED_STEPS
} from 'universal/common/actions/registration'

const initialState = {
  completedSteps: [],
  activeStep: 1,
  stepPending: false,
  takenEmail: null,
  email: null,
  password: null,
  firstName: null,
  lastName: null,
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
  [SET_ACTIVE_STEP]: (state, action) => ({ ...state, activeStep: action.step }),
  [SET_ALREADY_TAKEN_EMAIL]: (state, action) => ({ ...state, takenEmail: action.email }),
  [CLEAR_ALREADY_TAKEN_EMAIL]: (state, action) => ({ ...state, takenEmail: null }),
  [UPDATE_COMPLETED_STEPS]: (state, action) => ({ ...state, completedSteps: action.completedSteps }),
  [COMPLETE_STEP_ONE]: {
    PENDING: (state, action) => ({
      ...state,
      stepPending: !state.stepPending
    }),
    FULFILLED: (state, action) => ({
      ...state,
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
  [COMPLETE_STEP_TWO]: {
    FULFILLED: (state, action) => ({
      ...state,
      firstName: action.firstName,
      lastName: action.lastName,
      language: action.systemLanguage,
      activeStep: state.activeStep + 1
    })
  },
}, initialState)

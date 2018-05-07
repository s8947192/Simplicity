import { takeLatest, call, put, select } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'

import { checkIfUserExists } from 'universal/api/registration'
import {
  COMPLETE_STEP_ONE,
  COMPLETE_STEP_TWO
} from 'universal/common/actions/registration'
import {
  completeStepOnePending,
  completeStepOneFulfilled,
  completeStepOneRejected,
  setAlreadyTakenEmail,
  completeStepTwoFulfilled,
  updateCompletedSteps
} from 'universal/common/actions/registration'

function* defineCompletedSteps(currentStep) {
  const completedSteps = yield select(store => store.registration.completedSteps)
  const newCompletedSteps = completedSteps.find(step => step === currentStep)
    ? completedSteps
    : completedSteps.concat(currentStep)
  return newCompletedSteps
}

function* requestCompleteStepOneSaga({ email, password }) {
  try {
    yield put(completeStepOnePending())
    const { data: user } = yield call(checkIfUserExists, email)
    const isUserExists = user.length
    if (isUserExists) {
      yield put(batchActions([
        completeStepOnePending(),
        setAlreadyTakenEmail(email)
      ]))
    } else {
      const newCompletedSteps = yield defineCompletedSteps(1)
      yield put(updateCompletedSteps(newCompletedSteps))
      yield put(completeStepOneFulfilled(email, password))
    }
  } catch (e) {
    console.log(e)
    return yield put(completeStepOneRejected())
  }
}

function* requestCompleteStepOneTwo({ firstName, lastName, systemLanguage }) {
  const newCompletedSteps = yield defineCompletedSteps(2)
  const checkedLastName = lastName.length ? lastName : null
  yield put(batchActions([
    updateCompletedSteps(newCompletedSteps),
    completeStepTwoFulfilled(firstName, checkedLastName, systemLanguage)
  ]))
}

export default function* watchRegistration() {
  yield takeLatest(COMPLETE_STEP_ONE, requestCompleteStepOneSaga)
  yield takeLatest(COMPLETE_STEP_TWO, requestCompleteStepOneTwo)
}

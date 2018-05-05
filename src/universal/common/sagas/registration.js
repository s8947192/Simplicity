import { takeLatest, call, put, select } from 'redux-saga/effects'

import { checkIfUserExists } from 'universal/api/registration'
import { COMPLETE_STEP_ONE } from 'universal/common/actions/registration'
import {
  completeStepOnePending,
  completeStepOneFulfilled,
  completeStepOneRejected
} from 'universal/common/actions/registration'

function* requestCompleteStepOneSaga({ email, password }) {
  console.log(password)
  try {
    yield put(completeStepOnePending())
    const { data: user } = yield call(checkIfUserExists, email)
    const isUserExists = user.length
    if (isUserExists) {
      yield put(completeStepOnePending())
    } else {
      const completedSteps = yield select(store => store.registration.completedSteps)
      const newCompletedSteps = completedSteps.find(step => step === 1) ? completedSteps : completedSteps.concat(1)
      console.log(newCompletedSteps)
      yield put(completeStepOneFulfilled(newCompletedSteps, email, password))
    }
  } catch (e) {
    console.log(e)
    return yield put(completeStepOneRejected())
  }
}

export default function* watchRegistration() {
  yield takeLatest(COMPLETE_STEP_ONE, requestCompleteStepOneSaga)
}

import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'

import { types, actions } from '../actions'
import { getActiveStep, getCompletedSteps } from '../selectors'
import { getIsSelectedSubscriptionFree } from 'universal/common/selectors/subscriptions'

function* defineNextStepSaga() {
  const currentStep = yield select(getActiveStep)
  const isFreeSubscription = yield select(getIsSelectedSubscriptionFree)
  if (isFreeSubscription && currentStep === 1) return currentStep + 2
  return currentStep + 1
}

function* requestSwitchToStepSaga({ payload: { nextStep } }) {
  yield put(actions.setNextActiveStep(nextStep))
}

function* requestSkipStepSaga() {
  const nextActiveStep = yield call(defineNextStepSaga)
  yield put(actions.setNextActiveStep(nextActiveStep))
}

function* requestCompleteStepSaga({ payload: { data } }) {
  const currentStep = yield select(getActiveStep)
  const nextActiveStep = yield call(defineNextStepSaga)
  yield put(batchActions([
    actions.updateCompletedSteps(currentStep),
    actions.completeStepSuccess(data),
    actions.setNextActiveStep(nextActiveStep)
  ]))
}

export default function* watchRegistration() {
  yield takeLatest(types.COMPLETE_STEP, requestCompleteStepSaga)
  yield takeLatest(types.SKIP_STEP, requestSkipStepSaga)
  yield takeLatest(types.SWITCH_TO_STEP, requestSwitchToStepSaga)
}

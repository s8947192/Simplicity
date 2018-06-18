import { takeLatest, call, put, select } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'

import { types, actions } from 'universal/common/actions/registration'

function* requestCompleteStepOneSaga({ payload }) {
  yield put(batchActions([
    actions.completeStepOneSuccess(payload.data),
    actions.setNextStep(2)
  ]))
}

export default function* watchRegistration() {
  yield takeLatest(types.COMPLETE_STEP_ONE, requestCompleteStepOneSaga)
}

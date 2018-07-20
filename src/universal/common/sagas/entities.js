import { takeLatest, call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { push } from 'react-router-redux'

import * as schemas from 'universal/schemas'

import { requestSubscriptions } from 'universal/api/subscriptions'
import { types, actions } from '../actions/entities'

function* requestSubscriptionsSaga() {
  try {
    const subscriptions = yield call(requestSubscriptions)
    const norm = yield call(normalize, subscriptions, [schemas.subscription])
    yield put(actions.requestSubscriptions.success(norm))
  } catch (err) {
    console.log(err)
    yield put(actions.requestSubscriptions.fail(err))
  }
}

export default function* watchRequestAuth() {
  yield takeLatest(types.REQUEST_SUBSCRIPTIONS, requestSubscriptionsSaga)
}

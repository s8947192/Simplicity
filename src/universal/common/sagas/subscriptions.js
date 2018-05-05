import { takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { requestSubscriptions } from 'universal/api/subscriptions'
import { REQUEST_SUBSCRIPTIONS } from 'universal/common/actions/subscriptions'
import { requestSubscriptionsFulfilled } from 'universal/common/actions/subscriptions'

function* requestSubscriptionsSaga() {
  try {
    const plans = yield call(requestSubscriptions)
    yield put(requestSubscriptionsFulfilled(plans))
  } catch (e) {
    console.log(e)
    yield put(requestSubscriptionsError(e))
  }
}

export default function* watchRequestAuth() {
  yield takeLatest(REQUEST_SUBSCRIPTIONS, requestSubscriptionsSaga)
}

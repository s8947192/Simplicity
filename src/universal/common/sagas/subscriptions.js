import { takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { requestSubscriptions } from 'universal/api/subscriptions'
import { types, actions } from '../actions/subscriptions'

function* requestSubscriptionsSaga() {
  try {
    const plans = yield call(requestSubscriptions)
    yield put(actions.requestSubscriptionsSuccess(plans))
  } catch (err) {
    console.log(err)
    yield put(actions.requestSubscriptionsFail(err))
  }
}

export default function* watchRequestAuth() {
  yield takeLatest(types.REQUEST_SUBSCRIPTIONS, requestSubscriptionsSaga)
}

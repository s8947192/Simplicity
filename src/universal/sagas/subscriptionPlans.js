import { takeLatest, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { requestSubscriptionPlans } from 'universal/api/subscriptionPlans'
import { REQUEST_SUBSCRIPTION_PLANS } from 'universal/actions/subscriptionPlanActions'
import { requestSubscriptionPlansFulfilled } from 'universal/actions/subscriptionPlanActions'

function* requestSubscriptionPlansSaga() {
  try {
    const plans = yield call(requestSubscriptionPlans)
    yield put(requestSubscriptionPlansFulfilled(plans))
  } catch (e) {
    console.log(e)
    yield put(requestSubscriptionPlansError(e))
  }
}

export default function* watchRequestAuth() {
  yield takeLatest(REQUEST_SUBSCRIPTION_PLANS, requestSubscriptionPlansSaga)
}

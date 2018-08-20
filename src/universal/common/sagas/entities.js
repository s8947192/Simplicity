import { takeLatest, call, put } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { push } from 'react-router-redux'

import * as schemas from 'universal/schemas'

import {
  requestProducts,
  requestPlans
} from 'universal/api/stripe'

import { types, actions } from '../actions/entities'

function* requestSubscriptionsSaga() {
  try {
    const { data: { products } } = yield call(requestProducts)
    const { data: { plans } } = yield call(requestPlans)
    const subscriptions = products.reduce((c, n) => (c.push({ ...n, plans: plans.filter(p => p.product === n.id) }), c), [])
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

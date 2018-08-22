import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'
import { normalize } from 'normalizr'
import { fromJS } from 'immutable'

import * as schemas from 'universal/schemas'

import { types as entitiesTypes } from 'universal/common/actions/entities'
import { getSubscriptions } from 'universal/common/selectors/entities'

import { types, actions } from '../actions'
import { getIsSelectedSubscriptionFree } from '../selectors'

function* saveAccountDataSaga({ payload }) {
  yield put(batchActions([
    actions.updateCompletedSteps(0),
    actions.setActiveStep(1),
    actions.saveAccountData.success(payload)
  ]))
}

function* setDefaultSubscriptionSaga({ payload }) {
  const subscriptions = yield select(getSubscriptions)
  const subscription = subscriptions.find(obj => obj.get('name') === 'free')
  const plan = subscription.get('plans').find(plan => plan.get('nickname') === 'monthly')
  yield put(batchActions([
    actions.setActiveSubscriptionId(subscription.get('id')),
    actions.setActiveSubscriptionPlanId(plan.get('id'))
  ]))
}

function* saveSubscriptionDataSaga({ payload }) {
  const { activeSubscriptionId, activePlanId } = payload
  if (!activeSubscriptionId) return
  const isSubscriptionFree = yield select(getIsSelectedSubscriptionFree, activeSubscriptionId)
  const nextStep = isSubscriptionFree ? 3 : 2
  yield put(batchActions([
    actions.updateCompletedSteps(1),
    actions.setActiveStep(nextStep),
    actions.saveSubscriptionData.success(payload)
  ]))
}

function* savePaymentDataSaga({ payload }) {
  const cardData = { name: payload.values.get('nameOnCard') }
  const shouldRememberCard = payload.values.get('rememberCard') || false
  try {
    const paymentMethod = yield call(payload.stripe.createToken, cardData)
    yield put(batchActions([
      actions.updateCompletedSteps(2),
      actions.setActiveStep(3),
      actions.savePaymentData.success(fromJS(paymentMethod))
    ]))
  } catch (err) {
    console.log(err)
  }
}

function* verificateAndRegistrateSaga() {
  console.log('VVV')
}

export default function* watchRegistration() {
  yield takeLatest(types.SAVE_ACCOUNT_DATA, saveAccountDataSaga)
  yield takeLatest(types.SAVE_SUBSCRIPTION_DATA, saveSubscriptionDataSaga)
  yield takeLatest(types.SAVE_PAYMENT_DATA, savePaymentDataSaga)
  yield takeLatest(entitiesTypes.REQUEST_SUBSCRIPTIONS_SUCCESS, setDefaultSubscriptionSaga)
}

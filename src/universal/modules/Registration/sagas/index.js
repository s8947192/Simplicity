import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'
import { normalize } from 'normalizr'
import { fromJS } from 'immutable'

import * as schemas from 'universal/schemas'

import { getSubscriptions } from 'universal/common/selectors/entities'
import { types as entitiesTypes } from 'universal/common/actions/entities'

import { types, actions } from '../actions'

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
  const { activeSubscriptionId, subscriptionDuration } = payload
  if (!activeSubscriptionId) return
  yield put(batchActions([
    actions.updateCompletedSteps(1),
    actions.setActiveStep(2),
    actions.saveSubscriptionData.success(payload)
  ]))
}

function* savePaymentDataSaga({ payload }) {
  yield put(actions.toggleStripeTokenPending(true))
  const cardData = { name: payload.values.get('nameOnCard') }
  const shouldRememberCard = payload.values.get('rememberCard') || false
  try {
    const paymentMethod = yield call(payload.stripe.createToken, cardData)
    console.log(fromJS(paymentMethod))
    yield put(batchActions([
      actions.updateCompletedSteps(3),
      actions.setActiveStep(4),
      actions.savePaymentData.success(fromJS(paymentMethod)),
      actions.toggleStripeTokenPending(false),
      actions.shouldRememberPaymentMethod(shouldRememberCard)
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

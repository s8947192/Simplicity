import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'

import { getSubscriptions } from 'universal/common/selectors/entities'

import { types, actions } from '../actions'
import { types as entitiesTypes } from 'universal/common/actions/entities'

function* saveAccountDataSaga({ payload }) {
  yield put(batchActions([
    actions.updateCompletedSteps(0),
    actions.setActiveStep(1),
    actions.saveAccountData.success(payload)
  ]))
}

function* setDefaultSubscriptionSaga({ payload }) {
  const subscriptions = yield select(getSubscriptions)
  const defaultSubscription = subscriptions.find(subscription => subscription.get('title') === 'free')
  yield put(actions.setActiveSubscriptionId(defaultSubscription.get('id')))
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

export default function* watchRegistration() {
  yield takeLatest(types.SAVE_ACCOUNT_DATA, saveAccountDataSaga)
  yield takeLatest(types.SAVE_SUBSCRIPTION_DATA, saveSubscriptionDataSaga)
  yield takeLatest(entitiesTypes.REQUEST_SUBSCRIPTIONS_SUCCESS, setDefaultSubscriptionSaga)
}

import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'
import { normalize } from 'normalizr'

import * as schemas from 'universal/schemas'

import { getSubscriptions } from 'universal/common/selectors/entities'

import { types, actions } from '../actions'

import { types as entitiesTypes } from 'universal/common/actions/entities'
import { actions as entitiesActions } from 'universal/common/actions/entities'

import { requestLanguages } from 'universal/api/languages'
import { requestCurrencies } from 'universal/api/currencies'

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

function* requestMainSettingsSaga() {
  try {
    const { data: languages } = yield call(requestLanguages)
    const { data: currencies } = yield call(requestCurrencies)

    const defaultLanguage = languages.find(language => language.title === 'english')
    const defaultCurrency = currencies.find(currency => currency.title === 'dollar')

    const normLanguages = yield call(normalize, languages, [schemas.language])
    const normCurrencies = yield call(normalize, currencies, [schemas.currency])

    yield put(batchActions([
      entitiesActions.requestLanguages.success(normLanguages),
      entitiesActions.requestCurrencies.success(normCurrencies),
      actions.setDefaultLanguageId(defaultLanguage.id),
      actions.setDefaultCurrencyId(defaultCurrency.id)
    ]))
  } catch (err) {
    console.log(err)
  }
}

function* saveMainSettingsSaga({ payload }) {
  console.log(payload)
  yield put(batchActions([
    actions.updateCompletedSteps(2),
    actions.setActiveStep(3),
    actions.saveMainSettings.success(payload)
  ]))
}

export default function* watchRegistration() {
  yield takeLatest(types.SAVE_ACCOUNT_DATA, saveAccountDataSaga)
  yield takeLatest(types.SAVE_SUBSCRIPTION_DATA, saveSubscriptionDataSaga)
  yield takeLatest(types.REQUEST_MAIN_SETTINGS, requestMainSettingsSaga)
  yield takeLatest(types.SAVE_MAIN_SETTINGS, saveMainSettingsSaga)
  yield takeLatest(entitiesTypes.REQUEST_SUBSCRIPTIONS_SUCCESS, setDefaultSubscriptionSaga)
}

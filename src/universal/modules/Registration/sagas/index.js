import { takeLatest, call, put, select, fork } from 'redux-saga/effects'
import { batchActions } from 'redux-batched-actions'
import { normalize } from 'normalizr'
import { fromJS } from 'immutable'

import * as schemas from 'universal/schemas'

import { getSubscriptions } from 'universal/common/selectors/entities'

import { types, actions } from '../actions'
import { getIsPaymentMethodAvailable } from '../selectors'

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
  const isPaymentMethodAvailable = yield select(getIsPaymentMethodAvailable)
  const nextStep = isPaymentMethodAvailable ? 3 : 4
  yield put(batchActions([
    actions.updateCompletedSteps(2),
    actions.setActiveStep(nextStep),
    actions.saveMainSettings.success(payload)
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

export default function* watchRegistration() {
  yield takeLatest(types.SAVE_ACCOUNT_DATA, saveAccountDataSaga)
  yield takeLatest(types.SAVE_SUBSCRIPTION_DATA, saveSubscriptionDataSaga)
  yield takeLatest(types.REQUEST_MAIN_SETTINGS, requestMainSettingsSaga)
  yield takeLatest(types.SAVE_MAIN_SETTINGS, saveMainSettingsSaga)
  yield takeLatest(types.SAVE_PAYMENT_DATA, savePaymentDataSaga)
  yield takeLatest(entitiesTypes.REQUEST_SUBSCRIPTIONS_SUCCESS, setDefaultSubscriptionSaga)
}

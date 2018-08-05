import { createSelector } from 'reselect'

import {
  getSubscriptions,
  getLanguages,
  getCurrencies
} from 'universal/common/selectors/entities'

export const getFirstName = state => state.getIn(['registration', 'firstName'])
export const getLastName = state => state.getIn(['registration', 'lastName'])
export const getNickName = state => state.getIn(['registration', 'nickName'])
export const getEmail = state => state.getIn(['registration', 'email'])
export const getPassword = state => state.getIn(['registration', 'password'])

export const getCompletedSteps = state => state.getIn(['registration', 'completedSteps'])
export const getActiveStep = state => state.getIn(['registration', 'activeStep'])

export const getActiveSubscriptionId = state => state.getIn(['registration', 'activeSubscriptionId'])
export const getSubscriptionDuration = state => state.getIn(['registration', 'subscriptionDuration'])

export const getSelectedLanguageId = state => state.getIn(['registration', 'systemLanguage'])
export const getSelectedCurrencyId = state => state.getIn(['registration', 'systemCurrency'])

export const getLanguage = createSelector(
  [getLanguages, getSelectedLanguageId],
  (languages, id) => {
    if (!languages || !id) return
    return languages.get(id)
  }
)

export const getCurrency = createSelector(
  [getCurrencies, getSelectedCurrencyId],
  (currencies, id) => {
    if (!currencies || !id) return
    return currencies.get(id)
  }
)

export const getIsStripeTokenPending = state => state.getIn(['registration', 'isStripeTokenPending'])

export const getPaymentMethod = state => state.getIn(['registration', 'paymentMethod'])
export const getIsSavePaymentMethod = state => state.getIn(['registration', 'savePaymentMethod'])

export const getActiveSubscription = createSelector(
  [getSubscriptions, getActiveSubscriptionId],
  (subscriptions, id) => {
    if (!subscriptions.size || !id) return
    return subscriptions.find(subscription => subscription.get('id') === id)
  }
)

export const getIsPaymentMethodAvailable = createSelector(
  [getActiveSubscription],
  (subscription, fields) => {
    if (!subscription) return false
    if (subscription.get('title') === 'free') return false
    return true
  }
)

export const isStepCompleted = createSelector(
  [getCompletedSteps, (_, stepToSearch) => stepToSearch],
  (steps, step) => steps.has(step)
)

import { createSelector } from 'reselect'

import {
  getSubscriptions,
  getLanguages,
  getCurrencies
} from 'universal/common/selectors/entities'

export const getRegistrationReducer = state => state.get('registration')

export const getFirstName = state => state.getIn(['registration', 'firstName'])
export const getIsPending = state => state.getIn(['registration', 'isPending'])
export const getLastName = state => state.getIn(['registration', 'lastName'])
export const getNickName = state => state.getIn(['registration', 'nickName'])
export const getEmail = state => state.getIn(['registration', 'email'])
export const getPassword = state => state.getIn(['registration', 'password'])
export const getRegistrationError = state => state.getIn(['registration', 'registrationError'])
export const getPendingMessage = state => state.getIn(['registration', 'pendingMessage'])

export const getCompletedSteps = state => state.getIn(['registration', 'completedSteps'])
export const getActiveStep = state => state.getIn(['registration', 'activeStep'])

export const getSelectedSubscriptionId = state => state.getIn(['registration', 'activeSubscriptionId'])
export const getSelectedSubscriptionPlanId = state => state.getIn(['registration', 'activeSubscriptionPlanId'])
export const getActiveSubscriptionId = state => state.getIn(['registration', 'activeSubscriptionId']) // TODO remove
export const getSubscriptionDuration = state => state.getIn(['registration', 'subscriptionDuration'])

export const getSelectedLanguageId = state => state.getIn(['registration', 'systemLanguage']) // TODO remove
export const getSelectedCurrencyId = state => state.getIn(['registration', 'systemCurrency']) // TODO remove

export const getIsAgreedWithTermsAndPolices = state => state.getIn(['registration', 'agreedWithTermsAndPolices'])

export const getIsSelectedSubscriptionFree = createSelector(
  [getSubscriptions, ((_, subscriptionId) => subscriptionId)],
  (subscriptions, id) => {
    if (!id || !subscriptions) return
    const subscription = subscriptions.find(subscription => subscription.get('id') === id)
    return subscription.get('name') === 'free'
  }
)

export const getIsPaymentMethodAvailable = createSelector(
  [getSubscriptions, getSelectedSubscriptionId],
  (subscriptions, id) => {
    if (!id || !subscriptions) return
    const subscription = subscriptions.find(subscription => subscription.get('id') === id)
    return subscription.get('name') !== 'free'
  }
)

export const getLanguage = createSelector(
  [getLanguages, getSelectedLanguageId],
  (languages, id) => {
    if (!languages || !id) return
    return languages.get(id)
  }
) // TODO remove

export const getCurrency = createSelector(
  [getCurrencies, getSelectedCurrencyId],
  (currencies, id) => {
    if (!currencies || !id) return
    return currencies.get(id)
  }
) // TODO remove







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

export const isStepCompleted = createSelector(
  [getCompletedSteps, (_, stepToSearch) => stepToSearch],
  (steps, step) => steps.has(step)
)

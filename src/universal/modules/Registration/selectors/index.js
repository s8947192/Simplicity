import { createSelector } from 'reselect'

import { getSubscriptions } from 'universal/common/selectors/entities'

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

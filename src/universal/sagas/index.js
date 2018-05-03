import { all, fork } from 'redux-saga/effects'

import watchSubscriptionPlans from './subscriptionPlans'

export default function* rootSaga() {
  yield all([
    fork(watchSubscriptionPlans)
  ])
}

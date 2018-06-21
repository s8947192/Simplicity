import { all, fork } from 'redux-saga/effects'

import watchSubscriptions from './subscriptions'
import watchRegistration from 'universal/modules/Register/sagas'

export default function* rootSaga() {
  yield all([
    fork(watchRegistration),
    fork(watchSubscriptions)
  ])
}

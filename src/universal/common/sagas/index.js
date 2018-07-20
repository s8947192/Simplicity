import { all, fork } from 'redux-saga/effects'

import watchEntities from './entities'
import watchRegistration from 'universal/modules/Register/sagas'

export default function* rootSaga() {
  yield all([
    fork(watchRegistration),
    fork(watchEntities)
  ])
}

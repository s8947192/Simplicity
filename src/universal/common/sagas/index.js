import { all, fork } from 'redux-saga/effects'

import watchEntities from './entities'
import watchRegistration from 'universal/modules/Registration/sagas'

export default function* rootSaga() {
  yield all([
    fork(watchRegistration),
    fork(watchEntities)
  ])
}

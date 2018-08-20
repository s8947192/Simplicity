import typeToReducer from 'type-to-reducer'
import { fromJS } from 'immutable'

import mergeEntities from 'universal/utils/mergeEntities'

import { types } from '../actions/entities'

const initialState = fromJS({
  subscriptions: {},
  languages: {},
  currencies: {}
})

export default typeToReducer({
  [types.REQUEST_SUBSCRIPTIONS]: {
    SUCCESS: mergeEntities('subscriptions')
  }
}, initialState)

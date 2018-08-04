import { schema } from 'normalizr'

export const subscription = new schema.Entity('subscriptions', {
  idAttribute: 'id'
})

export const language = new schema.Entity('languages', {
  idAttribute: 'id'
})

export const currency = new schema.Entity('currencies', {
  idAttribute: 'id'
})

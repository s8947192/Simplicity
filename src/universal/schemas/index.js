import { schema } from 'normalizr'

export const subscription = new schema.Entity('subscriptions', {
  idAttribute: 'id'
})

import { fetch } from 'universal/utils/fetch'

export const requestSubscriptions = () => fetch.get('Subscriptions')

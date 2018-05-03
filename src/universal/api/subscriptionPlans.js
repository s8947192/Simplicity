import { fetch } from 'universal/utils/fetch'

export const requestSubscriptionPlans = () => fetch.get('membership').then(response => response.data)

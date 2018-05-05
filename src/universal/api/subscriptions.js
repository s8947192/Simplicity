import { fetch } from 'universal/utils/fetch'

export const requestSubscriptions = () => fetch.get('membership').then(response => response.data)

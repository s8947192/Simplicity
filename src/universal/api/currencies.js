import { fetch } from 'universal/utils/fetch'

export const requestCurrencies = () => fetch.get('Currencies')

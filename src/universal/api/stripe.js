import { fetch } from 'universal/utils/fetch'

export const requestProducts = () => fetch.get('StripeServices/getProducts')
export const requestPlans = () => fetch.get('StripeServices/getPlans')

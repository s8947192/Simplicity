import { fetch } from 'universal/utils/fetch'

export const findUserByEmail = email => fetch.get(`CustomUsers?filter[where][email]=${email}`)

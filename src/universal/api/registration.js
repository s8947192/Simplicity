import { fetch } from 'universal/utils/fetch'

export const checkIfUserExists = email => fetch.get(`CustomUsers?filter[where][email]=${email}`)

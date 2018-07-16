import { fetch } from 'universal/utils/fetch'

export const requestLanguages = () => fetch.get('Languages')

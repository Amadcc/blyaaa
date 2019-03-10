import { NAME } from './Types'

export const getError = state => state[NAME].error
export const isLoading = state => state[NAME].loading
export const isLoaded = state => state[NAME].loaded
export const getAll = state => state[NAME].data
export const getCompleted = state => state[NAME].data.filter(d => d.completed)
export const getActive = state => state[NAME].data.filter(d => !d.completed)

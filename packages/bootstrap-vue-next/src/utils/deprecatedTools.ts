import {warn} from './console'

export const deprecatedNote = (message: string) => {
  warn('deprecated', message)
}

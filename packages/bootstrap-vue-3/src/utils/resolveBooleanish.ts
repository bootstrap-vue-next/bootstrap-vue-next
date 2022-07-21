import type {Booleanish} from '../types'

export default (ish: Booleanish): boolean =>
  typeof ish === 'boolean' ? ish : ish === 'true' ? true : false

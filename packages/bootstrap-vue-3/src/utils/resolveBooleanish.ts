import {Booleanish} from '../types'

/**
 * Converts a Booleanish type to boolean
 *
 * @param {Booleanish} input
 */
export default (input: Booleanish): boolean =>
  typeof input === 'boolean' ? input : input === 'true' ? true : false

import type {Booleanish} from '../types'

/**
 * Type predicate function to check if the input is Booleanish type
 *
 * @param  {unknown} input
 * @returns {boolean} input is Booleanish
 */
export const isBooleanish = (input: unknown): input is Booleanish =>
  typeof input === 'boolean' || input === '' || input === 'true' || input === 'false'

/**
 * Converts a Booleanish type to boolean
 *
 * @param {Booleanish} input
 * @returns {boolean}
 */
export const resolveBooleanish = (input: Booleanish): boolean =>
  typeof input === 'boolean' ? input : input === '' || input === 'true' ? true : false

import {isPlainObject} from './inspect'
import {
  RX_FIRST_START_SPACE_WORD,
  RX_LOWER_UPPER,
  RX_START_SPACE_WORD,
  RX_UNDERSCORE,
} from '../constants/regex'

/**
 * Convert a value to a string that can be rendered `undefined`/`null` will be converted to `''` Plain objects and arrays will be JSON stringified
 *
 * @param val
 * @param spaces
 * @returns
 */
export const toString = (val: unknown, spaces = 2): string =>
  typeof val === 'string'
    ? val
    : val === undefined || val === null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === Object.prototype.toString)
    ? JSON.stringify(val, null, spaces)
    : String(val)

/**
 * @param str
 * @returns
 */
export const startCase = (str: string): string =>
  str
    .replace(RX_UNDERSCORE, ' ')
    .replace(RX_LOWER_UPPER, (_, $1, $2) => `${$1} ${$2}`)
    .replace(RX_FIRST_START_SPACE_WORD, (_, $1, $2) => $1 + $2.toUpperCase())

/**
 * @param str
 * @returns
 */
export const titleCase = (str: string): string =>
  str
    .replace(RX_UNDERSCORE, ' ')
    .replace(RX_LOWER_UPPER, (_, $1, $2) => `${$1} ${$2}`)
    .replace(RX_START_SPACE_WORD, (_, $1, $2) => $1 + $2.toUpperCase())

/**
 * Uppercases the first letter of a string and returns a new string
 *
 * @param str
 * @returns
 */
export const upperFirst = (str: string): string => {
  const trim = str.trim()
  return trim.charAt(0).toUpperCase() + trim.slice(1)
}

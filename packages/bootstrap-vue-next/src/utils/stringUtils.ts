import {
  RX_FIRST_START_SPACE_WORD,
  RX_LOWER_UPPER,
  RX_REGEXP_REPLACE,
  RX_SPACES,
  RX_START_SPACE_WORD,
  RX_UNDERSCORE,
} from '../constants/regex'

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

/**
 * Escapes a string for RegExp usage.
 *
 * @param str
 * @returns
 */
export const escapeRegExp = (str: string): string => str.replace(RX_REGEXP_REPLACE, '\\$&')

/**
 * Escapes special chars in string and replaces
 * contiguous spaces with a whitespace match
 *
 * @param str
 * @returns
 */
export const escapeRegExpChars = (str: string): string =>
  escapeRegExp(str).replace(RX_SPACES, '\\s')

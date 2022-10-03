/**
 * Validates a number is an integer. If not return NaN
 *
 * @param value
 * @param defaultValue
 * @returns
 */
export const toInteger = (value: number, defaultValue = NaN): number =>
  Number.isInteger(value) ? value : defaultValue

/**
 * @param value
 * @param defaultValue
 * @returns
 */
export const stringToInteger = (value: string, defaultValue = NaN): number => {
  const integer = Number.parseInt(value, 10)
  return Number.isNaN(integer) ? defaultValue : integer
}

/**
 * Validates a number is a float. If not return NaN
 *
 * @param value
 * @param defaultValue
 * @returns
 */
export const toFloat = (value: number | string, defaultValue = NaN): number => {
  const float = Number.parseFloat(value.toString())
  return Number.isNaN(float) ? defaultValue : float
}

/**
 * Float given to a certain decimal place
 *
 * @param val
 * @param precision
 * @returns
 */
export const toPercison = (val: number, precision: number): string =>
  toFloat(val).toPrecision(precision)

// Number utilities

//Validates a number is an integer. If not return NaN
export const toInteger = (value: number, defaultValue = NaN): number => {
  return Number.isInteger(value) ? value : defaultValue
}
//Validates a number is a float. If not return NaN
export const toFloat = (value: number, defaultValue = NaN): number => {
  return !Number.isInteger(value) ? value : defaultValue
}

//Float given to a certain decimal place
export const toPercison = (val: number, precision: number) => toFloat(val).toPrecision(precision)

// Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)

import {upperFirst} from './stringUtils'

// Use data last parameters to allow for currying
export const suffixPropName = (suffix: string, value: string): string =>
  value + (suffix ? upperFirst(suffix) : '')

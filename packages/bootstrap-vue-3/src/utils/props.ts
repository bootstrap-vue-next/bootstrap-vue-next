// Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)

import {isArray} from './inspect'
import {upperFirst} from './stringUtils'

// Use data last parameters to allow for currying
export const suffixPropName = (suffix: string, value: string): string =>
  value + (suffix ? upperFirst(suffix) : '')

// Given an array of properties or an object of property keys,
// plucks all the values off the target object, returning a new object
// that has props that reference the original prop values
export const pluckProps = (keysToPluck: any, objToPluck: any, transformFn = (x: any) => x): any =>
  (isArray(keysToPluck) ? keysToPluck.slice() : Object.keys(keysToPluck)).reduce(
    (memo: any, prop: any) => {
      memo[transformFn(prop)] = objToPluck[prop]
      return memo
    },
    {}
  )

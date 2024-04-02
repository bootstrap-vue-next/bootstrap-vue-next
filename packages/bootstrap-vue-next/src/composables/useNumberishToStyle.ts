import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {Numberish} from '../types'
import {RX_NUMBER} from '../constants/regex'

export default (
  el: MaybeRefOrGetter<Numberish | undefined>,
  /**
   * The unit to use when converting a numeric value to a string
   *
   * @default 'px'
   */
  unit: MaybeRefOrGetter<string> = 'px'
) =>
  computed(() => {
    const value = toValue(el)
    const resolvedUnit = toValue(unit)
    // If num is non-numeric, return val as-is (sm, md, lg, undefined or any other custom value), otherwise return num as a px value
    return RX_NUMBER.test(String(value))
      ? `${Number(value)}${resolvedUnit}`
      : (value as string | undefined)
  })

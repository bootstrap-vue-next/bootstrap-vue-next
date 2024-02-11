import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {LiteralUnion, Numberish, Size} from '../types'
import {RX_NUMBER} from '../constants/regex'

export default (el: MaybeRefOrGetter<LiteralUnion<Size, Numberish> | undefined>) =>
  computed(() => {
    const value = toValue(el)
    // If num is non-numeric, return val as-is (sm, md, lg, undefined or any other custom value), otherwise return num as a px value
    return RX_NUMBER.test(String(value)) ? `${Number(value)}px` : value
  })

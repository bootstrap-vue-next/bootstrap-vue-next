import {computed, type MaybeRefOrGetter, toRef} from 'vue'
import type {LiteralUnion, Numberish, Size} from '../types'
import {RX_NUMBER} from '../constants/regex'

export default (el: MaybeRefOrGetter<LiteralUnion<Size, Numberish> | undefined>) => {
  const val = toRef(el)

  return computed(() =>
    // If num is non-numeric, return val as-is (sm, md, lg, undefined or any other custom value), otherwise return num as a px value
    RX_NUMBER.test(String(val.value)) ? `${Number(val.value)}px` : val.value
  )
}

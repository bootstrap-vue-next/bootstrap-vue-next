import {computed, type MaybeRefOrGetter, toRef} from 'vue'
import type {LiteralUnion, Numberish, Size} from '../types'
import {useToNumber} from '@vueuse/core'

export default (el: MaybeRefOrGetter<LiteralUnion<Size, Numberish> | undefined>) => {
  const val = toRef(el)

  const num = useToNumber(() => val.value ?? NaN)

  return computed(() =>
    // If num is non-numeric, return val as-is (sm, md, lg, undefined or any other custom value), otherwise return num as a px value
    Number.isNaN(num.value) ? val.value : `${num.value}px`
  )
}

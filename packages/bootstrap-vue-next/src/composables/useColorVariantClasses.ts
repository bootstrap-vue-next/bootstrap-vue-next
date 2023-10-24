import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {ColorVariant, TextColorVariant} from '../types'

export default (
  obj: MaybeRefOrGetter<{
    variant: ColorVariant | null
    textVariant: TextColorVariant | null
    bgVariant: ColorVariant | null
  }>
) =>
  computed(() => {
    const props = toValue(obj)
    return {
      [`text-bg-${props.variant}`]: props.variant !== null,
      [`text-${props.textVariant}`]: props.textVariant !== null && props.variant === null,
      [`bg-${props.bgVariant}`]: props.bgVariant !== null && props.variant === null,
    }
  })

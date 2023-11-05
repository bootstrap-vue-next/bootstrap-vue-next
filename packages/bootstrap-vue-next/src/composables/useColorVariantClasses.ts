import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {ColorExtendables} from '../types'

export default (obj: MaybeRefOrGetter<ColorExtendables>) =>
  computed(() => {
    const props = toValue(obj)
    return {
      [`text-bg-${props.variant}`]: props.variant !== null,
      [`text-${props.textVariant}`]: props.textVariant !== null && props.variant === null,
      [`bg-${props.bgVariant}`]: props.bgVariant !== null && props.variant === null,
    }
  })

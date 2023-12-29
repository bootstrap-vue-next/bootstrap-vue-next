import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {ColorExtendables} from '../types'

export default (obj: MaybeRefOrGetter<ColorExtendables>) =>
  computed(() => {
    let props = toValue(obj)
    props = {
      ...props,
      variant: props.variant ?? null,
      bgVariant: props.bgVariant ?? null,
      textVariant: props.textVariant ?? null,
    }
    return {
      [`text-bg-${props.variant}`]: props.variant !== null,
      [`text-${props.textVariant}`]: props.textVariant !== null && props.variant === null,
      [`bg-${props.bgVariant}`]: props.bgVariant !== null && props.variant === null,
    }
  })

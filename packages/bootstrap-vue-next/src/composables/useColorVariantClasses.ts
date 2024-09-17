import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {ColorExtendables} from '../types/ColorTypes'

export const useColorVariantClasses = (obj: MaybeRefOrGetter<ColorExtendables>) =>
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
      [`text-${props.textVariant}`]: props.textVariant !== null,
      [`bg-${props.bgVariant}`]: props.bgVariant !== null,
    }
  })

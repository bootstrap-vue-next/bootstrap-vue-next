import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {BorderColorVariant, ColorExtendables} from '../types/ColorTypes'

export const useColorVariantClasses = (
  obj: MaybeRefOrGetter<ColorExtendables & {borderVariant?: BorderColorVariant | null}>
) =>
  computed(() => {
    let props = toValue(obj)
    props = {
      variant: props.variant ?? null,
      bgVariant: props.bgVariant ?? null,
      textVariant: props.textVariant ?? null,
      borderVariant: props.borderVariant ?? null,
    }
    return {
      [`text-bg-${props.variant}`]: props.variant !== null,
      [`text-${props.textVariant}`]: props.textVariant !== null,
      [`bg-${props.bgVariant}`]: props.bgVariant !== null,
      [`border-${props.borderVariant}`]: props.borderVariant !== null,
    }
  })

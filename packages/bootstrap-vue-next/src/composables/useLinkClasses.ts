import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {LinkIconProps, LinkOpacityProps, LinkUnderlineProps, LinkVariantProps} from '../types'

export const useLinkClasses = (
  linkProps: MaybeRefOrGetter<
    LinkUnderlineProps & LinkOpacityProps & LinkIconProps & LinkVariantProps
  >
) =>
  computed(() => {
    const props = toValue(linkProps)
    return {
      [`link-${props.variant}`]: props.variant !== null,
      [`link-opacity-${props.opacity}`]: props.opacity !== undefined,
      [`link-opacity-${props.opacityHover}-hover`]: props.opacityHover !== undefined,
      [`link-underline-${props.underlineVariant}`]: props.underlineVariant !== null,
      [`link-offset-${props.underlineOffset}`]: props.underlineOffset !== undefined,
      [`link-offset-${props.underlineOffsetHover}-hover`]: props.underlineOffsetHover !== undefined,
      ['link-underline']:
        props.underlineVariant === null &&
        (props.underlineOpacity !== undefined || props.underlineOpacityHover !== undefined),
      [`link-underline-opacity-${props.underlineOpacity}`]: props.underlineOpacity !== undefined,
      [`link-underline-opacity-${props.underlineOpacityHover}-hover`]:
        props.underlineOpacityHover !== undefined,
      'icon-link': props.icon === true,
    }
  })

import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {RadiusElement, RadiusElementExtendables} from '../types/RadiusElement'

export const useRadiusElementClasses = (obj: MaybeRefOrGetter<RadiusElementExtendables>) => {
  const resolveRadiusElement = (
    value: true | RadiusElement,
    str: 'top' | 'bottom' | 'start' | 'end' | null
  ): string => {
    const strValue = str === null ? '' : `-${str}`

    return value === 'circle'
      ? `rounded${strValue}-circle`
      : value === 'pill'
        ? `rounded${strValue}-pill`
        : typeof value === 'number' ||
            value === '0' ||
            value === '1' ||
            value === '2' ||
            value === '3' ||
            value === '4' ||
            value === '5'
          ? `rounded${strValue}-${value}`
          : value === 'none'
            ? `rounded${strValue}-0`
            : value === 'sm'
              ? `rounded${strValue}-1`
              : value === 'lg'
                ? `rounded${strValue}-5`
                : `rounded${strValue}` // true is last
  }

  return computed(() => {
    const props = toValue(obj)

    return {
      [`${resolveRadiusElement(props.rounded as true | RadiusElement, null)}`]: !!props.rounded,
      [`${resolveRadiusElement(props.roundedTop as true | RadiusElement, 'top')}`]:
        !!props.roundedTop,
      [`${resolveRadiusElement(props.roundedBottom as true | RadiusElement, 'bottom')}`]:
        !!props.roundedBottom,
      [`${resolveRadiusElement(props.roundedStart as true | RadiusElement, 'start')}`]:
        !!props.roundedStart,
      [`${resolveRadiusElement(props.roundedEnd as true | RadiusElement, 'end')}`]:
        !!props.roundedEnd,
    }
  })
}

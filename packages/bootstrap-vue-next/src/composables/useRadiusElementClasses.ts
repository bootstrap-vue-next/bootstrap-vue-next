import {computed, type MaybeRefOrGetter, toValue} from 'vue'
import type {RadiusElement, RadiusElementExtendables} from '../types'

export default (obj: MaybeRefOrGetter<RadiusElementExtendables>) => {
  const resolveRadiusElement = (
    value: boolean | RadiusElement,
    str: 'top' | 'bottom' | 'start' | 'end' | null
  ): string => {
    const strValue = str === null ? '' : `${str}-`

    return value === 'circle'
      ? `${strValue}rounded-circle`
      : value === 'pill'
        ? `${strValue}rounded-pill`
        : typeof value === 'number' ||
            value === '0' ||
            value === '1' ||
            value === '2' ||
            value === '3' ||
            value === '4' ||
            value === '5'
          ? `${strValue}rounded-${value}`
          : value === 'none'
            ? `${strValue}rounded-0`
            : value === 'sm'
              ? `${strValue}rounded-1`
              : value === 'lg'
                ? `${strValue}rounded-5`
                : `${strValue}rounded` // true is last
  }

  return computed(() => {
    const props = toValue(obj)

    return {
      [`${resolveRadiusElement(props.rounded as boolean | RadiusElement, null)}`]: !!props.rounded,
      [`${resolveRadiusElement(props.roundedTop as boolean | RadiusElement, 'top')}`]:
        !!props.roundedTop,
      [`${resolveRadiusElement(props.roundedBottom as boolean | RadiusElement, 'bottom')}`]:
        !!props.roundedBottom,
      [`${resolveRadiusElement(props.roundedStart as boolean | RadiusElement, 'start')}`]:
        !!props.roundedStart,
      [`${resolveRadiusElement(props.roundedEnd as boolean | RadiusElement, 'end')}`]:
        !!props.roundedEnd,
    }
  })
}

import {computed, type MaybeRefOrGetter, readonly, toRef} from 'vue'
import type {RadiusElement, RadiusElementExtendables} from '../types'
import useBooleanish from './useBooleanish'

export default (obj: MaybeRefOrGetter<RadiusElementExtendables>) => {
  const resolveRadiusElement = (
    value: boolean | RadiusElement,
    str: 'top' | 'bottom' | 'start' | 'end' | null
  ): string => {
    const strValue = str === null ? '' : `${str}-`

    return value === 'circle' || value === false
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
      : value === true
      ? `${strValue}rounded-3`
      : `${strValue}rounded-5` // lg is last
  }

  const props = readonly(toRef(obj))
  const roundedBoolean = useBooleanish(() => props.value.rounded)
  const roundedTopBoolean = useBooleanish(() => props.value.roundedTop)
  const roundedBottomBoolean = useBooleanish(() => props.value.roundedBottom)
  const roundedStartBoolean = useBooleanish(() => props.value.roundedStart)
  const roundedEndBoolean = useBooleanish(() => props.value.roundedEnd)
  return computed(() => ({
    [`${resolveRadiusElement(roundedBoolean.value as boolean | RadiusElement, null)}`]:
      roundedBoolean.value !== undefined,
    [`${resolveRadiusElement(roundedTopBoolean.value as boolean | RadiusElement, 'top')}`]:
      roundedTopBoolean.value !== undefined,
    [`${resolveRadiusElement(roundedBottomBoolean.value as boolean | RadiusElement, 'bottom')}`]:
      roundedBottomBoolean.value !== undefined,
    [`${resolveRadiusElement(roundedStartBoolean.value as boolean | RadiusElement, 'start')}`]:
      roundedStartBoolean.value !== undefined,
    [`${resolveRadiusElement(roundedEndBoolean.value as boolean | RadiusElement, 'end')}`]:
      roundedEndBoolean.value !== undefined,
  }))
}

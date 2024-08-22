import {idPluginKey} from '../utils/keys'
import {computed, type ComputedRef, inject, type MaybeRefOrGetter, toValue} from 'vue'

export const useId = (
  id?: MaybeRefOrGetter<string | undefined>,
  suffix?: string
): ComputedRef<string> => computed(() => toValue(id) || getId(suffix))

export const getId = (suffix = '') => {
  const getId = inject(idPluginKey, () => Math.random().toString().slice(2, 8))
  return `__BVID__${getId()}___BV_${suffix}__`
}

import {computed, type ComputedRef, type MaybeRefOrGetter, toValue, useId as vueUseId} from 'vue'

export const useId = (
  id?: MaybeRefOrGetter<string | undefined>,
  suffix?: string
): ComputedRef<string> => {
  const genId = vueUseId()
  return computed(() => toValue(id) || `__BVID__${genId}___BV_${suffix}__`)
}

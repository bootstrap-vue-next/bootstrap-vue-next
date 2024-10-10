import {computed, type ComputedRef, type MaybeRefOrGetter, toValue, useId as vueUseId} from 'vue'
import {withBvnPrefix} from '../utils/withBvnPrefix'

export const useId = (
  id?: MaybeRefOrGetter<string | undefined>,
  suffix?: string
): ComputedRef<string> => {
  const genId = vueUseId()
  return computed(() => toValue(id) || withBvnPrefix(genId || '', suffix))
}

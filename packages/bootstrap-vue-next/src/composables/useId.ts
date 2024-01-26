import {getId} from '../utils'
import {
  computed,
  type ComputedRef,
  type MaybeRefOrGetter,
  nextTick,
  onMounted,
  ref,
  toValue,
} from 'vue'

export default (
  id?: MaybeRefOrGetter<string | undefined>,
  suffix?: string
): ComputedRef<string | null> => {
  const localId = ref(toValue(id) || null)

  onMounted(() =>
    nextTick(() => {
      debugger
      if (!localId.value) {
        localId.value = getId(suffix)
      }
    })
  )

  return computed(() => toValue(id) || localId.value)
}

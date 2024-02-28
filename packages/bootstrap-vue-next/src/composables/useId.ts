import {getId} from '../utils'
import {computed, type ComputedRef, type MaybeRefOrGetter, onMounted, ref, toValue} from 'vue'

export default (
  id?: MaybeRefOrGetter<string | undefined>,
  suffix?: string
): ComputedRef<string | undefined> => {
  const localId = ref(toValue(id) || undefined)

  onMounted(() => {
    if (!localId.value) {
      localId.value = getId(suffix)
    }
  })

  return computed(() => toValue(id) || localId.value)
}

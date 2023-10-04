import {type MaybeRefOrGetter, onMounted, toValue, watch} from 'vue'
import {useScrollLock} from '@vueuse/core'

export default (
  isOpen: MaybeRefOrGetter<boolean>,
  bodyScrollLockingDisabled: MaybeRefOrGetter<boolean>
) => {
  onMounted(() => {
    const isLocked = useScrollLock(
      document.body,
      toValue(isOpen) && !toValue(bodyScrollLockingDisabled)
    )

    watch([isOpen, bodyScrollLockingDisabled], ([modelVal, bodyVal]) => {
      isLocked.value = toValue(modelVal) && !toValue(bodyVal)
    })
  })
}

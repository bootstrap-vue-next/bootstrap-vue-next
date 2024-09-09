import {computed, type MaybeRefOrGetter, onMounted, readonly, toRef, toValue, watch} from 'vue'
import {useScrollLock} from '@vueuse/core'

export const useSafeScrollLock = (
  isOpen: MaybeRefOrGetter<boolean>,
  bodyScroll: MaybeRefOrGetter<boolean>
) => {
  const resolvedIsOpen = readonly(toRef(isOpen))

  /**
   * We use the inverse because bodyScrolling === true means we allow scrolling, while bodyScrolling === false means we disallow
   */
  const inverseBodyScrollingValue = computed(() => !toValue(bodyScroll))

  onMounted(() => {
    const isLocked = useScrollLock(
      document.body,
      resolvedIsOpen.value && inverseBodyScrollingValue.value
    )

    watch([resolvedIsOpen, inverseBodyScrollingValue], ([modelVal, bodyVal]) => {
      isLocked.value = modelVal && bodyVal
    })
  })
}

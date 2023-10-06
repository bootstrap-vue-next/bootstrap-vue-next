import {type MaybeRefOrGetter, onMounted, readonly, toRef, watch} from 'vue'
import {useScrollLock} from '@vueuse/core'

export default (isOpen: MaybeRefOrGetter<boolean>, bodyScroll: MaybeRefOrGetter<boolean>) => {
  const resolvedIsOpen = readonly(toRef(isOpen))
  const resolvedBodyScrolling = readonly(toRef(bodyScroll))

  /**
   * We use the inverse because bodyScrolling === true means we allow scrolling, while bodyScrolling === false means we disallow
   */
  const inverseBodyScrollingValue = toRef(() => !resolvedBodyScrolling.value)

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

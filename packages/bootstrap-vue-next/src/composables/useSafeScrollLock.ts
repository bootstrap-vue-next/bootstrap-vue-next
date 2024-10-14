import {
  computed,
  type MaybeRefOrGetter,
  onMounted,
  onUnmounted,
  readonly,
  toRef,
  toValue,
  useId,
  watch,
} from 'vue'
import {useScrollLock} from './useScrollLock'

let prevousRightPadding = ''
const lockRegistry = new Map()

export const useSafeScrollLock = (
  isOpen: MaybeRefOrGetter<boolean>,
  bodyScroll: MaybeRefOrGetter<boolean>
) => {
  const resolvedIsOpen = readonly(toRef(isOpen))
  const id = useId()

  /**
   * We use the inverse because bodyScrolling === true means we allow scrolling, while bodyScrolling === false means we disallow
   */
  const inverseBodyScrollingValue = computed(() => !toValue(bodyScroll))

  onMounted(() => {
    lockRegistry.set(id, false)
    const isLocked = useScrollLock(
      document.body,
      resolvedIsOpen.value && inverseBodyScrollingValue.value
    )

    watch(
      [resolvedIsOpen, inverseBodyScrollingValue],
      ([modelVal, bodyVal]) => {
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth
        const hasLocked = Array.from(lockRegistry.values()).some((val) => val === true)

        const myLocked = modelVal && bodyVal
        lockRegistry.set(id, myLocked)

        if (myLocked && !hasLocked && !isLocked.value) {
          isLocked.value = true
          if (scrollBarGap > 0) {
            prevousRightPadding = document.body.style.paddingRight
            document.body.style.paddingRight = `${scrollBarGap + prevousRightPadding}px`
          }
        }
        const hasLockedAfter = Array.from(lockRegistry.values()).some((val) => val === true)

        if (hasLocked && !hasLockedAfter) {
          lockRegistry.set(id, false)
          isLocked.value = false
          document.body.style.paddingRight = prevousRightPadding
        }
      },
      {immediate: true}
    )
  })
  onUnmounted(() => {
    lockRegistry.delete(id)
  })
}

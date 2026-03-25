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
import {getSafeDocument, getSafeWindow} from '../utils/dom.ts'

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

  const isLocked = useScrollLock(
    getSafeDocument()?.body ?? null,
    resolvedIsOpen.value && inverseBodyScrollingValue.value
  )
  onMounted(() => {
    if (getSafeDocument() === null) return
    lockRegistry.set(id, false)

    watch(
      [resolvedIsOpen, inverseBodyScrollingValue],
      ([modelVal, bodyVal]) => {
        const doc = getSafeDocument()
        const windowInnerWidth = getSafeWindow()?.innerWidth ?? 0
        const documentClientWidth = doc?.documentElement.clientWidth ?? 0
        const scrollBarGap = windowInnerWidth - documentClientWidth
        const hasLocked = Array.from(lockRegistry.values()).some((val) => val === true)

        const myLocked = modelVal && bodyVal
        lockRegistry.set(id, myLocked)

        if (myLocked && !hasLocked && !isLocked.value) {
          isLocked.value = true
          if (scrollBarGap > 0 && doc) {
            prevousRightPadding = doc.body.style.paddingRight
            doc.body.style.paddingRight = `${scrollBarGap + prevousRightPadding}px`
          }
        }
        const hasLockedAfter = Array.from(lockRegistry.values()).some((val) => val === true)

        if (hasLocked && !hasLockedAfter && doc) {
          lockRegistry.set(id, false)
          isLocked.value = false
          doc.body.style.paddingRight = prevousRightPadding
        }
      },
      {immediate: true}
    )
  })
  onUnmounted(() => {
    lockRegistry.delete(id)

    const hasLockedAfter = Array.from(lockRegistry.values()).some((val) => val === true)
    const doc = getSafeDocument()
    if (!hasLockedAfter && doc) {
      doc.body.style.paddingRight = prevousRightPadding
      isLocked.value = false
    }
  })
}

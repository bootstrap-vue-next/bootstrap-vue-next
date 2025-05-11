import {useToNumber} from '@vueuse/core'
import type {Numberish} from '../types/CommonTypes'
import {
  computed,
  type CSSProperties,
  type MaybeRefOrGetter,
  nextTick,
  onMounted,
  ref,
  type ShallowRef,
  toValue,
} from 'vue'
import {isVisible} from '../utils/dom'

export const useTextareaResize = (
  input: Readonly<ShallowRef<HTMLTextAreaElement | null>>,
  {
    maxRows,
    noAutoShrink,
    rows,
  }: {
    rows: MaybeRefOrGetter<Numberish>
    maxRows: MaybeRefOrGetter<Numberish | undefined>
    noAutoShrink: MaybeRefOrGetter<boolean>
  }
) => {
  const height = ref<number | null | string>(0)
  const maxRowsNumber = useToNumber(
    computed(() => toValue(maxRows) || NaN),
    {
      method: 'parseInt',
      nanToZero: true,
    }
  )
  const rowsNumber = useToNumber(rows, {
    method: 'parseInt',
    nanToZero: true,
  })
  const computedMinRows = computed(() => Math.max(rowsNumber.value || 2, 2))
  const computedMaxRows = computed(() => Math.max(computedMinRows.value, maxRowsNumber.value || 0))
  const computedRows = computed(() =>
    computedMinRows.value === computedMaxRows.value ? computedMinRows.value : null
  )

  const handleHeightChange = async () => {
    // Element must be visible (not hidden) and in document
    // Must be checked after above checks
    if (!input.value || !isVisible(input.value)) {
      height.value = null
      return
    }

    // Get current computed styles
    const computedStyle = getComputedStyle(input.value)
    // Height of one line of text in px
    const lineHeight = Number.parseFloat(computedStyle.lineHeight) || 1
    // Calculate height of border and padding
    const border =
      (Number.parseFloat(computedStyle.borderTopWidth) || 0) +
      (Number.parseFloat(computedStyle.borderBottomWidth) || 0)
    const padding =
      (Number.parseFloat(computedStyle.paddingTop) || 0) +
      (Number.parseFloat(computedStyle.paddingBottom) || 0)
    // Calculate offset
    const offset = border + padding
    // Minimum height for min rows (which must be 2 rows or greater for cross-browser support)
    const minHeight = lineHeight * computedMinRows.value + offset

    // Get the current style height (with `px` units)
    const oldHeight = input.value.style.height || computedStyle.height
    // Probe scrollHeight by temporarily changing the height to `auto`
    height.value = 'auto'
    await nextTick() // We need to wait for the dom to update. These cannot be batched in the same tick
    const {scrollHeight} = input.value
    // Place the original old height back on the element, just in case `computedProp`
    // returns the same value as before
    height.value = oldHeight
    await nextTick() // We need to wait for the dom to update. These cannot be batched in the same tick

    // Calculate content height in 'rows' (scrollHeight includes padding but not border)
    const contentRows = Math.max((scrollHeight - padding) / lineHeight, 2)
    // Calculate number of rows to display (limited within min/max rows)
    const rows = Math.min(Math.max(contentRows, computedMinRows.value), computedMaxRows.value)
    // Calculate the required height of the textarea including border and padding (in pixels)
    const newHeight = Math.max(Math.ceil(rows * lineHeight + offset), minHeight)

    // Computed height remains the larger of `oldHeight` and new `height`,
    // when height is in `sticky` mode (prop `no-auto-shrink` is true)
    if (toValue(noAutoShrink) && (Number.parseFloat(oldHeight.toString()) || 0) > newHeight) {
      height.value = oldHeight
      return
    }

    // Return the new computed CSS height in px units
    height.value = `${newHeight}px`
  }

  onMounted(handleHeightChange)

  const computedStyles = computed<CSSProperties>(() => ({
    resize: 'none',
    height:
      typeof height.value === 'string'
        ? height.value
        : height.value
          ? `${height.value}px`
          : undefined,
  }))

  return {
    onInput: handleHeightChange,
    computedStyles,
    computedRows,
  }
}

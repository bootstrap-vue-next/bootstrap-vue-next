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
    computed(() => toValue(maxRows) || Number.NaN),
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

  const handleHeightChange = () => {
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
    // Save the current inline style height for restoration after probing
    const oldStyleHeight = input.value.style.height
    // Probe scrollHeight by temporarily changing the height to `auto`
    // Use direct DOM manipulation to avoid triggering reactive re-renders
    // that would overwrite the textarea's value (e.g. when v-model.trim is used)
    input.value.style.height = 'auto'
    // Reading scrollHeight forces a synchronous browser reflow
    const {scrollHeight} = input.value
    // Restore the original inline style height
    input.value.style.height = oldStyleHeight

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

    // Save current textarea state before updating reactive height
    // This ensures we can restore the value if a re-render overwrites it
    // (e.g. when v-model.trim removes trailing whitespace during typing)
    const savedValue = input.value.value
    const savedSelectionStart = input.value.selectionStart
    const savedSelectionEnd = input.value.selectionEnd

    // Return the new computed CSS height in px units
    height.value = `${newHeight}px`

    // If height changed, the re-render may overwrite the textarea's DOM value
    // with the trimmed modelValue. Restore it after the render completes.
    if (`${newHeight}px` !== oldHeight) {
      nextTick(() => {
        if (input.value && input.value.value !== savedValue) {
          input.value.value = savedValue
          input.value.selectionStart = savedSelectionStart
          input.value.selectionEnd = savedSelectionEnd
        }
      })
    }
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

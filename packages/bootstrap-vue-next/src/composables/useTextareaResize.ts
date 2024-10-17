import {useToNumber} from '@vueuse/core'
import type {Numberish} from '../types/CommonTypes'
import {
  computed,
  type CSSProperties,
  type MaybeRefOrGetter,
  onMounted,
  ref,
  type Ref,
  toRef,
} from 'vue'

export const useTextareaResize = (
  input: Ref<HTMLInputElement | null>,
  props: MaybeRefOrGetter<{
    rows: Numberish
    maxRows: Numberish | undefined
    noAutoShrink: boolean
  }>
) => {
  const height = ref<number | null>(0)
  const resolvedProps = toRef(props)
  const maxRows = useToNumber(() => resolvedProps.value.maxRows || NaN, {
    method: 'parseInt',
    nanToZero: true,
  })
  const minRows = useToNumber(() => resolvedProps.value.rows || NaN, {
    method: 'parseInt',
    nanToZero: true,
  })

  const computeHeight = () => {
    if (!input.value) {
      height.value = null
    }
    const el = this.$el

    // Element must be visible (not hidden) and in document
    // Must be checked after above checks
    if (!isVisible(el)) {
      return null
    }

    // Get current computed styles
    const computedStyle = getCS(el)
    // Height of one line of text in px
    const lineHeight = toFloat(computedStyle.lineHeight, 1)
    // Calculate height of border and padding
    const border =
      toFloat(computedStyle.borderTopWidth, 0) + toFloat(computedStyle.borderBottomWidth, 0)
    const padding = toFloat(computedStyle.paddingTop, 0) + toFloat(computedStyle.paddingBottom, 0)
    // Calculate offset
    const offset = border + padding
    // Minimum height for min rows (which must be 2 rows or greater for cross-browser support)
    const minHeight = lineHeight * this.computedMinRows + offset

    // Get the current style height (with `px` units)
    const oldHeight = getStyle(el, 'height') || computedStyle.height
    // Probe scrollHeight by temporarily changing the height to `auto`
    setStyle(el, 'height', 'auto')
    const {scrollHeight} = el
    // Place the original old height back on the element, just in case `computedProp`
    // returns the same value as before
    setStyle(el, 'height', oldHeight)

    // Calculate content height in 'rows' (scrollHeight includes padding but not border)
    const contentRows = mathMax((scrollHeight - padding) / lineHeight, 2)
    // Calculate number of rows to display (limited within min/max rows)
    const rows = mathMin(mathMax(contentRows, this.computedMinRows), this.computedMaxRows)
    // Calculate the required height of the textarea including border and padding (in pixels)
    const height = mathMax(mathCeil(rows * lineHeight + offset), minHeight)

    // Computed height remains the larger of `oldHeight` and new `height`,
    // when height is in `sticky` mode (prop `no-auto-shrink` is true)
    if (this.noAutoShrink && toFloat(oldHeight, 0) > height) {
      return oldHeight
    }

    // Return the new computed CSS height in px units
    return `${height}px`
  }

  onMounted(handleHeightChange)

  const computedStyles = computed<CSSProperties>(() => ({
    resize: 'none',
    height: height.value ? `${height.value}px` : undefined,
  }))

  return {
    onInput: handleHeightChange,
    computedStyles,
  }
}

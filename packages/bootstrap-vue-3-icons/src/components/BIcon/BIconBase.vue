<template>
  <svg :class="computedClasses" v-bind="computedAttrs" :style="computedStyle">
    <title v-if="$slots.title || title">
      <slot name="title">
      {{ title }}
      </slot>
    </title>
    <!-- Both hasShift and stacked -->
    <g v-if="hasShift && stacked">
      <g :transform="computedTranslatedShift">
        <!-- Main -->
        <g :transform="svgTransform">
          <slot />
        </g>
      </g>
    </g>
    <!-- Stacked only -->
    <g v-else-if="stacked">
      <g :transform="svgTransform">
        <!-- Main -->
        <slot />
      </g>
    </g>
    <!-- hasShift only -->
    <g v-else-if="hasShift" :transform="computedTranslatedShift">
      <!-- Main -->
      <g :transform="svgTransform">
        <slot />
      </g>
    </g>
    <!-- Neither hasShift nor stacked -->
    <g v-else :transform="svgTransform">
      <slot />
    </g>
  </svg>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Animation, IconSize, TextColorVariant} from '../../types'
import {toFloat} from '../../utils/number'

interface Props {
  animation?: Animation
  class?: Array<unknown> | Record<string, unknown> | string
  flipH?: boolean
  flipV?: boolean
  fontScale?: number | string
  rotate?: string | number
  scale?: number | string
  shiftH?: number | string
  shiftV?: number | string
  size?: IconSize
  stacked?: boolean
  title?: string
  variant?: TextColorVariant
}

const props = withDefaults(defineProps<Props>(), {
  flipH: false,
  flipV: false,
  fontScale: 1,
  scale: 1,
  shiftH: 0,
  shiftV: 0,
  stacked: false,
})

const computedFontScale = computed(() => Math.max(toFloat(props.fontScale, 1), 0) || 1)
const computedScale = computed(() => Math.max(toFloat(props.scale, 1), 0) || 1)
const computedShiftH = computed(() => toFloat(props.shiftH, 0))
const computedShiftV = computed(() => toFloat(props.shiftV, 0))

const hasScale = computed(() => props.flipH || props.flipV || computedScale.value !== 1)
const hasShift = computed(() => computedShiftH.value || computedShiftV.value)
const hasTransforms = computed(() => hasScale.value || props.rotate)

const transforms = computed(() =>
  [
    hasTransforms.value ? 'translate(8 8)' : null,
    hasTransforms.value ? 'translate(-8 -8)' : null,
    hasScale.value
      ? `scale(${(props.flipH ? -1 : 1) * computedScale.value} ${
          (props.flipV ? -1 : 1) * computedScale.value
        })`
      : null,
    props.rotate ? `rotate(${props.rotate})` : null,
  ].filter((p) => p)
)

const computedClasses = computed(() => [
  'bootstrap-icon',
  props.class,
  {
    [`bootstrap-icon--variant-${props.variant}`]: props.variant !== undefined,
    [`bootstrap-icon--size-${props.size}`]: props.size !== undefined,
    [`bootstrap-icon--animation-${props.animation}`]: props.animation !== undefined,
  },
])

const computedTranslatedShift = computed(
  () => `translate(${computedShiftH.value} ${-1 * computedShiftV.value})`
)

const computedStyle = computed(() => ({
  'font-size':
    !props.stacked || computedFontScale.value === 1
      ? undefined
      : `${computedFontScale.value * 100}%`,
}))

const computedAttrs = computed(() => {
  const baseAttrs = {
    viewBox: '0 0 16 16',
    // 'width': '1em',
    // 'height': '1em',
    // 'focusable': 'false',
    // 'role': 'img',
    // 'aria-label': 'icon',
    // 'xmlns': 'http://www.w3.org/2000/svg',
  }
  return !props.stacked
    ? {
        ...baseAttrs,
        'width': '1em',
        'height': '1em',
        'focusable': 'false',
        'role': 'img',
        'aria-label': 'icon',
        'xmlns': 'http://www.w3.org/2000/svg',
      }
    : baseAttrs
})

const svgTransform = computed(() => transforms.value.join(' ') || undefined)
</script>

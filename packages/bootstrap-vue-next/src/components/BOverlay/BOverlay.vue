<template>
  <component :is="wrapTag" class="b-overlay-wrap position-relative" :aria-busy="computedAriaBusy">
    <slot />
    <BTransition
      :no-fade="noFade"
      :trans-props="{enterToClass: 'show'}"
      name="fade"
      @on-after-enter="emit('shown')"
      @on-after-leave="emit('hidden')"
    >
      <component
        :is="overlayTag"
        v-if="showBoolean"
        class="b-overlay"
        :class="overlayClasses"
        :style="overlayStyles"
        @click="emit('click', $event)"
      >
        <div class="position-absolute" :class="blurClasses" :style="blurStyles" />

        <div class="position-absolute" :style="spinWrapperStyles">
          <slot name="overlay" v-bind="spinnerAttrs">
            <BSpinner v-if="!noSpinnerBoolean" v-bind="spinnerAttrs" />
          </slot>
        </div>
      </component>
    </BTransition>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Booleanish, ColorVariant, SpinnerType} from '../../types'
import {useBooleanish} from '../../composables'
import BTransition from '../BTransition/BTransition.vue'
import BSpinner from '../BSpinner.vue'

const props = withDefaults(
  defineProps<{
    bgColor?: string
    blur?: string | null
    fixed?: Booleanish
    noCenter?: Booleanish
    noFade?: Booleanish
    noWrap?: Booleanish
    opacity?: number | string
    overlayTag?: string
    rounded?: boolean | string
    show?: Booleanish
    spinnerSmall?: Booleanish
    spinnerType?: SpinnerType
    spinnerVariant?: ColorVariant | null
    noSpinner?: Booleanish
    variant?: ColorVariant | 'white' | 'transparent' | null
    wrapTag?: string
    zIndex?: number | string
  }>(),
  {
    blur: '2px',
    bgColor: undefined,
    spinnerVariant: undefined,
    fixed: false,
    noCenter: false,
    noSpinner: false,
    noFade: false,
    noWrap: false,
    opacity: 0.85,
    overlayTag: 'div',
    rounded: false,
    show: false,
    spinnerSmall: false,
    spinnerType: 'border',
    variant: 'light',
    wrapTag: 'div',
    zIndex: 10,
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
  hidden: []
  shown: []
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  overlay?: (props: typeof spinnerAttrs.value) => any
}>()

const positionStyles = {top: 0, left: 0, bottom: 0, right: 0}

const fixedBoolean = useBooleanish(() => props.fixed)
const noSpinnerBoolean = useBooleanish(() => props.noSpinner)
const noCenterBoolean = useBooleanish(() => props.noCenter)
const noWrapBoolean = useBooleanish(() => props.noWrap)
const showBoolean = useBooleanish(() => props.show)
const spinnerSmallBoolean = useBooleanish(() => props.spinnerSmall)

const computedRounded = computed(() =>
  props.rounded === true || props.rounded === ''
    ? 'rounded'
    : props.rounded === false
    ? ''
    : `rounded-${props.rounded}`
)

const computedVariant = computed(() =>
  props.variant !== null && !props.bgColor ? `bg-${props.variant}` : ''
)

const computedAriaBusy = computed(() => (showBoolean.value ? true : null))

const spinnerAttrs = computed(() => ({
  type: props.spinnerType,
  variant: props.spinnerVariant,
  small: spinnerSmallBoolean.value,
}))

const overlayStyles = computed(() => ({
  ...positionStyles,
  zIndex: props.zIndex || 10,
}))

const overlayClasses = computed(() => ({
  'position-absolute': !noWrapBoolean.value || !fixedBoolean.value,
  'position-fixed': noWrapBoolean.value && fixedBoolean.value,
}))

const blurClasses = computed(() => [computedVariant.value, computedRounded.value])

const blurStyles = computed(() => ({
  ...positionStyles,
  opacity: props.opacity,
  backgroundColor: props.bgColor || undefined,
  backdropFilter: props.blur ? `blur(${props.blur})` : undefined,
}))

const spinWrapperStyles = computed(() =>
  noCenterBoolean.value
    ? positionStyles
    : {
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
      }
)
</script>

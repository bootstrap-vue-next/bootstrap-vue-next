<template>
  <component :is="wrapTag" class="b-overlay-wrap position-relative" :aria-busy="computedAriaBusy">
    <slot />
    <b-transition
      :no-fade="noFade"
      :trans-props="{enterToClass: 'show'}"
      name="fade"
      @on-after-enter="emit('shown')"
      @on-after-leave="emit('hidden')"
    >
      <component
        :is="overlayTag"
        v-if="showBoolean"
        :class="overlayClasses"
        :style="overlayStyles"
        @click="emit('click', $event)"
      >
        <div class="position-absolute" :class="blurClasses" :style="blurStyles" />

        <div class="position-absolute" :style="spinWrapperStyles">
          <slot name="overlay" v-bind="spinnerAttrs">
            <b-spinner v-bind="spinnerAttrs" />
          </slot>
        </div>
      </component>
    </b-transition>
  </component>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'
import type {Booleanish, ColorVariant, SpinnerType} from '../../types'
import {useBooleanish} from '../../composables'
import BTransition from '../BTransition/BTransition.vue'
import BSpinner from '../BSpinner.vue'

interface Props {
  bgColor?: string
  blur?: string
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
  spinnerVariant?: ColorVariant
  variant?:
    | 'transparent'
    | 'white'
    | 'light'
    | 'dark'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info' // ColorVariant | 'white' | 'transparent'
  wrapTag?: string
  zIndex?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  blur: '2px',
  fixed: false,
  noCenter: false,
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
})

interface Emits {
  (e: 'click', value: MouseEvent): void
  (e: 'hidden'): void
  (e: 'shown'): void
}

const emit = defineEmits<Emits>()

const positionStyles = {top: 0, left: 0, bottom: 0, right: 0}

const fixedBoolean = useBooleanish(toRef(props, 'fixed'))
const noCenterBoolean = useBooleanish(toRef(props, 'noCenter'))
const noWrapBoolean = useBooleanish(toRef(props, 'noWrap'))
const showBoolean = useBooleanish(toRef(props, 'show'))
const spinnerSmallBoolean = useBooleanish(toRef(props, 'spinnerSmall'))

const computedRounded = computed(() =>
  props.rounded === true || props.rounded === ''
    ? 'rounded'
    : props.rounded === false
    ? ''
    : `rounded-${props.rounded}`
)

const computedVariant = computed(() =>
  props.variant && !props.bgColor ? `bg-${props.variant}` : ''
)

const computedAriaBusy = computed(() => (showBoolean.value ? 'true' : null))

const spinnerAttrs = computed(() => ({
  type: props.spinnerType || undefined,
  variant: props.spinnerVariant || undefined,
  small: spinnerSmallBoolean.value,
}))

const overlayStyles = computed(() => ({
  ...positionStyles,
  zIndex: props.zIndex || 10,
}))

const overlayClasses = computed(() => [
  'b-overlay',
  {
    'position-absolute': !noWrapBoolean.value || !fixedBoolean.value,
    'position-fixed': noWrapBoolean.value && fixedBoolean.value,
  },
])

const blurClasses = computed(() => [computedVariant.value, computedRounded.value])

const blurStyles = computed(() => ({
  ...positionStyles,
  opacity: props.opacity,
  backgroundColor: props.bgColor || undefined,
  backdropFilter: blur ? `blur(${blur})` : undefined,
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

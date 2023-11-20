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
import {computed, toRef} from 'vue'
import type {Booleanish, ColorVariant, RadiusElementExtendables, SpinnerType} from '../../types'
import {useBooleanish, useRadiusElementClasses} from '../../composables'
import BTransition from '../BTransition/BTransition.vue'
import BSpinner from '../BSpinner.vue'

const props = withDefaults(
  defineProps<
    {
      bgColor?: string
      blur?: string | null
      fixed?: Booleanish
      noCenter?: Booleanish
      noFade?: Booleanish
      noSpinner?: Booleanish
      noWrap?: Booleanish
      opacity?: number | string
      overlayTag?: string
      show?: Booleanish
      spinnerSmall?: Booleanish
      spinnerType?: SpinnerType
      spinnerVariant?: ColorVariant | null
      variant?: ColorVariant | 'white' | 'transparent' | null
      wrapTag?: string
      zIndex?: number | string
    } & RadiusElementExtendables
  >(),
  {
    blur: '2px',
    bgColor: undefined,
    fixed: false,
    noCenter: false,
    noFade: false,
    noSpinner: false,
    noWrap: false,
    opacity: 0.85,
    overlayTag: 'div',
    show: false,
    spinnerSmall: false,
    spinnerType: 'border',
    spinnerVariant: undefined,
    variant: 'light',
    wrapTag: 'div',
    zIndex: 10,
    // RadiusElementExtendables props
    rounded: false,
    roundedBottom: undefined,
    roundedEnd: undefined,
    roundedStart: undefined,
    roundedTop: undefined,
    // End RadiusElementExtendables props
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

const positionStyles = {top: 0, left: 0, bottom: 0, right: 0} as const

const fixedBoolean = useBooleanish(() => props.fixed)
const noSpinnerBoolean = useBooleanish(() => props.noSpinner)
const noCenterBoolean = useBooleanish(() => props.noCenter)
const noWrapBoolean = useBooleanish(() => props.noWrap)
const showBoolean = useBooleanish(() => props.show)
const spinnerSmallBoolean = useBooleanish(() => props.spinnerSmall)
const roundedBoolean = useBooleanish(() => props.rounded)
const roundedTopBoolean = useBooleanish(() => props.roundedTop)
const roundedBottomBoolean = useBooleanish(() => props.roundedBottom)
const roundedStartBoolean = useBooleanish(() => props.roundedStart)
const roundedEndBoolean = useBooleanish(() => props.roundedEnd)

const radiusElementClasses = useRadiusElementClasses(() => ({
  rounded: roundedBoolean.value,
  roundedTop: roundedTopBoolean.value,
  roundedBottom: roundedBottomBoolean.value,
  roundedStart: roundedStartBoolean.value,
  roundedEnd: roundedEndBoolean.value,
}))

const computedVariant = toRef(() =>
  props.variant !== null && !props.bgColor ? `bg-${props.variant}` : ''
)

const computedAriaBusy = toRef(() => (showBoolean.value ? true : null))

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

const blurClasses = computed(() => [computedVariant.value, radiusElementClasses.value])

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

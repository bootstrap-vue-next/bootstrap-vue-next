<template>
  <ConditionalWrapper
    :tag="props.wrapTag"
    class="b-overlay-wrap position-relative"
    :aria-busy="computedAriaBusy"
    :skip="props.noWrap"
  >
    <slot />
    <Transition
      v-bind="fadeTransitions"
      enter-to-class="show"
      name="fade"
      @after-enter="emit('shown')"
      @after-leave="emit('hidden')"
    >
      <component
        :is="props.overlayTag"
        v-if="props.show"
        class="b-overlay"
        :class="overlayClasses"
        :style="overlayStyles"
        @click="emit('click', $event)"
      >
        <div class="position-absolute" :class="blurClasses" :style="blurStyles" />

        <div class="position-absolute" :style="spinWrapperStyles">
          <slot name="overlay" v-bind="spinnerAttrs">
            <BSpinner v-if="!props.noSpinner" v-bind="spinnerAttrs" />
          </slot>
        </div>
      </component>
    </Transition>
  </ConditionalWrapper>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BOverlayProps} from '../../types/ComponentProps'
import {useDefaults} from '../../composables/useDefaults'
import BSpinner from '../BSpinner/BSpinner.vue'
import ConditionalWrapper from '../ConditionalWrapper.vue'
import {useRadiusElementClasses} from '../../composables/useRadiusElementClasses'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'
import type {BgColorVariant} from '../../types/ColorTypes'
import {useFadeTransition} from '../../composables/useTransitions'

const _props = withDefaults(defineProps<BOverlayProps>(), {
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
})
const props = useDefaults(_props, 'BOverlay')

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

const fadeTransitions = useFadeTransition(() => !props.noFade)

const radiusElementClasses = useRadiusElementClasses(() => ({
  rounded: props.rounded,
  roundedTop: props.roundedTop,
  roundedBottom: props.roundedBottom,
  roundedStart: props.roundedStart,
  roundedEnd: props.roundedEnd,
}))

const computedAriaBusy = computed(() => (props.show ? true : null))

const spinnerAttrs = computed(() => ({
  type: props.spinnerType,
  variant: props.spinnerVariant,
  small: props.spinnerSmall,
}))

const overlayStyles = computed(() => ({
  ...positionStyles,
  zIndex: props.zIndex || 10,
}))

const overlayClasses = computed(() => ({
  'position-absolute': !props.noWrap || !props.fixed,
  'position-fixed': props.noWrap && props.fixed,
}))

const colorClasses = useColorVariantClasses(
  computed(() => ({
    bgVariant: props.variant !== null && !props.bgColor ? (props.variant as BgColorVariant) : null,
  }))
)
const blurClasses = computed(() => [colorClasses.value, radiusElementClasses.value])

const blurStyles = computed(() => ({
  ...positionStyles,
  opacity: props.opacity,
  backgroundColor: props.bgColor || undefined,
  backdropFilter:
    props.blur && !props.bgColor && (props.variant === 'white' || props.variant === 'transparent')
      ? `blur(${props.blur})`
      : undefined,
}))

const spinWrapperStyles = computed(() =>
  props.noCenter
    ? positionStyles
    : {
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
      }
)
</script>

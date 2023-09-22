<template>
  <BTransition :no-fade="noFadeBoolean">
    <div
      v-if="isToastVisible"
      :id="id"
      ref="element"
      class="toast"
      :class="[toastClass, computedClasses]"
      tabindex="0"
      :role="!isToastVisible ? undefined : isStatusBoolean ? 'status' : 'alert'"
      :aria-live="!isToastVisible ? undefined : isStatusBoolean ? 'polite' : 'assertive'"
      :aria-atomic="!isToastVisible ? undefined : true"
    >
      <component :is="headerTag" v-if="$slots.title || title" class="toast-header">
        <slot name="title" :hide="hide">
          <strong class="me-auto">
            {{ title }}
          </strong>
        </slot>
        <BCloseButton v-if="!noCloseButtonBoolean" @click="hide" />
      </component>
      <template v-if="$slots.default || body">
        <component
          :is="computedTag"
          class="toast-body"
          style="display: block"
          :class="bodyClass"
          v-bind="computedLinkProps"
          @click="computedLink ? hide : () => {}"
        >
          <slot :hide="hide">
            {{ body }}
          </slot>
        </component>
      </template>
      <BProgress
        v-if="typeof modelValue === 'number' && progressProps !== undefined"
        :animated="progressProps.animated"
        :precision="progressProps.precision"
        :show-progress="progressProps.showProgress"
        :show-value="progressProps.showValue"
        :striped="progressProps.striped"
        :variant="progressProps.variant"
        :max="modelValue"
        :value="remainingMs"
        height="4px"
      />
    </div>
  </BTransition>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, ref, toRef, watch, watchEffect} from 'vue'
import {useBackgroundVariant, useBLinkHelper, useBooleanish, useCountdown} from '../../composables'
import type {BToastProps} from '../../types'
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BLink from '../BLink/BLink.vue'
import {useElementHover, useToNumber, useVModel} from '@vueuse/core'
import BProgress from '../BProgress/BProgress.vue'

// TODO scheduling issue -- when multiple are opened in quick succession, and closed in quick succession,
// Find index can get lost, leading to one or multiple staying orphaned
// TODO appendToast from BToaster

const props = withDefaults(defineProps<BToastProps>(), {
  bgVariant: null,
  textVariant: null,
  delay: 5000,
  bodyClass: undefined,
  body: undefined,
  headerClass: undefined,
  headerTag: 'div',
  animation: true,
  id: undefined,
  isStatus: false,
  autoHide: true,
  noCloseButton: false,
  noFade: false,
  noHoverPause: false,
  solid: false,
  title: undefined,
  modelValue: false,
  toastClass: undefined,
  variant: null,
  showOnPause: true,
  interval: 1000,
  progressProps: undefined,
  // Link props
  active: undefined,
  activeClass: undefined,
  append: false,
  href: undefined,
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel: undefined,
  replace: false,
  disabled: false,
  routerComponentName: 'router-link',
  target: '_self',
  to: undefined,
  opacity: undefined,
  opacityHover: undefined,
  underlineVariant: null,
  underlineOffset: undefined,
  underlineOffsetHover: undefined,
  underlineOpacity: undefined,
  underlineOpacityHover: undefined,
})

const emit = defineEmits<{
  'destroyed': []
  'close': []
  'closed': []
  'close-countdown': [value: number]
  'update:modelValue': [value: boolean | number]
}>()

const element = ref<HTMLElement | null>(null)

const isHovering = useElementHover(element)
const modelValue = useVModel(props, 'modelValue', emit)

const {computedLink, computedLinkProps} = useBLinkHelper(props)

// TODO animation is never used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const animationBoolean = useBooleanish(() => props.animation)
const isStatusBoolean = useBooleanish(() => props.isStatus)
// TODO autohide is never used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const autoHideBoolean = useBooleanish(() => props.autoHide)
const noCloseButtonBoolean = useBooleanish(() => props.noCloseButton)
const noFadeBoolean = useBooleanish(() => props.noFade)
const noHoverPauseBoolean = useBooleanish(() => props.noHoverPause)
const showOnPauseBoolean = useBooleanish(() => props.showOnPause)
const intervalNumber = useToNumber(() => props.interval)
// TODO solid is never used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const solidBoolean = useBooleanish(() => props.solid)
const resolvedBackgroundClasses = useBackgroundVariant(props)
const countdownLength = toRef(() => (typeof modelValue.value === 'boolean' ? 0 : modelValue.value))

const {
  isActive,
  pause,
  restart,
  resume,
  stop,
  isPaused,
  value: remainingMs,
} = useCountdown(countdownLength, intervalNumber, {
  immediate: typeof modelValue.value === 'number',
})

watchEffect(() => {
  emit('close-countdown', remainingMs.value)
})

const computedTag = toRef(() => (computedLink.value ? BLink : 'div'))

const isToastVisible = toRef(() =>
  typeof modelValue.value === 'boolean'
    ? modelValue.value
    : isActive.value || (showOnPauseBoolean.value && isPaused.value)
)

// Unlike the Alert counterpart, we actually want to emit to fully destroy our Toast (handled by the toaster)
watch(isActive, (newValue) => {
  if (newValue === false && isPaused.value === false) {
    emit('destroyed')
  }
})

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    show: isToastVisible.value,
  },
])

const hide = () => {
  emit('close')

  if (typeof modelValue.value === 'boolean') {
    modelValue.value = false
  } else {
    modelValue.value = 0
    stop()
  }

  emit('closed')
}

const onMouseEnter = () => {
  if (noHoverPauseBoolean.value) return
  pause()
}

watch(isHovering, (newValue) => {
  if (newValue) {
    onMouseEnter()
    return
  }
  resume()
})

onBeforeUnmount(stop)

defineExpose({
  pause,
  resume,
  restart,
  stop,
})
</script>

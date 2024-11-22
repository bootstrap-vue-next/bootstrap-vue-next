<template>
  <Transition v-bind="fadeTransitions" enter-to-class="show">
    <div
      v-if="isAlertVisible"
      ref="_element"
      class="alert"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      :class="computedClasses"
    >
      <slot />
      <template v-if="props.dismissible">
        <BButton v-if="hasCloseSlot || props.closeContent" v-bind="closeAttrs" @click="hide">
          <slot name="close">
            {{ props.closeContent }}
          </slot>
        </BButton>
        <BCloseButton v-else :aria-label="props.closeLabel" v-bind="closeAttrs" @click="hide" />
      </template>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import BCloseButton from '../BButton/BCloseButton.vue'
import BButton from '../BButton/BButton.vue'
import type {BAlertProps} from '../../types/ComponentProps'
import {computed, useTemplateRef, watchEffect} from 'vue'
import {useCountdown} from '../../composables/useCountdown'
import {useDefaults} from '../../composables/useDefaults'
import {isEmptySlot} from '../../utils/dom'
import {useCountdownHover} from '../../composables/useCountdownHover'
import {useFadeTransition} from '../../composables/useTransitions'

const _props = withDefaults(defineProps<Omit<BAlertProps, 'modelValue'>>(), {
  closeClass: undefined,
  closeContent: undefined,
  closeLabel: 'Close',
  closeVariant: 'secondary',
  dismissible: false,
  fade: false,
  immediate: true,
  interval: 'requestAnimationFrame',
  noHoverPause: false,
  noResumeOnHoverLeave: false,
  showOnPause: true,
  variant: 'info',
})

const props = useDefaults(_props, 'BAlert')

const emit = defineEmits<{
  'close': []
  'close-countdown': [value: number]
  'closed': []
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  close?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const fadeTransitions = useFadeTransition(() => props.fade)

const element = useTemplateRef<HTMLElement>('_element')

const modelValue = defineModel<Exclude<BAlertProps['modelValue'], undefined>>({default: false})

const hasCloseSlot = computed(() => !isEmptySlot(slots.close))
const countdownLength = computed(() =>
  typeof modelValue.value === 'boolean' ? 0 : modelValue.value
)

const computedClasses = computed(() => ({
  [`alert-${props.variant}`]: props.variant !== null,
  'alert-dismissible': props.dismissible,
}))

const closeClasses = computed(() => [props.closeClass, {'btn-close-custom': hasCloseSlot.value}])

const {
  isActive,
  pause,
  resume,
  stop,
  isPaused,
  restart,
  value: remainingMs,
} = useCountdown(countdownLength, props.interval, {
  immediate: typeof modelValue.value === 'number' && props.immediate,
})
useCountdownHover(
  element,
  computed(() => ({
    noHoverPause: props.noHoverPause,
    noResumeOnHoverLeave: props.noResumeOnHoverLeave,
    modelValueIgnoresHover: typeof modelValue.value === 'boolean',
  })),
  {pause, resume}
)

const isAlertVisible = computed(() =>
  typeof modelValue.value === 'boolean'
    ? modelValue.value
    : isActive.value || (props.showOnPause && isPaused.value)
)

const closeAttrs = computed(() => ({
  variant: hasCloseSlot.value ? props.closeVariant : undefined,
  class: closeClasses.value,
}))

watchEffect(() => {
  emit('close-countdown', remainingMs.value)
})

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

defineExpose({
  pause,
  resume,
  stop,
  restart,
})
</script>

<style lang="scss" scoped>
.btn-close-custom {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
}
</style>

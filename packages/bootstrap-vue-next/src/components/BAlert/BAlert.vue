<template>
  <b-transition :no-fade="!fadeBoolean" :trans-props="{enterToClass: 'show'}">
    <div
      v-if="isAlertVisible"
      class="alert"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      :class="computedClasses"
      @mouseenter.stop="onMouseEnter"
      @mouseleave.stop="resume"
    >
      <slot />
      <template v-if="dismissibleBoolean">
        <b-close-button
          ref="closeButton"
          :class="closeClasses"
          :aria-label="dismissLabel"
          :white="closeWhite"
          @click="hide"
        >
          <template v-if="hasCloseSlot" #default>
            <slot name="close" />
          </template>
        </b-close-button>
      </template>
    </div>
  </b-transition>
</template>

<script setup lang="ts">
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import type {Booleanish, ClassValue, ColorVariant} from '../../types'
import {computed, onBeforeUnmount, useSlots, watchEffect} from 'vue'
import {useBooleanish, useCountdown} from '../../composables'
import {isEmptySlot} from '../../utils'
import {useVModel} from '@vueuse/core'

interface BAlertProps {
  closeClass?: ClassValue
  closeWhite?: Booleanish
  noHoverPause?: Booleanish
  dismissLabel?: string
  dismissible?: Booleanish
  fade?: Booleanish
  modelValue?: boolean | number
  variant?: ColorVariant | null
  immediate?: Booleanish
  interval?: number
  showOnPause?: Booleanish
}

const props = withDefaults(defineProps<BAlertProps>(), {
  closeClass: undefined,
  closeWhite: false,
  noHoverPause: false,
  interval: 1000,
  dismissLabel: 'Close',
  dismissible: false,
  fade: false,
  modelValue: false,
  variant: 'info',
  immediate: true,
  showOnPause: true,
})

interface BAlertEmits {
  (e: 'close'): void
  (e: 'close-countdown', value: number): void
  (e: 'update:modelValue', value: boolean | number): void
}

const emit = defineEmits<BAlertEmits>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  close?: (props: Record<string, never>) => any
}>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit)

const dismissibleBoolean = useBooleanish(() => props.dismissible)
const fadeBoolean = useBooleanish(() => props.fade)
const immediateBoolean = useBooleanish(() => props.immediate)
const showOnPauseBoolean = useBooleanish(() => props.showOnPause)
const noHoverPauseBoolean = useBooleanish(() => props.noHoverPause)

const hasCloseSlot = computed<boolean>(() => !isEmptySlot(slots.close))

const countdownLength = computed(() =>
  typeof modelValue.value === 'boolean' ? 0 : modelValue.value
)

const computedClasses = computed(() => ({
  [`alert-${props.variant}`]: props.variant !== null,
  'alert-dismissible': dismissibleBoolean.value,
}))

const closeClasses = computed(() => [props.closeClass])

const {
  isActive,
  pause,
  restart,
  resume,
  stop,
  isPaused,
  value: remainingMs,
} = useCountdown(countdownLength, () => props.interval, {
  immediate: typeof modelValue.value === 'number' && immediateBoolean.value,
})

const isAlertVisible = computed<boolean>(() =>
  typeof modelValue.value === 'boolean'
    ? modelValue.value
    : isActive.value || (showOnPauseBoolean.value && isPaused.value)
)

watchEffect(() => emit('close-countdown', remainingMs.value))

const hide = (): void => {
  emit('close')

  if (typeof modelValue.value === 'boolean') {
    modelValue.value = false
  } else {
    modelValue.value = 0
    stop()
  }
}

// TODO mouseleave/mouseenter could be replaced with useElementHover with a watcher
const onMouseEnter = () => {
  if (noHoverPauseBoolean.value) return
  pause()
}

onBeforeUnmount(stop)

defineExpose({pause, resume, restart, stop})
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

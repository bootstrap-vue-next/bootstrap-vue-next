<template>
  <BTransition :no-fade="!fadeBoolean" :trans-props="{enterToClass: 'show'}">
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
        <BButton v-if="hasCloseSlot" v-bind="closeAttrs" @click="hide">
          <slot name="close" />
        </BButton>
        <BCloseButton v-else v-bind="closeAttrs" @click="hide" />
      </template>
    </div>
  </BTransition>
</template>

<script setup lang="ts">
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BButton from '../BButton/BButton.vue'
import type {Booleanish, ButtonVariant, ClassValue, ColorVariant} from '../../types'
import {computed, onBeforeUnmount, useSlots, watchEffect} from 'vue'
import {useBooleanish, useCountdown} from '../../composables'
import {isEmptySlot} from '../../utils'
import {useVModel} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    closeVariant?: ButtonVariant | null
    closeClass?: ClassValue
    closeLabel?: string
    closeWhite?: Booleanish
    noHoverPause?: Booleanish
    dismissible?: Booleanish
    fade?: Booleanish
    modelValue?: boolean | number
    variant?: ColorVariant | null
    immediate?: Booleanish
    interval?: number
    showOnPause?: Booleanish
  }>(),
  {
    closeVariant: 'secondary',
    closeClass: undefined,
    closeLabel: 'Close',
    closeWhite: false,
    noHoverPause: false,
    interval: 1000,
    dismissible: false,
    fade: false,
    modelValue: false,
    variant: 'info',
    immediate: true,
    showOnPause: true,
  }
)

const emit = defineEmits<{
  'close': []
  'close-countdown': [value: number]
  'update:modelValue': [value: boolean | number]
}>()

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

const hasCloseSlot = computed(() => !isEmptySlot(slots.close))

const countdownLength = computed(() =>
  typeof modelValue.value === 'boolean' ? 0 : modelValue.value
)

const computedClasses = computed(() => ({
  [`alert-${props.variant}`]: props.variant !== null,
  'alert-dismissible': dismissibleBoolean.value,
}))

const closeClasses = computed(() => [props.closeClass, {'btn-close-custom': hasCloseSlot.value}])

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

const closeAttrs = computed(() => ({
  'variant': hasCloseSlot.value ? props.closeVariant : undefined,
  'white': !hasCloseSlot.value ? props.closeWhite : undefined,
  'class': closeClasses.value,
  'aria-label': props.closeLabel,
}))

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

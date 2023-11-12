<template>
  <BTransition :no-fade="!fadeBoolean" :trans-props="{enterToClass: 'show'}">
    <div
      v-if="isAlertVisible"
      ref="element"
      class="alert"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      :class="computedClasses"
    >
      <slot />
      <template v-if="dismissibleBoolean">
        <BButton v-if="hasCloseSlot || closeContent" v-bind="closeAttrs" @click="hide">
          <slot name="close">
            {{ closeContent }}
          </slot>
        </BButton>
        <BCloseButton v-else :aria-label="closeLabel" v-bind="closeAttrs" @click="hide" />
      </template>
    </div>
  </BTransition>
</template>

<script setup lang="ts">
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BButton from '../BButton/BButton.vue'
import type {Booleanish, ButtonVariant, ClassValue, ColorVariant} from '../../types'
import {computed, onBeforeUnmount, ref, toRef, watch, watchEffect} from 'vue'
import {useBooleanish, useCountdown} from '../../composables'
import {isEmptySlot} from '../../utils'
import {useElementHover, useToNumber, useVModel} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    closeClass?: ClassValue
    closeContent?: string
    closeLabel?: string
    closeVariant?: ButtonVariant | null
    dismissible?: Booleanish
    fade?: Booleanish
    immediate?: Booleanish
    interval?: number | string
    modelValue?: boolean | number
    noHoverPause?: Booleanish
    showOnPause?: Booleanish
    variant?: ColorVariant | null
  }>(),
  {
    closeClass: undefined,
    closeContent: undefined,
    closeLabel: 'Close',
    closeVariant: 'secondary',
    dismissible: false,
    fade: false,
    immediate: true,
    interval: 1000,
    modelValue: false,
    noHoverPause: false,
    showOnPause: true,
    variant: 'info',
  }
)

const emit = defineEmits<{
  'close': []
  'close-countdown': [value: number]
  'closed': []
  'update:modelValue': [value: boolean | number]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  close?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const element = ref<HTMLElement | null>(null)

const modelValue = useVModel(props, 'modelValue', emit)
const isHovering = useElementHover(element)

const dismissibleBoolean = useBooleanish(() => props.dismissible)
const fadeBoolean = useBooleanish(() => props.fade)
const immediateBoolean = useBooleanish(() => props.immediate)
const showOnPauseBoolean = useBooleanish(() => props.showOnPause)
const noHoverPauseBoolean = useBooleanish(() => props.noHoverPause)
const intervalNumber = useToNumber(() => props.interval)

const hasCloseSlot = toRef(() => !isEmptySlot(slots.close))

const countdownLength = toRef(() => (typeof modelValue.value === 'boolean' ? 0 : modelValue.value))

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
} = useCountdown(countdownLength, intervalNumber, {
  immediate: typeof modelValue.value === 'number' && immediateBoolean.value,
})

const isAlertVisible = toRef(() =>
  typeof modelValue.value === 'boolean'
    ? modelValue.value
    : isActive.value || (showOnPauseBoolean.value && isPaused.value)
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
  restart,
  resume,
  stop,
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

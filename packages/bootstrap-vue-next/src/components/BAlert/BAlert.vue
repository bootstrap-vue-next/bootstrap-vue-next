<template>
  <BTransition :no-fade="!props.fade" :trans-props="{enterToClass: 'show'}">
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
      <template v-if="props.dismissible">
        <BButton v-if="hasCloseSlot || props.closeContent" v-bind="closeAttrs" @click="hide">
          <slot name="close">
            {{ props.closeContent }}
          </slot>
        </BButton>
        <BCloseButton v-else :aria-label="props.closeLabel" v-bind="closeAttrs" @click="hide" />
      </template>
    </div>
  </BTransition>
</template>

<script setup lang="ts">
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BButton from '../BButton/BButton.vue'
import type {BAlertProps} from '../../types'
import {computed, onBeforeUnmount, ref, toRef, watch, watchEffect} from 'vue'
import {useCountdown, useDefaults} from '../../composables'
import {isEmptySlot} from '../../utils'
import {useElementHover, useToNumber} from '@vueuse/core'

const _props = withDefaults(defineProps<BAlertProps>(), {
  closeClass: undefined,
  closeContent: undefined,
  closeLabel: 'Close',
  closeVariant: 'secondary',
  dismissible: false,
  fade: false,
  immediate: true,
  interval: 1000,
  noHoverPause: false,
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

const element = ref<HTMLElement | null>(null)

const modelValue = defineModel<boolean | number>({default: false})

const isHovering = useElementHover(element)

const intervalNumber = useToNumber(() => props.interval)

const hasCloseSlot = toRef(() => !isEmptySlot(slots.close))

const countdownLength = toRef(() => (typeof modelValue.value === 'boolean' ? 0 : modelValue.value))

const computedClasses = computed(() => ({
  [`alert-${props.variant}`]: props.variant !== null,
  'alert-dismissible': props.dismissible,
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
  immediate: typeof modelValue.value === 'number' && props.immediate,
})

const isAlertVisible = toRef(() =>
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

const onMouseEnter = () => {
  if (props.noHoverPause) return
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

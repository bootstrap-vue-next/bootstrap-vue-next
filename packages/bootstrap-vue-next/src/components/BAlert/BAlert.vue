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
        <!-- TODO this renders incorrectly -->
        <b-button v-if="hasCloseSlot || closeContent" v-bind="closeAttrs" @click="closeClicked">
          <slot name="close">
            {{ closeContent }}
          </slot>
        </b-button>
        <b-close-button
          v-else
          :aria-label="dismissLabel"
          v-bind="closeAttrs"
          @click="closeClicked"
        />
      </template>
    </div>
  </b-transition>
</template>

<script setup lang="ts">
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BButton from '../BButton/BButton.vue'
import type {Booleanish, ButtonType, ButtonVariant, ColorVariant} from '../../types'
import {computed, onBeforeUnmount, toRef, useSlots, watchEffect} from 'vue'
import {useBooleanish, useCountdown} from '../../composables'
import {isEmptySlot} from '../../utils'
import {useVModel} from '@vueuse/core'

interface BAlertProps {
  noHoverPause?: Booleanish
  dismissLabel?: string
  dismissible?: Booleanish
  fade?: Booleanish
  closeVariant?: ButtonVariant
  modelValue?: boolean | number
  variant?: ColorVariant
  closeContent?: string
  immediate?: Booleanish
  interval?: number
  showOnPause?: Booleanish
}

const props = withDefaults(defineProps<BAlertProps>(), {
  closeContent: undefined,
  closeVariant: 'secondary',
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
  (e: 'closed'): void
  (e: 'close-countdown', value: number): void
  (e: 'update:modelValue', value: boolean | number): void
}

const emit = defineEmits<BAlertEmits>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit)

const dismissibleBoolean = useBooleanish(toRef(props, 'dismissible'))
const fadeBoolean = useBooleanish(toRef(props, 'fade'))
const immediateBoolean = useBooleanish(toRef(props, 'immediate'))
const showOnPauseBoolean = useBooleanish(toRef(props, 'showOnPause'))
const noHoverPauseBoolean = useBooleanish(toRef(props, 'noHoverPause'))

const hasCloseSlot = computed<boolean>(() => !isEmptySlot(slots.close))

const countdownLength = computed(() =>
  typeof modelValue.value === 'boolean' ? 0 : modelValue.value
)

const computedClasses = computed(() => [
  [`alert-${props.variant}`],
  {
    'alert-dismissible': dismissibleBoolean.value,
  },
])

const {
  isActive,
  pause,
  restart,
  resume,
  stop,
  isPaused,
  value: remainingMs,
} = useCountdown(countdownLength, toRef(props, 'interval'), {
  immediate: typeof modelValue.value === 'number' && immediateBoolean.value,
})

const isAlertVisible = computed<boolean>(() =>
  typeof modelValue.value === 'boolean'
    ? modelValue.value
    : isActive.value || (showOnPauseBoolean.value && isPaused.value)
)

const closeAttrs = computed(() => ({
  variant: props.closeVariant,
  type: 'button' as ButtonType,
}))

watchEffect(() => emit('close-countdown', remainingMs.value))

const closeClicked = (): void => {
  if (typeof modelValue.value === 'boolean') {
    modelValue.value = false
  } else {
    modelValue.value = 0
    stop()
  }
  emit('closed')
}

// TODO mouseleave/mouseenter could be replaced with useElementHover with a watcher
const onMouseEnter = () => {
  if (noHoverPauseBoolean.value) return
  pause()
}

onBeforeUnmount(stop)

defineExpose({pause, resume, restart, stop})
</script>

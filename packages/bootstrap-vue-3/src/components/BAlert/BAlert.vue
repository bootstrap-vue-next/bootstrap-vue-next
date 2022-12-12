<template>
  <b-transition :no-fade="!fadeBoolean" :trans-props="{enterToClass: 'show'}">
    <div
      v-if="isAlertVisible"
      class="alert"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      :class="computedClasses"
    >
      <slot />
      <template v-if="dismissibleBoolean">
        <b-button v-if="hasCloseSlot || closeContent" type="button" @click="closeClicked">
          <slot name="close">
            {{ closeContent }}
          </slot>
        </b-button>
        <b-close-button v-else :aria-label="dismissLabel" @click="closeClicked" />
      </template>
    </div>
  </b-transition>
</template>

<script setup lang="ts">
// import type {BAlertEmits, BAlertProps} from '../types/components'
import BTransition from '../BTransition/BTransition.vue'
import type {Booleanish, ColorVariant} from '../../types'
import {computed, onBeforeUnmount, onMounted, type Ref, toRef, useSlots, watchEffect} from 'vue'
import {isEmptySlot} from '../../utils'
import {useBooleanish} from '../../composables'
import BCloseButton from '../BButton/BCloseButton.vue'
import useCountdown from '../../composables/useCountdown'

interface BAlertProps {
  dismissLabel?: string
  dismissible?: Booleanish
  fade?: Booleanish
  modelValue?: boolean | number
  show?: Booleanish
  variant?: ColorVariant
  closeContent?: string
}

const props = withDefaults(defineProps<BAlertProps>(), {
  dismissLabel: 'Close',
  dismissible: false,
  fade: false,
  modelValue: false,
  show: false,
  variant: 'info',
})

const dismissibleBoolean = useBooleanish(toRef(props, 'dismissible'))
const fadeBoolean = useBooleanish(toRef(props, 'fade'))
const showBoolean = useBooleanish(toRef(props, 'show'))

interface BAlertEmits {
  (e: 'closed'): void
  (e: 'close-count-down', value: number): void
  (e: 'update:modelValue', value: boolean | number): void
}

const emit = defineEmits<BAlertEmits>()

const slots = useSlots()

const hasCloseSlot = computed<boolean>(() => !isEmptySlot(slots.close))

const computedClasses = computed(() => [
  [`alert-${props.variant}`],
  {
    'alert-dismissible': dismissibleBoolean.value,
  },
])
// TODO the interval setting is somehow still a bit broken.
// It seems like it fires out to intervals at once,
// It feels like there are multiple intervals being made
// Possible make the countdown combine with useIntervalFn
const {isPending, pause, restart, resume, stop, value} = useCountdown(
  typeof props.modelValue === 'boolean' ? 0 : (toRef(props, 'modelValue') as Ref<number>),
  1000,
  {
    immediate: typeof props.modelValue === 'number',
  }
)

const isAlertVisible = computed<boolean>(
  () =>
    showBoolean.value ||
    (typeof props.modelValue === 'boolean' ? props.modelValue : isPending.value)
)

watchEffect(() => {
  emit('close-count-down', value.value)
})

// onMounted(() => {
//   if (typeof props.modelValue === 'number') {
//     restart()
//   }
// })

const closeClicked = (): void => {
  if (typeof props.modelValue === 'boolean') {
    emit('update:modelValue', false)
  }
  stop()
  emit('closed')
}

onBeforeUnmount(() => stop())

defineExpose({pause, restart, resume, stop})
</script>

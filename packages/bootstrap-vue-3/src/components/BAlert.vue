<template>
  <div v-if="isAlertVisible" ref="element" class="alert" role="alert" :class="computedClasses">
    <slot />
    <template v-if="dismissibleBoolean">
      <button v-if="hasCloseSlot" type="button" data-bs-dismiss="alert" @click="closeClicked">
        <slot name="close" />
      </button>
      <b-close-button
        v-else
        :aria-label="dismissLabel"
        data-bs-dismiss="alert"
        @click="closeClicked"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
// import type {BAlertEmits, BAlertProps} from '../types/components'
import type {Booleanish, ColorVariant} from '../types'
import {computed, onBeforeUnmount, ref, toRef, useSlots, watch} from 'vue'
import {Alert} from 'bootstrap'
import {isEmptySlot, toInteger} from '../utils'
import {useBooleanish} from '../composables'
import BCloseButton from './BButton/BCloseButton.vue'

interface BAlertProps {
  dismissLabel?: string
  dismissible?: Booleanish
  fade?: Booleanish
  modelValue?: boolean | number
  show?: Booleanish
  variant?: ColorVariant
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
// TODO fade is never used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fadeBoolean = useBooleanish(toRef(props, 'fade'))
const showBoolean = useBooleanish(toRef(props, 'show'))

interface BAlertEmits {
  (e: 'closed'): void
  (e: 'close-count-down', value: number): void
  (e: 'update:modelValue', value: boolean | number): void
}

const emit = defineEmits<BAlertEmits>()

const slots = useSlots()

let _countDownTimeout: undefined | ReturnType<typeof setTimeout>

const element = ref<HTMLElement | null>(null)
const instance = ref<Alert>()

const hasCloseSlot = computed<boolean>(() => !isEmptySlot(slots.close))

const isAlertVisible = computed<boolean>(() => !!props.modelValue || showBoolean.value)

const computedClasses = computed(() => [
  [`alert-${props.variant}`],
  {
    'show': !!props.modelValue,
    'alert-dismissible': dismissibleBoolean.value,
    // TODO it seems like fade is probably used here
    // It seems like the issue with trying to set fade is that when using transitions,
    // The element is null when it's trying to set the transition
    'fade': !!props.modelValue,
  },
])

const parseCountDown = (value: boolean | number): number => {
  if (typeof value === 'boolean') {
    return 0
  }

  const numberValue = toInteger(value, 0)
  return numberValue > 0 ? numberValue : 0
}

const countDown = ref<number>(parseCountDown(props.modelValue))

const parsedModelValue = computed<boolean>(() => {
  if (props.modelValue === true) {
    return true
  }
  if (props.modelValue === false) return false

  if (toInteger(props.modelValue, 0) < 1) {
    // Boolean will always return false for the above comparison
    return false
  }
  return !!props.modelValue
})

const clearCountDownInterval = (): void => {
  if (_countDownTimeout === undefined) return
  clearTimeout(_countDownTimeout)
  _countDownTimeout = undefined
}

const handleShowAndModelChanged = (): void => {
  countDown.value = parseCountDown(props.modelValue)
  if ((parsedModelValue.value || showBoolean.value) && !instance.value)
    instance.value = new Alert(element.value as HTMLElement)
}

const closeClicked = (): void => {
  if (typeof props.modelValue === 'boolean') {
    emit('update:modelValue', false)
  } else {
    emit('update:modelValue', 0)
  }
  emit('closed')
}

watch(() => props.modelValue, handleShowAndModelChanged)
watch(() => showBoolean.value, handleShowAndModelChanged)

watch(countDown, (newValue) => {
  clearCountDownInterval()
  if (typeof props.modelValue === 'boolean') return
  emit('close-count-down', newValue)

  if (newValue === 0 && props.modelValue > 0) emit('closed')
  if (props.modelValue !== newValue) emit('update:modelValue', newValue)
  if (newValue > 0) {
    _countDownTimeout = setTimeout(() => {
      countDown.value--
    }, 1000)
  }
})

onBeforeUnmount((): void => {
  clearCountDownInterval()
  instance.value?.dispose()
  instance.value = undefined
})
</script>

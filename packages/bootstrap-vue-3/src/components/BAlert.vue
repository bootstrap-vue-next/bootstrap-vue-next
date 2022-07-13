<template>
  <div v-if="isAlertVisible" ref="element" class="alert" role="alert" :class="classes">
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      :aria-label="dismissLabel"
      @click="dismissClicked"
    />
  </div>
</template>

<script setup lang="ts">
// import type {BAlertEmits, BAlertProps} from '../types/components'
import type {ColorVariant} from '../types'
import {computed, onBeforeUnmount, ref, watch} from 'vue'
import Alert from 'bootstrap/js/dist/alert'
import {toInteger} from '../utils/number'

interface BAlertProps {
  dismissLabel?: string
  dismissible?: boolean
  fade?: boolean
  modelValue?: boolean | number
  show?: boolean
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

interface BAlertEmits {
  (e: 'dismissed'): void
  (e: 'dismiss-count-down', value: number): void
  (e: 'update:modelValue', value: boolean | number): void
}

const emit = defineEmits<BAlertEmits>()

const element = ref<HTMLElement>()
const instance = ref<Alert>()
const classes = computed(() => ({
  [`alert-${props.variant}`]: props.variant,
  'show': props.modelValue,
  'alert-dismissible': props.dismissible,
  'fade': props.modelValue,
}))

let _countDownTimeout: undefined | ReturnType<typeof setTimeout>

const parseCountDown = (value: boolean | number): number => {
  if (typeof value === 'boolean') {
    return 0
  }

  const numberValue = toInteger(value, 0)
  return numberValue > 0 ? numberValue : 0
}

const clearCountDownInterval = (): void => {
  if (_countDownTimeout === undefined) return
  clearTimeout(_countDownTimeout)
  _countDownTimeout = undefined
}

const countDown = ref<number>(parseCountDown(props.modelValue))
const isAlertVisible = computed<boolean>(() => !!props.modelValue || props.show)

onBeforeUnmount((): void => {
  clearCountDownInterval()
  instance.value?.dispose()
  instance.value = undefined
})

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

const handleShowAndModelChanged = (): void => {
  countDown.value = parseCountDown(props.modelValue)
  if ((parsedModelValue.value || props.show) && !instance.value)
    instance.value = new Alert(element.value as HTMLElement)
}

const dismissClicked = (): void => {
  if (typeof props.modelValue === 'boolean') {
    emit('update:modelValue', false)
  } else {
    emit('update:modelValue', 0)
  }
  emit('dismissed')
}

watch(() => props.modelValue, handleShowAndModelChanged)
watch(() => props.show, handleShowAndModelChanged)

watch(countDown, (newValue) => {
  clearCountDownInterval()
  if (typeof props.modelValue === 'boolean') return
  emit('dismiss-count-down', newValue)

  if (newValue === 0 && props.modelValue > 0) emit('dismissed')
  if (props.modelValue !== newValue) emit('update:modelValue', newValue)
  if (newValue > 0) {
    _countDownTimeout = setTimeout(() => {
      countDown.value--
    }, 1000)
  }
})
</script>

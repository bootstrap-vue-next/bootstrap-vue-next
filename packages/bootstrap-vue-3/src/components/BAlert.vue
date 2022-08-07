<template>
  <div v-if="isAlertVisible" ref="element" class="alert" role="alert" :class="classes">
    <slot />
    <button
      v-if="dismissibleBoolean"
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
import type {Booleanish, ColorVariant} from '../types'
import {computed, onBeforeUnmount, ref, watch} from 'vue'
import Alert from 'bootstrap/js/dist/alert'
import {resolveBooleanish, toInteger} from '../utils'

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

const dismissibleBoolean = computed<boolean>(() => resolveBooleanish(props.dismissible))
// TODO fade is never used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fadeBoolean = computed<boolean>(() => resolveBooleanish(props.fade))
const showBoolean = computed<boolean>(() => resolveBooleanish(props.show))

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
  'alert-dismissible': dismissibleBoolean.value,
  // TODO it seems like fade is probably used here
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
const isAlertVisible = computed<boolean>(() => !!props.modelValue || showBoolean.value)

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
  if ((parsedModelValue.value || showBoolean.value) && !instance.value)
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
watch(() => showBoolean.value, handleShowAndModelChanged)

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

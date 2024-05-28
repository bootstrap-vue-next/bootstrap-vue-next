<template>
  <div
    ref="element"
    class="b-form-spinbutton form-control"
    :class="computedClasses"
    role="group"
    :lang="computedLocale"
    :tabindex="props.disabled ? undefined : '-1'"
    :title="props.ariaLabel"
    @click="focused = true"
  >
    <!-- eslint-disable-next-line prettier/prettier -->
    <!-- prettier-ignore -->
    <slot :name="(buttons.top.slot.name as 'increment' | 'decrement')" :has-focus="focused">
      <button
        v-bind="buttons.top.button"
        @mousedown="buttons.top.handler"
        @touchstart="buttons.top.handler"
      >
        <svg v-bind="buttons.top.svg">
          <path v-bind="buttons.top.path" />
        </svg>
      </button>
    </slot>
    <input
      v-if="props.name && !props.disabled"
      key="hidden"
      type="hidden"
      :name="props.name"
      :form="props.form"
      :value="valueAsFixed"
    />
    <output
      :id="computedId"
      key="output"
      class="flex-grow-1"
      :class="computedSpinClasses"
      :dir="isRtl ?? false ? 'rtl' : 'ltr'"
      :tabindex="props.disabled ? undefined : '0'"
      role="spinbutton"
      aria-live="off"
      :aria-label="props.ariaLabel || undefined"
      :aria-invalid="
        props.state === false || (!modelValue !== null && props.required) ? true : undefined
      "
      :aria-required="props.required ? true : undefined"
      :aria-valuemin="computedMin"
      :aria-valuemax="computedMax"
      :aria-valuenow="modelValue !== null ? modelValue : undefined"
      :aria-valuetext="modelValue !== null ? computedFormatter(modelValue) : undefined"
    >
      <bdi>
        {{ (modelValue !== null ? computedFormatter(modelValue) : props.placeholder) || '' }}
      </bdi>
    </output>
    <!-- eslint-disable-next-line prettier/prettier -->
    <!-- prettier-ignore -->
    <slot :name="(buttons.bottom.slot.name as 'increment' | 'decrement')" :has-focus="focused">
      <button
        v-bind="buttons.bottom.button"
        @mousedown="buttons.bottom.handler"
        @touchstart="buttons.bottom.handler"
      >
        <svg v-bind="buttons.bottom.svg">
          <path v-bind="buttons.bottom.path" />
        </svg>
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, toRef} from 'vue'
import type {BFormSpinbuttonProps, ButtonType} from '../../types'
import {eventOnOff} from '../../utils/event'
import {
  CODE_DOWN,
  CODE_END,
  CODE_HOME,
  CODE_PAGEDOWN,
  CODE_PAGEUP,
  CODE_UP,
} from '../../constants/codes'
import {onKeyStroke, useFocus, useToNumber} from '@vueuse/core'
import {useDefaults, useId, useRtl} from '../../composables'

const KEY_CODES = [CODE_UP, CODE_DOWN, CODE_HOME, CODE_END, CODE_PAGEUP, CODE_PAGEDOWN]

const _props = withDefaults(defineProps<BFormSpinbuttonProps>(), {
  ariaControls: undefined,
  ariaLabel: undefined,
  disabled: false,
  form: undefined,
  formatterFn: undefined,
  id: undefined,
  inline: false,
  labelDecrement: 'Decrement',
  labelIncrement: 'Increment',
  locale: undefined,
  max: defaultValues.max,
  min: defaultValues.min,
  name: undefined,
  placeholder: undefined,
  readonly: false,
  repeatDelay: defaultValues.repeatDelay,
  repeatInterval: defaultValues.repeatInterval,
  repeatStepMultiplier: defaultValues.repeatMultiplier,
  repeatThreshold: defaultValues.repeatThreshold,
  required: false,
  size: undefined,
  state: null,
  step: defaultValues.step,
  vertical: false,
  wrap: false,
})
const props = useDefaults(_props, 'BFormSpinbutton')

const emit = defineEmits<{
  change: [value: number | null]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decrement?: (props: {hasFocus: boolean}) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  increment?: (props: {hasFocus: boolean}) => any
}>()

const modelValue = defineModel<number | null>({
  default: null,
})

const element = ref<HTMLElement | null>(null)

const {focused} = useFocus(element)

const computedId = useId(() => props.id, 'spinbutton')

const computedClasses = computed(() => ({
  'disabled': props.disabled,
  'readonly': props.readonly,
  'focus': focused.value,
  'd-inline-flex': props.inline || props.vertical,
  'd-flex': !props.inline && !props.vertical,
  'align-items-stretch': !props.vertical,
  'flex-column': props.vertical,
  [`form-control-${props.size}`]: props.size !== undefined,
}))

const computedSpinClasses = computed(() => ({
  'd-flex': props.vertical,
  'align-self-center': !props.vertical,
  'align-items-center': props.vertical,
  'border-top': props.vertical,
  'border-bottom': props.vertical,
  'border-start': !props.vertical,
  'border-end': !props.vertical,
}))

//non reactive properties
let $_autoDelayTimer: ReturnType<typeof setTimeout> | undefined
let $_autoRepeatTimer: ReturnType<typeof setTimeout> | undefined
let $_keyIsDown = false

// const computedInline = computed(() => props.inline && !props.vertical)

// const computedReadonly = computed(() => props.readonly && !props.disabled)

const stepNumber = useToNumber(() => props.step)
const computedStep = toRef(() =>
  Number.isNaN(stepNumber.value) ? defaultValues.step : stepNumber.value
)

const minNumber = useToNumber(() => props.min)
const computedMin = toRef(() =>
  Number.isNaN(minNumber.value) ? defaultValues.min : minNumber.value
)

const maxNumber = useToNumber(() => props.max)
const computedMax = toRef(() => {
  const step = computedStep.value
  const min = computedMin.value
  return Math.floor((maxNumber.value - min) / step) * step + min
})

const repeatDelayNumber = useToNumber(() => props.repeatDelay, {
  nanToZero: true,
  method: 'parseInt',
})
const computedDelay = toRef(() =>
  repeatDelayNumber.value > 0 ? repeatDelayNumber.value : defaultValues.repeatDelay
)

const repeatIntervalNumber = useToNumber(() => props.repeatInterval, {
  nanToZero: true,
  method: 'parseInt',
})
const computedInterval = toRef(() =>
  repeatIntervalNumber.value > 0 ? repeatIntervalNumber.value : defaultValues.repeatInterval
)

const repeatThresholdNumber = useToNumber(() => props.repeatThreshold, {
  nanToZero: true,
  method: 'parseInt',
})
const computedThreshold = toRef(() =>
  Math.max(
    Number.isNaN(repeatThresholdNumber.value)
      ? defaultValues.repeatThreshold
      : repeatThresholdNumber.value,
    1
  )
)

const repeatStepMultiplierNumber = useToNumber(() => props.repeatStepMultiplier, {
  nanToZero: true,
  method: 'parseInt',
})
const computedStepMultiplier = toRef(() =>
  Math.max(
    Number.isNaN(repeatStepMultiplierNumber.value)
      ? defaultValues.repeatMultiplier
      : repeatStepMultiplierNumber.value,
    1
  )
)

const computedPrecision = toRef(() => {
  const step = computedStep.value
  return Math.floor(step) === step ? 0 : (step.toString().split('.')[1] || '').length
})

const computedMultiplier = toRef(() => Math.pow(10, computedPrecision.value || 0))

const valueAsFixed = toRef(() =>
  modelValue.value === null ? '' : modelValue.value.toFixed(computedPrecision.value)
)

const {isRtl, locale: globalLocale} = useRtl()

const computedLocale = computed(() => {
  const loc = (props.locale ?? globalLocale?.value) || 'locale'
  const locales = [loc]
  const nf = new Intl.NumberFormat(locales)
  return nf.resolvedOptions().locale
})

const defaultFormatter = () =>
  new Intl.NumberFormat(computedLocale.value, {
    style: 'decimal',
    useGrouping: false,
    minimumIntegerDigits: 1,
    minimumFractionDigits: computedPrecision.value,
    maximumFractionDigits: computedPrecision.value,
    notation: 'standard',
  }).format

const computedFormatter = toRef(() => props.formatterFn ?? defaultFormatter())

const stepValue = (direction: number) => {
  // Sets a new incremented or decremented value, supporting optional wrapping
  // Direction is either +1 or -1 (or a multiple thereof)
  let {value} = modelValue
  if (!props.disabled && value !== null) {
    const step = computedStep.value * direction
    const min = computedMin.value
    const max = computedMax.value
    const multiplier = computedMultiplier.value
    const {wrap} = props
    // We ensure that the value steps like a native input
    value = Math.round((value - min) / step) * step + min + step
    // We ensure that precision is maintained (decimals)
    value = Math.round(value * multiplier) / multiplier
    // Handle if wrapping is enabled
    modelValue.value = value > max ? (wrap ? min : max) : value < min ? (wrap ? max : min) : value
  }
}

const stepUp = (multiplier = 1) => {
  if (modelValue.value === null) {
    modelValue.value = computedMin.value
    return
  }
  stepValue(+1 * multiplier)
}

const stepDown = (multiplier = 1) => {
  if (modelValue.value === null) {
    modelValue.value = props.wrap ? computedMax.value : computedMin.value
    return
  }
  stepValue(-1 * multiplier)
}

const stopEvent = (event: Readonly<Event>) => {
  event.preventDefault()
  event.stopImmediatePropagation()
}

onKeyStroke(
  KEY_CODES,
  (event) => {
    const {code, altKey, ctrlKey, metaKey} = event

    if (props.disabled || props.readonly || altKey || ctrlKey || metaKey) return

    // https://w3c.github.io/aria-practices/#spinbutton
    stopEvent(event)
    if ($_keyIsDown) {
      // Keypress is already in progress
      return
    }

    resetTimers()
    if ([CODE_UP, CODE_DOWN].includes(code)) {
      // The following use the custom auto-repeat handling

      $_keyIsDown = true
      if (code === CODE_UP) {
        handleStepRepeat(event, stepUp)
        return
      }
      if (code === CODE_DOWN) {
        handleStepRepeat(event, stepDown)
      }
      return
    }
    // These use native OS key repeating
    if (code === CODE_PAGEUP) {
      stepUp(computedStepMultiplier.value)
      return
    }
    if (code === CODE_PAGEDOWN) {
      stepDown(computedStepMultiplier.value)
      return
    }
    if (code === CODE_HOME) {
      modelValue.value = computedMin.value
      return
    }
    if (code === CODE_END) {
      modelValue.value = computedMax.value
    }
  },
  {target: element, eventName: 'keydown'}
)

onKeyStroke(
  KEY_CODES,
  (event: Readonly<KeyboardEvent>) => {
    // Emit a change event when the keyup happens

    const {altKey, ctrlKey, metaKey} = event

    if (props.disabled || props.readonly || altKey || ctrlKey || metaKey) return

    stopEvent(event)
    resetTimers()
    $_keyIsDown = false
    emit('change', modelValue.value)
  },
  {target: element, eventName: 'keyup'}
)

// takes in a mount or Keyboard Event
const handleStepRepeat = (event: Readonly<Event>, stepper: (step: number) => void) => {
  const {type} = event || {}

  if (!props.disabled && !props.readonly) {
    if (isMouseEvent(event)) {
      // We only respond to left (main === 0) button clicks
      if (type === 'mousedown' && event.button) return
    }
    resetTimers()
    // Step the counter initially
    stepper(1)
    const threshold = computedThreshold.value
    const multiplier = computedStepMultiplier.value
    const delay = computedDelay.value
    const interval = computedInterval.value

    // Initiate the delay/repeat interval
    $_autoDelayTimer = setTimeout(() => {
      let count = 0
      $_autoRepeatTimer = setInterval(() => {
        // After N initial repeats, we increase the incrementing step amount
        // We do this to minimize screen reader announcements of the value
        // (values are announced every change, which can be chatty for SR users)
        // And to make it easer to select a value when the range is large
        stepper(count < threshold ? 1 : multiplier)
        count++
      }, interval)
    }, delay)
  }
}

const isMouseEvent = (evt: Readonly<Event>): evt is MouseEvent =>
  evt.type === 'mouseup' || evt.type === 'mousedown'

const onMouseup: EventListener = (event: Readonly<Event>) => {
  // `<body>` listener, only enabled when mousedown starts

  if (isMouseEvent(event)) {
    if (event.type === 'mouseup' && event.button) {
      // Ignore non left button (main === 0) mouse button click
      return
    }
  }

  stopEvent(event)
  resetTimers()
  setMouseup(false)
  // Trigger the change event
  emit('change', modelValue.value)
}

const setMouseup = (on: boolean) => {
  // Enable or disabled the body mouseup/touchend handlers
  // Use try/catch to handle case when called server side
  try {
    eventOnOff(on, [document.body, 'mouseup', onMouseup, false])
    eventOnOff(on, [document.body, 'touchend', onMouseup, false])
  } catch {
    /* empty */
  }
}
const resetTimers = () => {
  clearTimeout($_autoDelayTimer)
  clearInterval($_autoRepeatTimer)
  $_autoDelayTimer = undefined
  $_autoRepeatTimer = undefined
}

const buttons = computed(() => {
  const incrementSvgAttrs = {
    svg: {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '16',
      height: '16',
      fill: 'currentColor',
      class: 'bi bi-plus',
      viewBox: '0 0 16 16',
    },
    path: {
      d: 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z',
    },
  } as const

  const decrementSvgAttrs = {
    svg: {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '16',
      height: '16',
      fill: 'currentColor',
      class: 'bi bi-dash',
      viewBox: '0 0 16 16',
    },
    path: {d: 'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'},
  } as const

  const sharedButtonAttrs = {
    'class': [{'py-0': !props.vertical}, 'btn', 'btn-sm', 'border-0', 'rounded-0'],
    'tabindex': '-1',
    'type': 'button' as ButtonType,
    'disabled': props.disabled || props.readonly,
    'aria-disabled': props.disabled || props.readonly ? true : undefined,
    'aria-controls': computedId.value,
  }

  const sharedSvgAttrs = {
    'aria-hidden': true,
    'scale': focused.value ? 1.5 : 1.25,
  }

  const handler = (event: Readonly<Event>, stepper: (multiplier?: number) => void) => {
    if (!props.disabled && !props.readonly) {
      stopEvent(event)
      setMouseup(true)
      // Since we `preventDefault()`, we must manually focus the button
      // Though it's likely captured from the element click focus
      focused.value = true
      handleStepRepeat(event, stepper)
    }
  }

  const incrementAttrs = {
    button: {
      ...sharedButtonAttrs,
      'aria-label': props.labelIncrement || undefined,
      'aria-keyshortcuts': 'ArrowUp',
    },
    svg: {
      ...sharedSvgAttrs,
      ...incrementSvgAttrs.svg,
    },
    path: {
      ...incrementSvgAttrs.path,
    },
    slot: {
      name: 'increment',
    },
    handler: (e: Event) => handler(e, stepUp),
  }

  const decrementAttrs = {
    button: {
      ...sharedButtonAttrs,
      'aria-label': props.labelDecrement || undefined,
      'aria-keyshortcuts': 'ArrowDown',
    },
    svg: {
      ...sharedSvgAttrs,
      ...decrementSvgAttrs.svg,
    },
    path: {
      ...decrementSvgAttrs.path,
    },
    slot: {
      name: 'decrement',
    },
    handler: (e: Readonly<Event>) => handler(e, stepDown),
  }

  return {
    top: {
      ...(props.vertical ? incrementAttrs : decrementAttrs),
    },
    bottom: {
      ...(!props.vertical ? incrementAttrs : decrementAttrs),
    },
  }
})
</script>

<script lang="ts">
const defaultValues = {
  min: 1,
  max: 100,
  step: 1,
  repeatDelay: 500,
  repeatInterval: 100,
  repeatThreshold: 10,
  repeatMultiplier: 4,
} as const
</script>

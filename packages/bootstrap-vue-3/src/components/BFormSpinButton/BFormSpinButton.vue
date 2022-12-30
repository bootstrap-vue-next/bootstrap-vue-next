<script lang="ts">
import {computed, type ComputedRef, defineComponent, h, type PropType, ref, type Ref} from 'vue'
import type {Booleanish} from '../../types'
import {toFloat, toInteger} from '../../utils/number'
import {isNull} from '../../utils/inspect'
import {isLocaleRTL} from '../../utils/locale'
import {eventOnOff, stopEvent} from '../../utils/event'
import {normalizeSlot} from '../../utils'
// import {attemptBlur, attemptFocus, normalizeSlot} from '../../utils'
//TODO alias
// import {BIconDash, BIconPlus} from 'bootstrap-vue-3-icons'

import {
  CODE_DOWN,
  CODE_END,
  CODE_HOME,
  CODE_PAGEDOWN,
  CODE_PAGEUP,
  CODE_UP,
} from '../../constants/codes'

// Default for spin button range and step
const DEFAULT_MIN = 1
const DEFAULT_MAX = 100
const DEFAULT_STEP = 1

// Delay before auto-repeat in ms
const DEFAULT_REPEAT_DELAY = 500
// Repeat interval in ms
const DEFAULT_REPEAT_INTERVAL = 100
// Repeat rate increased after number of repeats
const DEFAULT_REPEAT_THRESHOLD = 10
// Repeat speed multiplier (step multiplier, must be an integer)
const DEFAULT_REPEAT_MULTIPLIER = 4

const KEY_CODES = [CODE_UP, CODE_DOWN, CODE_HOME, CODE_END, CODE_PAGEUP, CODE_PAGEDOWN]

export default defineComponent({
  props: {
    ariaControls: {type: String, required: false},
    ariaLabel: {type: String, required: false},
    labelIncrement: {type: String, default: 'Increment'},
    labelDecrement: {type: String, default: 'Decrement'},
    modelValue: {type: Number, default: null}, // V-model prop
    name: {type: String, default: 'BFormSpinbutton'},
    disabled: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    placeholder: {type: String, required: false},
    locale: {type: String, default: 'locale'},
    form: {type: String, required: false},
    inline: {type: Boolean, default: false},
    size: {type: String, required: false},
    formatterFn: {
      type: Function as PropType<(value: number) => any>,
    },
    readonly: {type: Boolean, default: false},
    vertical: {type: Boolean, default: false},
    repeatDelay: {
      type: [String, Number] as PropType<number | string>,
      default: DEFAULT_REPEAT_DELAY,
    },
    repeatInterval: {
      type: [String, Number] as PropType<number | string>,
      default: DEFAULT_REPEAT_INTERVAL,
    },
    repeatStepMultiplier: {
      type: [String, Number] as PropType<number | string>,
      default: DEFAULT_REPEAT_MULTIPLIER,
    },
    repeatThreshold: {
      type: [String, Number] as PropType<number | string>,
      default: DEFAULT_REPEAT_THRESHOLD,
    },
    required: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    step: {type: [String, Number] as PropType<number | string>, default: DEFAULT_STEP},
    min: {type: [String, Number] as PropType<number | string>, default: DEFAULT_MIN},
    max: {type: [String, Number] as PropType<number | string>, default: DEFAULT_MAX},
    wrap: {type: Boolean, default: false},
    state: {type: [Boolean, String] as PropType<Booleanish | null>, default: null},
  },
  emits: ['update:modelValue', 'change'],
  setup(props, {emit}) {
    const hasFocus = ref(false)
    const spinId = computed(() => 1) //TODO

    const emitChange = () => {
      emit('change', localValue.value)
    }

    // due to modelValue being optional we will need to store changes locally
    const lvalue: Ref<null | number> = ref(null)

    const localValue = computed({
      get() {
        return isNull(props.modelValue) ? lvalue.value : props.modelValue
      },
      set(newValue) {
        if (isNull(props.modelValue)) {
          lvalue.value = newValue
        } else {
          emit('update:modelValue', newValue)
        }
      },
    })
    //non reactive properties
    let $_autoDelayTimer: ReturnType<typeof setTimeout> | undefined
    let $_autoRepeatTimer: ReturnType<typeof setTimeout> | undefined
    let $_keyIsDown = false

    // const computedInline = computed(() => props.inline && !props.vertical)

    // const computedReadonly = computed(() => props.readonly && !props.disabled)

    const computedStep = computed(() => toFloat(props.step, DEFAULT_STEP))

    const computedMin = computed(() => toFloat(props.min, DEFAULT_MIN))

    const computedMax = computed(() => {
      const max = toFloat(props.max, DEFAULT_MAX)
      const step = computedStep.value
      const min = computedMin.value
      return Math.floor((max - min) / step) * step + min
    })

    const computedDelay = computed(() => {
      const delay = toInteger(props.repeatDelay as number, 0)
      return delay > 0 ? delay : DEFAULT_REPEAT_DELAY
    })

    const computedInterval = computed(() => {
      const interval = toInteger(props.repeatInterval as number, 0)
      return interval > 0 ? interval : DEFAULT_REPEAT_INTERVAL
    })

    const computedThreshold = computed(() =>
      Math.max(toInteger(props.repeatThreshold as number, DEFAULT_REPEAT_THRESHOLD), 1)
    )

    const computedStepMultiplier = computed(() =>
      Math.max(toInteger(props.repeatStepMultiplier as number, DEFAULT_REPEAT_MULTIPLIER), 1)
    )

    const computedPrecision = computed(() => {
      const step = computedStep.value
      return Math.floor(step) === step ? 0 : (step.toString().split('.')[1] || '').length
    })

    const computedMultiplier = computed(() => Math.pow(10, computedPrecision.value || 0))

    const valueAsFixed = computed(() => {
      const {value} = localValue
      return value === null ? '' : value.toFixed(computedPrecision.value)
    })

    const computedLocale = computed(() => {
      //todo
      const locales = [props.locale]
      const nf = new Intl.NumberFormat(locales)
      return nf.resolvedOptions().locale
    })

    const computedRTL = computed(() =>
      //todo
      isLocaleRTL(computedLocale.value)
    )

    const defaultFormatter = () => {
      //locale needs to be resolved
      // Returns and `Intl.NumberFormat` formatter method reference
      const precision = computedPrecision.value
      const nf = new Intl.NumberFormat(computedLocale.value, {
        style: 'decimal',
        useGrouping: false,
        minimumIntegerDigits: 1,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
        notation: 'standard',
      })

      return nf.format
    }
    //TODO allow for prop formatter function
    const computedFormatter = computed(() =>
      props.formatterFn ? props.formatterFn : defaultFormatter()
    )

    const computedAttrs = computed(() => ({
      role: 'group',
      lang: computedLocale.value,
      tabindex: props.disabled ? null : '-1',
      title: props.ariaLabel,
    }))
    const hasValue: ComputedRef = computed(() => !isNull(props.modelValue) || !isNull(lvalue.value))

    const computedSpinAttrs = computed(() => ({
      'dir': computedRTL.value,
      'spinId': spinId.value,
      'tabindex': props.disabled ? null : '0',
      'role': 'spinbutton',
      'aria-live': 'off',
      'aria-label': props.ariaLabel || null,
      'aria-controls': props.ariaControls || null,
      'aria-invalid': props.state === false || (!hasValue.value && props.required) ? 'true' : null,
      'aria-required': props.required ? 'true' : null,
      'aria-valuemin': computedMin.value,
      'aria-valuemax': computedMax.value,
      'aria-valuenow': !isNull(localValue.value) ? localValue.value : null,
      'aria-valuetext': !isNull(localValue.value)
        ? computedFormatter.value(localValue.value)
        : null,
    }))

    // methods

    const stepValue = (direction: number) => {
      // Sets a new incremented or decremented value, supporting optional wrapping
      // Direction is either +1 or -1 (or a multiple thereof)
      let {value} = localValue
      if (!props.disabled && !isNull(value)) {
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
        localValue.value =
          value > max ? (wrap ? min : max) : value < min ? (wrap ? max : min) : value
      }
    }
    // const onFocusBlur = (event: FocusEvent) => {
    //   hasFocus.value = props.disabled ? false : event.type === 'focus'
    // }

    const stepUp = (multiplier = 1) => {
      if (isNull(localValue.value)) {
        localValue.value = computedMin.value
      } else {
        stepValue(+1 * multiplier)
      }
    }
    const stepDown = (multiplier = 1) => {
      if (isNull(localValue.value)) {
        localValue.value = props.wrap ? computedMax.value : computedMin.value
      } else {
        stepValue(-1 * multiplier)
      }
    }

    const onKeydown = (event: KeyboardEvent) => {
      const {code, altKey, ctrlKey, metaKey} = event

      /* istanbul ignore if */
      if (props.disabled || props.readonly || altKey || ctrlKey || metaKey) {
        return
      }

      if (KEY_CODES.includes(code)) {
        // https://w3c.github.io/aria-practices/#spinbutton
        stopEvent(event, {propagation: false})
        /* istanbul ignore if */
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
          } else if (code === CODE_DOWN) {
            handleStepRepeat(event, stepDown)
          }
        } else {
          // These use native OS key repeating
          if (code === CODE_PAGEUP) {
            stepUp(computedStepMultiplier.value)
          } else if (code === CODE_PAGEDOWN) {
            stepDown(computedStepMultiplier.value)
          } else if (code === CODE_HOME) {
            localValue.value = computedMin.value
          } else if (code === CODE_END) {
            localValue.value = computedMax.value
          }
        }
      }
    }
    const onKeyup = (event: KeyboardEvent) => {
      // Emit a change event when the keyup happens

      const {code, altKey, ctrlKey, metaKey} = event

      /* istanbul ignore if */
      if (props.disabled || props.readonly || altKey || ctrlKey || metaKey) {
        return
      }
      if (KEY_CODES.includes(code)) {
        stopEvent(event, {propagation: false})
        resetTimers()
        $_keyIsDown = false
        emitChange()
      }
    }

    // takes in a mount or Keyboard Event
    const handleStepRepeat = (event: Event, stepper: (step: number) => void) => {
      const {type} = event || {}

      if (!props.disabled && !props.readonly) {
        /* istanbul ignore if */
        if (isMouseEvent(event)) {
          if (type === 'mousedown' && event.button) {
            // We only respond to left (main === 0) button clicks
            return
          }
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

    function isMouseEvent(evt: Event): evt is MouseEvent {
      return evt.type === 'mouseup' || evt.type === 'mousedown'
    }
    // eslint-disable-next-line no-undef
    const onMouseup: EventListener = (event: Event) => {
      // `<body>` listener, only enabled when mousedown starts

      /* istanbul ignore if */
      if (isMouseEvent(event)) {
        if (event.type === 'mouseup' && event.button) {
          // Ignore non left button (main === 0) mouse button click
          return
        }
      }

      stopEvent(event, {propagation: false})
      resetTimers()
      setMouseup(false)
      // Trigger the change event
      emitChange()
    }

    const setMouseup = (on: boolean) => {
      // Enable or disabled the body mouseup/touchend handlers
      // Use try/catch to handle case when called server side
      try {
        eventOnOff(on, [document.body, 'mouseup', onMouseup, false])
        eventOnOff(on, [document.body, 'touchend', onMouseup, false])
      } catch {
        return 0
      }
    }
    const resetTimers = () => {
      clearTimeout($_autoDelayTimer)
      clearInterval($_autoRepeatTimer)
      $_autoDelayTimer = undefined
      $_autoRepeatTimer = undefined
    }

    // const clearRepeat = () => {
    //   resetTimers()
    //   setMouseup(false)
    //   $_keyIsDown = false
    // }

    // Render Helping functions
    const makeButton = (
      stepper: (multiplier?: number) => void,
      label: string,
      IconCmp: any,
      keyRef: string,
      shortcut: any,
      btnDisabled: boolean,
      slotName: string
    ) => {
      const $icon = h(IconCmp, {
        props: {scale: hasFocus.value ? 1.5 : 1.25},
        attrs: {'aria-hidden': 'true'},
      })

      const scope = {hasFocus: hasFocus.value}

      const handler = (event: Event) => {
        if (!props.disabled && !props.readonly) {
          stopEvent(event, {propagation: false})
          setMouseup(true)
          // Since we `preventDefault()`, we must manually focus the button
          // attemptFocus(event.currentTarget)
          handleStepRepeat(event, stepper)
        }
      }

      return h(
        'button',
        {
          'class': [{'py-0': !props.vertical}, 'btn', 'btn-sm', 'border-0', 'rounded-0'],
          'tabindex': '-1',
          'type': 'button',
          'disabled': props.disabled || props.readonly || btnDisabled,
          'aria-disabled': props.disabled || props.readonly || btnDisabled ? 'true' : null,
          'aria-controls': spinId.value,
          'aria-label': label || null,
          'aria-keyshortcuts': shortcut || null,
          'onmousedown': handler,
          'ontouchstart': handler,
          // 'ref': keyRef,
        },
        [normalizeSlot(slotName, scope) || $icon]
      )
    }
    return () => {
      //component definitions
      const $increment = makeButton(
        stepUp,
        props.labelIncrement,
        h(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '16',
            height: '16',
            fill: 'currentColor',
            class: 'bi bi-plus',
            viewBox: '0 0 16 16',
          },
          h('path', {
            d: 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z',
          })
        ),
        'inc',
        'ArrowUp',
        false,
        'increment'
      )
      const $decrement = makeButton(
        stepDown,
        props.labelDecrement,
        h(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '16',
            height: '16',
            fill: 'currentColor',
            class: 'bi bi-dash',
            viewBox: '0 0 16 16',
          },
          h('path', {d: 'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'})
        ),
        'dec',
        'ArrowDown',
        false,
        'decrement'
      )

      const $hidden = []

      if (props.name && !props.disabled) {
        $hidden.push(
          h('input', {
            type: 'hidden',
            name: props.name,
            form: props.form || null,
            // TODO: Should this be set to '' if value is out of range?
            value: valueAsFixed.value,
            key: 'hidden',
          })
        )
      }

      const $spin = h(
        // We use 'output' element to make this accept a `<label for="id">` (Except IE)
        'output',
        {
          class: [
            {'d-flex': props.vertical},
            {'align-self-center': !props.vertical},
            {'align-items-center': props.vertical},
            {'border-top': props.vertical},
            {'border-bottom': props.vertical},
            {'border-start': !props.vertical},
            {'border-end': !props.vertical},
            'flex-grow-1',
          ],
          ...computedSpinAttrs.value,
          key: 'output',
          // ref: 'spinner',
        },
        [
          h(
            'bdi',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore How can we narrow this type down
            hasValue.value ? computedFormatter.value(localValue.value) : props.placeholder || ''
          ),
        ]
      )

      return h(
        'div',
        {
          class: [
            'b-form-spinbutton form-control',
            {disabled: props.disabled},
            {readonly: props.readonly},
            {focus: hasFocus},
            {'d-inline-flex': props.inline || props.vertical},
            {'d-flex': !props.inline && !props.vertical},
            {'align-items-stretch': !props.vertical},
            {'flex-column': props.vertical},
            props.size ? `form-control-${props.size}` : null,
            // this.stateClass //TODO
          ],
          ...computedAttrs.value,
          onkeydown: onKeydown,
          onkeyup: onKeyup,
          // We use capture phase (`!` prefix) since focus and blur do not bubble
          // 'focus': onFocusBlur, //TODO
          // 'blur': onFocusBlur, //TODO
        },
        props.vertical
          ? [$increment, $hidden, $spin, $decrement]
          : [$decrement, $hidden, $spin, $increment]
      )
    }
  },
})
</script>

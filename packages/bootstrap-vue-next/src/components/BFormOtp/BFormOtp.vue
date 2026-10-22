<template>
  <div :class="computedClasses">
    <input
      :id="computedId"
      ref="_input"
      type="text"
      class="otp-input"
      :value="computedValue"
      :name="props.name || undefined"
      :form="props.form || undefined"
      :maxlength="computedLength"
      :inputmode="typeConfig.inputmode"
      :pattern="typeConfig.pattern"
      :disabled="isDisabled"
      :readonly="props.readonly || undefined"
      :required="props.required || undefined"
      :autocomplete="'one-time-code'"
      :aria-label="props.ariaLabel"
      :aria-required="props.required || undefined"
      :aria-invalid="computedAriaInvalid"
      @input="onInput"
      @beforeinput="onBeforeInput"
      @paste="onPaste"
      @pointerdown="onPointerDown"
      @focus="onFocus"
      @blur="onBlur"
      @keyup="syncCaret"
      @select="syncCaret"
    />
    <div class="otp-slots" aria-hidden="true">
      <template v-for="item in items" :key="item.key">
        <div
          v-if="item.type === 'slot'"
          :ref="(el) => setSlotRef(el, item.index)"
          :class="[
            'otp-slot',
            {
              'otp-slot-filled': !!computedValue[item.index],
              'otp-slot-active': focused && item.index === activeIndex,
            },
          ]"
        >
          {{ slotText(item.index) }}
        </div>
        <div v-else class="otp-separator">{{ props.separator }}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, nextTick, onMounted, ref, useTemplateRef} from 'vue'
import {useEventListener, useToNumber} from '@vueuse/core'
import type {BFormOtpEmits, BFormOtpProps, OtpType} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {useAriaInvalid} from '../../composables/useAriaInvalid'
import {useStateClass} from '../../composables/useStateClass'
import {getSafeDocument} from '../../utils/dom'
import {formGroupKey} from '../../utils/keys'

const lengthDefault = 6
const maskCharacter = '•'

// Per-type input mode, validation pattern, and a filter that strips disallowed characters
const typeConfigs: Record<
  OtpType,
  {inputmode: 'numeric' | 'text'; pattern: string; filter: RegExp}
> = {
  numeric: {inputmode: 'numeric', pattern: '[0-9]*', filter: /[^0-9]/g},
  alphanumeric: {inputmode: 'text', pattern: '[A-Za-z0-9]*', filter: /[^A-Za-z0-9]/g},
  alpha: {inputmode: 'text', pattern: '[A-Za-z]*', filter: /[^A-Za-z]/g},
}

const _props = withDefaults(defineProps<Omit<BFormOtpProps, 'modelValue'>>(), {
  ariaInvalid: undefined,
  ariaLabel: undefined,
  autofocus: false,
  connected: false,
  disabled: false,
  form: undefined,
  groups: undefined,
  id: undefined,
  length: lengthDefault,
  mask: false,
  name: undefined,
  readonly: false,
  required: false,
  separator: '·',
  size: undefined,
  state: undefined,
  type: 'numeric',
})
const props = useDefaults(_props, 'BFormOtp')
const emit = defineEmits<BFormOtpEmits>()

const modelValue = defineModel<string | null>({default: ''})

const input = useTemplateRef<HTMLInputElement>('_input')
const slotElements = new Map<number, HTMLElement>()
const setSlotRef = (el: unknown, index: number) => {
  if (el instanceof HTMLElement) slotElements.set(index, el)
  else slotElements.delete(index)
}

const computedId = useId(() => props.id, 'form-otp')
const formGroupData = inject(formGroupKey, null)?.()
formGroupData?.track(computedId)

const lengthNumber = useToNumber(() => props.length, {nanToZero: true, method: 'parseInt'})
const computedLength = computed(() => (lengthNumber.value > 0 ? lengthNumber.value : lengthDefault))
const typeConfig = computed(() => typeConfigs[props.type] ?? typeConfigs.numeric)

const sanitize = (value: string) =>
  value.replace(typeConfig.value.filter, '').slice(0, computedLength.value)

const computedValue = computed(() => sanitize(modelValue.value ?? ''))

const computedState = computed(() =>
  props.state !== undefined ? props.state : (formGroupData?.state.value ?? null)
)
const isDisabled = computed(() => props.disabled || (formGroupData?.disabled.value ?? false))
const computedAriaInvalid = useAriaInvalid(() => props.ariaInvalid, computedState)
const stateClass = useStateClass(computedState)

const computedClasses = computed(() => [
  'otp',
  'otp-rendered',
  stateClass.value,
  {
    'otp-connected': props.connected,
    [`otp-${props.size}`]: !!props.size,
  },
])

// Slots and separators; separators are visual only and never part of the value
const items = computed(() => {
  const out: ({type: 'slot'; index: number; key: string} | {type: 'separator'; key: string})[] = []
  const groups = props.groups
  let groupIndex = 0
  let inGroup = 0
  for (let i = 0; i < computedLength.value; i++) {
    out.push({type: 'slot', index: i, key: `slot-${i}`})
    if (Array.isArray(groups) && groups.length > 0) {
      inGroup++
      if (inGroup === groups[groupIndex] && i < computedLength.value - 1) {
        out.push({type: 'separator', key: `separator-${i}`})
        groupIndex = Math.min(groupIndex + 1, groups.length - 1)
        inGroup = 0
      }
    }
  }
  return out
})

const focused = ref(false)
const caret = ref(0)
const activeIndex = computed(() => Math.min(caret.value, computedLength.value - 1))
const slotText = (index: number) => {
  const char = computedValue.value[index] ?? ''
  return char && props.mask ? maskCharacter : char
}

// Tracks whether focus came from a pointer, so the clicked slot is respected
let pointerActive = false
let pointerIndex = 0

const firstEmptyIndex = () => Math.min(computedValue.value.length, computedLength.value - 1)

// A filled slot is represented as a selection so the next keystroke overwrites
// it; an empty slot gets a collapsed caret.
const selectSlot = (index: number) => {
  const el = input.value
  if (!el) return
  const clamped = Math.max(0, Math.min(index, computedLength.value - 1))
  const end = clamped < el.value.length ? clamped + 1 : clamped
  el.setSelectionRange(clamped, end)
  caret.value = clamped
}

const syncCaret = () => {
  const el = input.value
  if (!el) return
  caret.value = el.selectionStart ?? el.value.length
}

const commit = (value: string) => {
  const el = input.value
  if (el && el.value !== value) el.value = value
  const changed = value !== (modelValue.value ?? '')
  modelValue.value = value
  if (changed && value.length === computedLength.value) emit('complete', value)
}

const onInput = () => {
  const el = input.value
  if (!el) return
  const sanitized = sanitize(el.value)
  if (getSafeDocument()?.activeElement === el) {
    el.value = sanitized
    selectSlot(Math.min(sanitized.length, computedLength.value - 1))
  }
  commit(sanitized)
  el.value = sanitized
}

// Overwrite in place on single keystrokes instead of inserting and shifting the value
const onBeforeInput = (event: Event) => {
  const el = input.value
  const {inputType, data} = event as InputEvent
  if (!el || props.readonly) return

  if (inputType === 'insertText' && data && data.length === 1) {
    event.preventDefault()
    const char = sanitize(data)
    if (!char) return
    const index = Math.min(el.selectionStart ?? 0, computedLength.value - 1)
    const chars = [...el.value]
    chars[index] = char
    const next = chars.join('').slice(0, computedLength.value)
    el.value = next
    selectSlot(index + 1)
    commit(next)
    return
  }

  if (inputType === 'deleteContentBackward') {
    event.preventDefault()
    const start = el.selectionStart ?? 0
    const end = el.selectionEnd ?? start
    const chars = [...el.value]
    let target = start
    if (end > start) {
      chars.splice(start, end - start)
    } else if (start > 0) {
      chars.splice(start - 1, 1)
      target = start - 1
    }
    const next = chars.join('')
    el.value = next
    selectSlot(target)
    commit(next)
  }
}

const onPaste = (event: ClipboardEvent) => {
  const el = input.value
  const pasted = event.clipboardData?.getData('text')
  if (!el || !pasted || props.readonly) return

  const sanitized = sanitize(pasted)
  // Sanitize before applying the length limit; the browser would otherwise cut
  // the raw clipboard text and drop valid characters that follow separators.
  let start = el.selectionStart ?? el.value.length
  let end = el.selectionEnd ?? start
  if (sanitized.length === computedLength.value) {
    start = 0
    end = el.value.length
  }
  const inserted = sanitized.slice(0, computedLength.value - el.value.length + end - start)

  event.preventDefault()
  if (!inserted) return
  el.setRangeText(inserted, start, end, 'end')
  selectSlot(Math.min(el.value.length, computedLength.value - 1))
  commit(el.value)
}

const slotIndexFromPoint = (x: number) => {
  const last = computedLength.value - 1
  for (let i = 0; i <= last; i++) {
    const rect = slotElements.get(i)?.getBoundingClientRect()
    if (!rect || x <= rect.right || i === last) return i
  }
  return last
}

const onPointerDown = (event: PointerEvent) => {
  const el = input.value
  if (!el || isDisabled.value) return
  // The caret cannot land past the first empty slot
  const target = Math.min(slotIndexFromPoint(event.clientX), firstEmptyIndex())
  if (getSafeDocument()?.activeElement === el) {
    event.preventDefault()
    selectSlot(target)
    return
  }
  // Let the browser focus natively (raises the mobile keyboard); position on focus
  pointerActive = true
  pointerIndex = target
}

const onFocus = () => {
  focused.value = true
  if (pointerActive) {
    pointerActive = false
    selectSlot(pointerIndex)
    return
  }
  selectSlot(firstEmptyIndex())
}

const onBlur = () => {
  focused.value = false
}

useEventListener(getSafeDocument(), 'selectionchange', () => {
  if (focused.value) syncCaret()
})

onMounted(() => {
  if (props.autofocus && !isDisabled.value) nextTick(() => input.value?.focus())
})

defineExpose({
  blur: () => input.value?.blur(),
  clear: () => {
    commit('')
    input.value?.focus()
  },
  element: input,
  focus: () => {
    if (!isDisabled.value) input.value?.focus()
  },
})
</script>

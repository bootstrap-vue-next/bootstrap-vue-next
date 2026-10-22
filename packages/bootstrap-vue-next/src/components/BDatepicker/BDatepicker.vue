<template>
  <div v-if="props.inline">
    <div :id="computedId" ref="_element" data-bs-toggle="datepicker" data-bs-inline="true" />
    <input v-if="props.name" type="hidden" :name="props.name" :value="hiddenValue" />
  </div>
  <button
    v-else-if="props.trigger === 'button'"
    :id="computedId"
    ref="_element"
    type="button"
    class="btn-outline theme-secondary"
    :class="props.size ? `btn-${props.size}` : undefined"
    data-bs-toggle="datepicker"
    :disabled="props.disabled || props.readonly"
  >
    <slot>
      <slot name="icon" />
      <span data-bs-datepicker-display>{{ props.placeholder }}</span>
    </slot>
  </button>
  <input
    v-else
    :id="computedId"
    ref="_element"
    type="text"
    data-bs-toggle="datepicker"
    :class="computedClasses"
    :name="props.name"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :readonly="props.readonly || props.plaintext"
    :required="props.required || undefined"
    :aria-required="props.required || undefined"
    :aria-invalid="computedAriaInvalid"
    autocomplete="off"
  />
</template>

<script setup lang="ts" generic="Mode extends DatepickerSelectionMode = 'single'">
import {computed, nextTick, onBeforeUnmount, onMounted, useTemplateRef, watch} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {useStateClass} from '../../composables/useStateClass'
import type {
  BDatepickerEmits,
  BDatepickerProps,
  BDatepickerSlots,
  DatepickerSelectionMode,
  DatepickerValue,
} from '../../types'

interface DatepickerInstance {
  show: () => Promise<void>
  hide: () => Promise<void>
  toggle: () => Promise<void>
  getSelectedDates: () => string[]
  setSelectedDates: (dates: string[]) => void
  dispose: () => void
}

const _props = withDefaults(defineProps<Omit<BDatepickerProps<Mode>, 'modelValue'>>(), {
  dateFormat: undefined,
  dateMax: undefined,
  dateMin: undefined,
  datepickerTheme: undefined,
  disabled: false,
  displayElement: undefined,
  displayMonthsCount: 1,
  firstWeekday: 1,
  id: undefined,
  inline: false,
  locale: undefined,
  name: undefined,
  placeholder: undefined,
  placement: 'left',
  plaintext: false,
  positionElement: undefined,
  readonly: false,
  required: false,
  selectionMode: 'single' as never,
  size: undefined,
  state: null,
  trigger: 'input',
  vcpOptions: undefined,
})
const props = useDefaults(
  _props as unknown as Omit<BDatepickerProps<DatepickerSelectionMode>, 'modelValue'>,
  'BDatepicker'
)

const emit = defineEmits<BDatepickerEmits>()
defineSlots<BDatepickerSlots>()

const modelValue = defineModel<DatepickerValue<Mode> | undefined>({default: undefined})

const element = useTemplateRef<HTMLElement>('_element')
const computedId = useId(() => props.id, 'datepicker')
const stateClass = useStateClass(() => props.state ?? null)

const computedClasses = computed(() => [
  stateClass.value,
  {
    'form-control': !props.plaintext,
    'form-control-plaintext': props.plaintext,
    [`form-control-${props.size}`]: !!props.size,
  },
])

const computedAriaInvalid = computed(() => (props.state === false ? true : undefined))

let instance: DatepickerInstance | null = null
let isUnmounted = false

const toDates = (value: DatepickerValue<Mode> | undefined | null): string[] => {
  if (Array.isArray(value)) return [...value]
  return typeof value === 'string' && value !== '' ? [value] : []
}

const fromDates = (dates: string[]): DatepickerValue<Mode> =>
  (props.selectionMode === 'single' ? (dates[0] ?? null) : dates) as DatepickerValue<Mode>

const hiddenValue = computed(() => toDates(modelValue.value).join(','))
const sameDates = (a: string[], b: string[]) =>
  a.length === b.length && a.every((d, i) => d === b[i])

const buildConfig = () => {
  const config: Record<string, unknown> = {
    displayMonthsCount: props.displayMonthsCount,
    firstWeekday: props.firstWeekday,
    inline: props.inline,
    placement: props.placement,
    selectedDates: toDates(modelValue.value),
    selectionMode: props.selectionMode,
  }
  const optional = {
    dateFormat: props.dateFormat,
    dateMax: props.dateMax,
    dateMin: props.dateMin,
    datepickerTheme: props.datepickerTheme,
    displayElement: props.displayElement,
    locale: props.locale,
    positionElement: props.positionElement,
    vcpOptions: props.vcpOptions,
  }
  for (const [key, value] of Object.entries(optional)) {
    if (value !== undefined) config[key] = value
  }
  return config
}

const onChange = (event: Event) => {
  const dates = (event as Event & {dates?: string[]}).dates
  if (!dates) return
  modelValue.value = fromDates(dates)
  emit('change', {dates: [...dates], event})
}
const onShow = (event: Event) => emit('show', event)
const onShown = (event: Event) => emit('shown', event)
const onHide = (event: Event) => emit('hide', event)
const onHidden = (event: Event) => emit('hidden', event)

const listeners: [string, (event: Event) => void][] = [
  ['change.bs.datepicker', onChange],
  ['show.bs.datepicker', onShow],
  ['shown.bs.datepicker', onShown],
  ['hide.bs.datepicker', onHide],
  ['hidden.bs.datepicker', onHidden],
]

const destroy = () => {
  const el = element.value
  if (el) for (const [name, fn] of listeners) el.removeEventListener(name, fn)
  instance?.dispose()
  instance = null
}

const init = async () => {
  // Bootstrap's JS touches `document` at import time, so it must only load in the browser
  const {default: Datepicker} = await import('bootstrap/js/dist/datepicker.js')
  const el = element.value
  if (isUnmounted || !el) return
  for (const [name, fn] of listeners) el.addEventListener(name, fn)
  instance = new Datepicker(el, buildConfig() as never) as unknown as DatepickerInstance
}

onMounted(init)
onBeforeUnmount(() => {
  isUnmounted = true
  destroy()
})

watch(modelValue, (value) => {
  if (!instance) return
  const dates = toDates(value)
  if (!sameDates(dates, instance.getSelectedDates())) instance.setSelectedDates(dates)
})

// The Bootstrap plugin reads its config once, so any option change requires a new instance
watch(
  () => [
    props.dateFormat,
    props.dateMax,
    props.dateMin,
    props.datepickerTheme,
    props.displayElement,
    props.displayMonthsCount,
    props.firstWeekday,
    props.inline,
    props.locale,
    props.placement,
    props.positionElement,
    props.selectionMode,
    props.trigger,
    props.vcpOptions,
  ],
  async () => {
    destroy()
    await nextTick()
    await init()
  }
)

defineExpose({
  element,
  getSelectedDates: () => {
    const dates = instance?.getSelectedDates() ?? []
    return dates.length > 0 ? dates : toDates(modelValue.value)
  },
  hide: () => instance?.hide(),
  setSelectedDates: (dates: string[]) => instance?.setSelectedDates(dates),
  show: () => instance?.show(),
  toggle: () => instance?.toggle(),
})
</script>

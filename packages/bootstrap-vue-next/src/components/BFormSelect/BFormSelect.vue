<template>
  <select
    :id="computedId"
    ref="input"
    v-model="localValue"
    :class="computedClasses"
    :name="name"
    :form="form || undefined"
    :multiple="multipleBoolean || undefined"
    :size="computedSelectSize"
    :disabled="disabledBoolean"
    :required="requiredBoolean || undefined"
    :aria-required="requiredBoolean || undefined"
    :aria-invalid="computedAriaInvalid"
  >
    <slot name="first" />
    <template v-for="(option, index) in formOptions" :key="index">
      <BFormSelectOptionGroup
        v-if="Array.isArray((option as any).options)"
        :label="(option as any).label"
        :options="(option as any).options"
      />
      <!-- eslint-disable vue/no-v-text-v-html-on-component -->
      <!-- eslint-disable vue/no-v-html -->
      <BFormSelectOption
        v-else
        :value="(option as any).value"
        :disabled="(option as any).disabled"
        v-html="(option as any).html || (option as any).text"
      />
      <!--eslint-enable-->
    </template>
    <slot />
  </select>
</template>

<script setup lang="ts">
import type {AriaInvalid, Booleanish, Size} from '../../types'
import {computed, nextTick, ref, toRef} from 'vue'
import BFormSelectOption from './BFormSelectOption.vue'
import BFormSelectOptionGroup from './BFormSelectOptionGroup.vue'
import {
  normalizeOptions,
  useAriaInvalid,
  useBooleanish,
  useId,
  useStateClass,
} from '../../composables'
import {useFocus, useToNumber, useVModel} from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    ariaInvalid?: AriaInvalid
    autofocus?: Booleanish
    disabled?: Booleanish
    disabledField?: string
    form?: string
    htmlField?: string
    id?: string
    labelField?: string
    modelValue?: string | unknown[] | Record<string, unknown> | number | null
    multiple?: Booleanish
    name?: string
    options?: unknown[] | Record<string, unknown> // TODO It was declared deprecated in useFormSelect to use a Record. https://bootstrap-vue.org/docs/components/form-select#options-as-an-object
    optionsField?: string
    plain?: Booleanish
    required?: Booleanish
    selectSize?: number | string
    size?: Size
    state?: Booleanish | null
    textField?: string
    valueField?: string
  }>(),
  {
    ariaInvalid: undefined,
    autofocus: false,
    disabled: false,
    disabledField: 'disabled',
    form: undefined,
    htmlField: 'html',
    id: undefined,
    labelField: 'label',
    modelValue: '',
    multiple: false,
    name: undefined,
    options: () => [],
    optionsField: 'options',
    plain: false,
    required: false,
    selectSize: 0,
    size: 'md',
    state: null,
    textField: 'text',
    valueField: 'value',
  }
)

const emit = defineEmits<{
  'change': [value: unknown]
  'input': [value: unknown]
  'update:modelValue': [value: unknown]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  first?: (props: Record<string, never>) => any
}>()

const modelValue = useVModel(props, 'modelValue', emit)

const computedId = useId(() => props.id, 'input')

const autofocusBoolean = useBooleanish(() => props.autofocus)
const disabledBoolean = useBooleanish(() => props.disabled)
const multipleBoolean = useBooleanish(() => props.multiple)
const plainBoolean = useBooleanish(() => props.plain)
const requiredBoolean = useBooleanish(() => props.required)
const stateBoolean = useBooleanish(() => props.state)
const selectSizeNumber = useToNumber(() => props.selectSize)

const stateClass = useStateClass(stateBoolean)

const input = ref<HTMLElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const computedClasses = computed(() => [
  stateClass.value,
  {
    'form-control': plainBoolean.value,
    [`form-control-${props.size}`]: props.size !== 'md' && plainBoolean.value,
    'form-select': !plainBoolean.value,
    [`form-select-${props.size}`]: props.size !== 'md' && !plainBoolean.value,
  },
])

const computedSelectSize = toRef(() =>
  selectSizeNumber.value || plainBoolean.value ? selectSizeNumber.value : undefined
)

const computedAriaInvalid = useAriaInvalid(() => props.ariaInvalid, stateBoolean)

// TODO this needs to be redone to fit the structure of BFormCheckboxGroup
// It also doesn't work for array syntaxes. Review second example from https://bootstrap-vue.org/docs/components/form-select
// For more info on how it should behave
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formOptions = computed(() => normalizeOptions(props.options as any[], 'BFormSelect', props))
const localValue = computed({
  get: () => modelValue.value,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set: (newValue: any) => {
    emit('input', newValue)
    modelValue.value = newValue
    nextTick(() => {
      emit('change', newValue)
    })
  },
})

defineExpose({
  blur: () => {
    focused.value = false
  },
  element: input,
  focus: () => {
    focused.value = true
  },
})
</script>

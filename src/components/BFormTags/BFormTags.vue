<template>
  <div
    :id="computedId"
    class="b-form-tags form-control h-auto"
    :class="classes"
    role="group"
    tabindex="-1"
    @focusin="onFocusin"
    @focusout="$emit('focusout', $event)"
  >
    <output
      :id="`${computedId}selected_tags__`"
      class="visually-hidden"
      role="status"
      :for="_inputId"
      :aria-live="focus ? 'polite' : 'off'"
      aria-atomic="true"
      aria-relevant="additions text"
      >{{ tags.join(', ') }}</output
    >
    <div
      :id="`${computedId}removed_tags__`"
      role="status"
      :aria-live="focus ? 'assertive' : 'off'"
      aria-atomic="true"
      class="visually-hidden"
    >
      ({{ tagRemovedLabel }}) {{ lastRemovedTag }}
    </div>

    <slot v-bind="slotAttrs">
      <ul
        :id="`${computedId}tag_list__`"
        class="b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
      >
        <b-form-tag
          v-for="tag in tags"
          :key="tag"
          :class="tagClass"
          tag="li"
          :variant="tagVariant"
          :pill="tagPills"
          @remove="removeTag"
          >{{ tag }}</b-form-tag
        >
        <li
          role="none"
          aria-live="off"
          class="b-from-tags-field flex-grow-1"
          :aria-controls="`${computedId}tag_list__`"
        >
          <div role="group" class="d-flex">
            <input
              :id="_inputId"
              ref="input"
              :disabled="disabled"
              :value="inputValue"
              :type="inputType"
              :placeholder="placeholder"
              class="b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0"
              style="outline: currentcolor none 0px; min-width: 5rem"
              v-bind="inputAttrs"
              :form="form"
              :required="required"
              @input="onInput"
              @change="onChange"
              @keydown="onKeydown"
              @focus="onFocus"
              @blur="onBlur"
            />
            <button
              v-if="disableAddButton"
              type="button"
              class="btn b-form-tags-button py-0"
              :class="[
                `btn-${addButtonVariant}`,
                {
                  'disabled invisible': inputValue.length === 0,
                },
                inputClass,
              ]"
              style="font-size: 90%"
              :disabled="disabled || inputValue.length === 0 || isLimitReached"
              @click="addTag(inputValue)"
            >
              <slot name="add-button-text">{{ addButtonText }}</slot>
            </button>
          </div>
        </li>
      </ul>
      <div aria-live="polite" aria-atomic="true">
        <div v-if="isInvalid" class="d-block invalid-feedback">
          {{ invalidTagText }}: {{ inputValue }}
        </div>
        <small v-if="isDuplicate" class="form-text text-muted"
          >{{ duplicateTagText }}: {{ inputValue }}</small
        >
        <small v-if="tags.length === limit" class="form-text text-muted">Tag limit reached</small>
      </div>
    </slot>
    <template v-if="name">
      <input v-for="tag in tags" :key="tag" type="hidden" :name="name" :value="tag" />
    </template>
  </div>
</template>

<script setup lang="ts">
// import type {BFormTagsEmits, BFormTagsProps} from '../types/components'
import {computed, onActivated, onMounted, ref, VNodeNormalizedChildren, watch} from 'vue'
import BFormTag from './BFormTag.vue'
import useId from '../../composables/useId'
import type {ButtonVariant, ColorVariant, InputSize, InputType} from '../../types'

interface BFormTagsProps {
  addButtonText?: string
  addButtonVariant?: ButtonVariant
  addOnChange?: boolean
  autofocus?: boolean
  disabled?: boolean
  duplicateTagText?: string
  inputAttrs?: Record<string, unknown>
  inputClass?: Array<unknown> | Record<string, unknown> | string
  inputId?: string
  inputType?: InputType
  invalidTagText?: string
  form?: string
  limit?: number
  limitTagsText?: string
  modelValue?: Array<string>
  name?: string
  noAddOnEnter?: boolean
  noOuterFocus?: boolean
  noTagRemove?: boolean
  placeholder?: string
  removeOnDelete?: boolean
  required?: boolean
  separator?: string | Array<unknown>
  state?: boolean
  size?: InputSize
  tagClass?: string | Array<unknown> | Record<string, unknown>
  tagPills?: boolean
  tagRemoveLabel?: string
  tagRemovedLabel?: string
  tagValidator?: (t: string) => boolean
  tagVariant?: ColorVariant
}

const props = withDefaults(defineProps<BFormTagsProps>(), {
  addButtonText: 'Add',
  addButtonVariant: 'outline-secondary',
  addOnChange: false,
  autofocus: false,
  disabled: false,
  duplicateTagText: 'Duplicate tag(s)',
  inputType: 'text',
  invalidTagText: 'Invalid tag(s)',
  limitTagsText: 'Tag limit reached',
  modelValue: () => [],
  noAddOnEnter: false,
  noOuterFocus: false,
  noTagRemove: false,
  placeholder: 'Add tag...',
  removeOnDelete: false,
  required: false,
  state: undefined,
  tagPills: false,
  tagRemovedLabel: 'Tag removed',
  tagValidator: () => true,
  tagVariant: 'secondary',
})

interface BFormTagsEmits {
  (e: 'update:modelValue', value: Array<string>): void
  (e: 'input', value: Array<string>): void
  (e: 'tag-state', ...args: Array<Array<string>>): void
  (e: 'focus', value: FocusEvent): void
  (e: 'focusin', value: FocusEvent): void
  (e: 'focusout', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
}

const emit = defineEmits<BFormTagsEmits>()

const input = ref<HTMLInputElement | null>(null)
const computedId = useId()
const _inputId = computed<string>(() => props.inputId || `${computedId.value}input__`)

onMounted(() => {
  checkAutofocus()

  if (props.modelValue.length > 0) {
    shouldRemoveOnDelete.value = true
  }
})

onActivated(() => checkAutofocus())

watch(
  () => props.modelValue,
  (newVal) => {
    tags.value = newVal
  }
)

const tags = ref<Array<string>>(props.modelValue)
const inputValue = ref<string>('')
const shouldRemoveOnDelete = ref<boolean>(false)
const focus = ref<boolean>(false)
const lastRemovedTag = ref<string>('')

const validTags = ref<Array<string>>([])
const invalidTags = ref<Array<string>>([])
const duplicateTags = ref<Array<string>>([])

const classes = computed(() => ({
  [`form-control-${props.size}`]: props.size,
  'disabled': props.disabled,
  'focus': focus.value,
  'is-invalid': props.state === false,
  'is-valid': props.state === true,
}))

const isDuplicate = computed<boolean>(() => tags.value.includes(inputValue.value))

const isInvalid = computed<boolean>(() =>
  inputValue.value === '' ? false : !props.tagValidator(inputValue.value)
)
const isLimitReached = computed<boolean>(() => tags.value.length === props.limit)

const disableAddButton = computed<boolean>(() => !isInvalid.value && !isDuplicate.value)

const checkAutofocus = () => {
  if (props.autofocus) {
    input.value?.focus()
  }
}

const onFocusin = (e: FocusEvent): void => {
  if (props.disabled) {
    const target = e.target as HTMLDivElement
    target.blur()
    return
  }

  emit('focusin', e)
}

const onFocus = (e: FocusEvent): void => {
  if (props.disabled || props.noOuterFocus) {
    return
  }

  focus.value = true
  emit('focus', e)
}

const onBlur = (e: FocusEvent): void => {
  focus.value = false
  emit('blur', e)
}

const onInput = (e: Event | string): void => {
  const value = typeof e === 'string' ? e : (e.target as HTMLInputElement).value

  shouldRemoveOnDelete.value = false

  if (props.separator?.includes(value.charAt(0)) && value.length > 0) {
    if (input.value) {
      input.value.value = ''
    }
    return
  }

  inputValue.value = value

  if (props.separator?.includes(value.charAt(value.length - 1))) {
    addTag(value.slice(0, value.length - 1))
    return
  }

  validTags.value = props.tagValidator(value) && !isDuplicate.value ? [value] : []
  invalidTags.value = props.tagValidator(value) ? [] : [value]
  duplicateTags.value = isDuplicate.value ? [value] : []

  emit('tag-state', validTags.value, invalidTags.value, duplicateTags.value)
}

const onChange = (e: Event): void => {
  if (props.addOnChange) {
    onInput(e)

    if (!isDuplicate.value) {
      addTag(inputValue.value)
    }
  }
}

const onKeydown = (e: KeyboardEvent): void => {
  if (e.key === 'Enter' && !props.noAddOnEnter) {
    addTag(inputValue.value)
    return
  }

  if (
    (e.key === 'Backspace' || e.key === 'Delete') &&
    props.removeOnDelete &&
    inputValue.value === '' &&
    shouldRemoveOnDelete.value &&
    tags.value.length > 0
  ) {
    removeTag(tags.value[tags.value.length - 1])
  } else {
    shouldRemoveOnDelete.value = true
  }
}

const addTag = (tag?: string): void => {
  tag = (tag || inputValue.value).trim()

  if (
    tag === '' ||
    isDuplicate.value ||
    !props.tagValidator(tag) ||
    (props.limit && isLimitReached.value)
  ) {
    return
  }

  const newValue = [...props.modelValue, tag]
  inputValue.value = ''
  shouldRemoveOnDelete.value = true
  emit('update:modelValue', newValue)
  emit('input', newValue)
  input.value?.focus()
}

const removeTag = (tag?: VNodeNormalizedChildren): void => {
  const tagIndex = tags.value.indexOf(tag?.toString() ?? '')
  lastRemovedTag.value = tags.value.splice(tagIndex, 1).toString()

  emit('update:modelValue', tags.value)
}

const slotAttrs = computed(() => {
  const {
    addButtonText,
    addButtonVariant,
    disabled,
    duplicateTagText,
    inputAttrs,
    form,
    inputType,
    invalidTagText,
    limitTagsText,
    limit,
    noTagRemove,
    placeholder,
    required,
    separator,
    size,
    state,
    tagClass,
    tagPills,
    tagRemoveLabel,
    tagVariant,
  } = props
  return {
    addButtonText,
    addButtonVariant,
    addTag,
    disableAddButton,
    disabled,
    duplicateTagText,
    duplicateTags,
    form,
    inputAttrs: {
      ...inputAttrs,
      disabled,
      form,
      id: _inputId,
      value: inputValue,
    },
    inputHandlers: {
      input: onInput,
      keydown: onKeydown,
      change: onChange,
    },
    inputId: _inputId,
    inputType,
    invalidTagText,
    invalidTags,
    isDuplicate,
    isInvalid,
    isLimitReached,
    limitTagsText,
    limit,
    noTagRemove,
    placeholder,
    removeTag,
    required,
    separator,
    size,
    state,
    tagClass,
    tagPills,
    tagRemoveLabel,
    tagVariant,
    tags,
  }
})
</script>

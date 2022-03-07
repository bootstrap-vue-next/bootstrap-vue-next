<template>
  <div class="b-form-tags form-control h-auto" :class="classes" role="group" tabindex="-1">
    <output
      class="visually-hidden"
      role="status"
      for=""
      :aria-live="focus ? 'polite' : 'off'"
      aria-atomic="true"
      aria-relevant="additions text"
      >{{ value.join(', ') }}</output
    >
    <div
      role="status"
      :aria-live="focus ? 'assertive' : 'off'"
      aria-atomic="true"
      class="visually-hidden"
    >
      ({{ tagRemovedLabel }})
    </div>
    <ul class="b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center">
      <li
        v-for="(tag, i) in value"
        id=""
        :key="tag"
        :title="tag"
        class="badge b-form-tag d-inline-flex mw-100"
        :class="tagClasses"
        aria-labelledby=""
      >
        <span id="" class="b-form-tag-content flex-grow-1 text-truncate">{{ tag }}</span>
        <button
          v-if="!disabled && !noTagRemove"
          aria-keyshortcuts="Delete"
          type="button"
          :aria-label="tagRemoveLabel"
          class="btn-close btn-close-white b-form-tag-remove"
          aria-controls=""
          aria-describedby=""
          @click="removeTag(i)"
        ></button>
      </li>
      <li role="none" aria-live="off" class="b-from-tags-field flex-grow-1" aria-controls="">
        <div role="group" class="d-flex">
          <input
            :id="inputId"
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
            @keyup.enter.exact="onEnter"
            @keyup.delete.exact="onDelete"
            @focus="onFocus"
            @blur="focus = false"
          />
          <button
            v-if="validTag"
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
            :disabled="disabled || inputValue.length === 0"
            @click="addTag"
          >
            <slot name="add-button-text">{{ addButtonText }}</slot>
          </button>
        </div>
      </li>
    </ul>
    <div aria-live="polite" aria-atomic="true">
      <div v-if="!validTag" class="d-block invalid-feedback">Invalid tag(s): {{ inputValue }}</div>
      <small v-if="duplicateTag" class="form-text text-muted"
        >{{ duplicateTagText }}: {{ inputValue }}</small
      >
      <small v-if="value.length === limit" class="form-text text-muted">Tag limit reached</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, PropType, ref, watch} from 'vue'
import type {InputSize, InputType} from '../../types'

const props = defineProps({
  addButtonText: {type: String, default: 'Add'},
  addButtonVariant: {type: String, default: 'outline-secondary'},
  disabled: {type: Boolean, default: false},
  duplicateTagText: {type: String, default: 'Duplicate tag(s)'},
  inputAttrs: {type: Object},
  inputClass: {type: [Array, Object, String]},
  inputId: {type: String},
  inputType: {type: String as PropType<InputType>, default: 'text'},
  form: {type: String},
  limit: {type: Number},
  modelValue: {type: Array as PropType<string[]>, default: () => []},
  noAddOnEnter: {type: Boolean, default: false},
  noTagRemove: {type: Boolean, default: false},
  removeOnDelete: {type: Boolean, default: false},
  required: {type: Boolean, default: false},
  state: {type: Boolean, default: null},
  size: {type: String as PropType<InputSize>},
  tagPills: {type: Boolean, default: false},
  tagRemoveLabel: {type: String, default: 'Remove tag'},
  tagRemovedLabel: {type: String, default: 'Tag removed'},
  tagValidator: {type: Function, default: () => true},
  tagVariant: {type: String, default: 'secondary'},
  placeholder: {type: String, default: 'Add tag...'},
})

watch(
  () => props.modelValue,
  (newVal) => (value.value = newVal)
)

const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)
const inputValue = ref('')
const focus = ref(false)

const classes = computed(() => ({
  [`form-control-${props.size}`]: props.size,
  'disabled': props.disabled,
  'focus': focus.value,
  'is-invalid': props.state === false,
  'is-valid': props.state === true,
}))

const tagClasses = computed(() => [
  `bg-${props.tagVariant}`,
  {
    'text-dark': ['warning', 'info', 'light'].includes(props.tagVariant),
    'rounded-pill': props.tagPills,
    'disabled': props.disabled,
  },
])

const duplicateTag = computed(() => value.value.includes(inputValue.value))
const validTag = computed(() =>
  inputValue.value === '' ? true : props.tagValidator(inputValue.value)
)

function onFocus() {
  if (props.disabled) {
    return
  }

  focus.value = true
}

function onInput(e: Event) {
  const {value} = e.target as HTMLInputElement
  inputValue.value = value
}

function onEnter() {
  if (!props.noAddOnEnter) {
    addTag()
  }
}

function onDelete() {
  if (props.removeOnDelete && inputValue.value === '' && value.value.length > 0) {
    removeTag(value.value.length - 1)
  }
}

function addTag() {
  if (
    inputValue.value === '' ||
    duplicateTag.value ||
    !props.tagValidator(inputValue.value) ||
    (props.limit && value.value.length === props.limit)
  ) {
    return
  }

  const newValue = [...props.modelValue, inputValue.value]
  inputValue.value = ''
  emit('update:modelValue', newValue)
}

function removeTag(i: number) {
  value.value.splice(i, 1)
  emit('update:modelValue', value.value)
}
</script>

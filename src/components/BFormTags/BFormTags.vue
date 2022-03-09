<template>
  <div
    :id="computedId"
    class="b-form-tags form-control h-auto"
    :class="classes"
    role="group"
    tabindex="-1"
    @focusin="onFocusin"
  >
    <output
      :id="`${computedId}selected_tags__`"
      class="visually-hidden"
      role="status"
      :for="inputId"
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
    <ul
      :id="`${computedId}tag_list__`"
      class="b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
    >
      <li
        v-for="(tag, i) in tags"
        :id="tagsId.get(tag)"
        :key="tag"
        :title="tag"
        class="badge b-form-tag d-inline-flex align-items-center mw-100"
        :class="tagClasses"
        aria-labelledby=""
      >
        <span
          :id="`${tagsId.get(tag)}taglabel__`"
          class="b-form-tag-content flex-grow-1 text-truncate"
          >{{ tag }}</span
        >
        <button
          v-if="!disabled && !noTagRemove"
          aria-keyshortcuts="Delete"
          type="button"
          :aria-label="tagRemoveLabel"
          class="btn-close b-form-tag-remove"
          :class="{
            'btn-close-white': !['warning', 'info', 'light'].includes(tagVariant),
          }"
          :aria-controls="tagsId.get(tag)"
          :aria-describedby="`${tagsId.get(tag)}taglabel__`"
          @click="removeTag(i)"
        ></button>
      </li>
      <li
        role="none"
        aria-live="off"
        class="b-from-tags-field flex-grow-1"
        :aria-controls="`${computedId}tag_list__`"
      >
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
            v-if="validTag && !duplicateTag"
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
      <small v-if="tags.length === limit" class="form-text text-muted">Tag limit reached</small>
    </div>
    <template v-if="name">
      <input v-for="tag in tags" :key="tag" type="hidden" :name="name" :value="tag" />
    </template>
  </div>
</template>

<script setup lang="ts">
import useId from '../../composables/useId'
import {computed, onMounted, PropType, ref, watch} from 'vue'
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
  name: {type: String},
  noAddOnEnter: {type: Boolean, default: false},
  noOuterFocus: {type: Boolean, default: false},
  noTagRemove: {type: Boolean, default: false},
  removeOnDelete: {type: Boolean, default: false},
  required: {type: Boolean, default: false},
  separator: {type: [String, Array] as PropType<string | string[]>},
  state: {type: Boolean, default: null},
  size: {type: String as PropType<InputSize>},
  tagPills: {type: Boolean, default: false},
  tagRemoveLabel: {type: String, default: 'Remove tag'},
  tagRemovedLabel: {type: String, default: 'Tag removed'},
  tagValidator: {type: Function, default: () => true},
  tagVariant: {type: String, default: 'secondary'},
  placeholder: {type: String, default: 'Add tag...'},
})

const computedId = useId()
const inputId = computed(() => props.inputId || `${computedId.value}input__`)

onMounted(() => {
  generateTagsId()

  if (props.modelValue.length > 0) {
    shouldRemoveOnDelete.value = true
  }
})

watch(
  () => props.modelValue,
  (newVal) => {
    tags.value = newVal

    generateTagsId()
  }
)

const emit = defineEmits(['update:modelValue', 'tag-state'])

const tags = ref(props.modelValue)
const tagsId = ref(new Map())
const inputValue = ref('')
const shouldRemoveOnDelete = ref(false)
const focus = ref(false)
const lastRemovedTag = ref('')

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

const duplicateTag = computed(() => tags.value.includes(inputValue.value))
const validTag = computed(() =>
  inputValue.value === '' ? true : props.tagValidator(inputValue.value)
)

function onFocusin(e: FocusEvent) {
  if (props.disabled) {
    const target = e.target as HTMLDivElement
    target.blur()
  }
}

function onFocus() {
  if (props.disabled || props.noOuterFocus) {
    return
  }

  focus.value = true
}

function onInput(e: Event) {
  const {value} = e.target as HTMLInputElement
  shouldRemoveOnDelete.value = false

  if (props.separator?.includes(value.charAt(value.length - 1))) {
    inputValue.value = value.slice(0, value.length - 1)
    addTag()
    return
  }

  inputValue.value = value

  const _validTags = props.tagValidator(value) && !duplicateTag.value ? [value] : []
  const _invalidTags = props.tagValidator(value) ? [] : [value]
  const _duplicateTag = duplicateTag.value ? [value] : []

  emit('tag-state', _validTags, _invalidTags, _duplicateTag)
}

function onEnter() {
  if (!props.noAddOnEnter) {
    addTag()
  }
}

function onDelete() {
  if (
    props.removeOnDelete &&
    inputValue.value === '' &&
    shouldRemoveOnDelete.value &&
    tags.value.length > 0
  ) {
    removeTag(tags.value.length - 1)
  } else {
    shouldRemoveOnDelete.value = true
  }
}

function addTag() {
  if (
    inputValue.value === '' ||
    duplicateTag.value ||
    !props.tagValidator(inputValue.value) ||
    (props.limit && tags.value.length === props.limit)
  ) {
    return
  }

  const newValue = [...props.modelValue, inputValue.value]
  inputValue.value = ''
  shouldRemoveOnDelete.value = true
  emit('update:modelValue', newValue)
}

function removeTag(i: number) {
  lastRemovedTag.value = tags.value.splice(i, 1).toString()
  generateTagsId()
  emit('update:modelValue', tags.value)
}

function generateTagsId() {
  const oldTagsId = new Map(tagsId.value)
  tagsId.value.clear()
  tags.value.forEach((tag) => {
    tagsId.value.set(tag, oldTagsId.has(tag) ? oldTagsId.get(tag) : useId().value)
  })
}
</script>

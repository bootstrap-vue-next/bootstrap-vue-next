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

    <slot
      v-bind="{
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
      }"
    >
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
import {computed, onActivated, onMounted, PropType, ref, watch} from 'vue'
import BFormTag from './BFormTag.vue'
import useId from '../../composables/useId'
import type {InputSize, InputType} from '../../types'

const props = defineProps({
  addButtonText: {type: String, default: 'Add'},
  addButtonVariant: {type: String, default: 'outline-secondary'},
  addOnChange: {type: Boolean, default: false},
  autofocus: {type: Boolean, default: false},
  disabled: {type: Boolean, default: false},
  duplicateTagText: {type: String, default: 'Duplicate tag(s)'},
  inputAttrs: {type: Object},
  inputClass: {type: [Array, Object, String]},
  inputId: {type: String},
  inputType: {type: String as PropType<InputType>, default: 'text'},
  invalidTagText: {type: String, default: 'Invalid tag(s)'},
  form: {type: String},
  limit: {type: Number},
  limitTagsText: {type: String, default: 'Tag limit reached'},
  modelValue: {type: Array as PropType<string[]>, default: () => []},
  name: {type: String},
  noAddOnEnter: {type: Boolean, default: false},
  noOuterFocus: {type: Boolean, default: false},
  noTagRemove: {type: Boolean, default: false},
  placeholder: {type: String, default: 'Add tag...'},
  removeOnDelete: {type: Boolean, default: false},
  required: {type: Boolean, default: false},
  separator: {type: [String, Array] as PropType<string | string[]>},
  state: {type: Boolean, default: null},
  size: {type: String as PropType<InputSize>},
  tagClass: {type: [String, Array, Object]},
  tagPills: {type: Boolean, default: false},
  tagRemoveLabel: {type: String},
  tagRemovedLabel: {type: String, default: 'Tag removed'},
  tagValidator: {type: Function, default: () => true},
  tagVariant: {type: String, default: 'secondary'},
})

const input = ref<HTMLInputElement | null>(null)
const computedId = useId()
const _inputId = computed(() => props.inputId || `${computedId.value}input__`)

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

const emit = defineEmits([
  'update:modelValue',
  'input',
  'tag-state',
  'focus',
  'focusin',
  'focusout',
  'blur',
])

const tags = ref(props.modelValue)
const inputValue = ref('')
const shouldRemoveOnDelete = ref(false)
const focus = ref(false)
const lastRemovedTag = ref('')

const validTags = ref<string[]>([])
const invalidTags = ref<string[]>([])
const duplicateTags = ref<string[]>([])

const classes = computed(() => ({
  [`form-control-${props.size}`]: props.size,
  'disabled': props.disabled,
  'focus': focus.value,
  'is-invalid': props.state === false,
  'is-valid': props.state === true,
}))

const isDuplicate = computed(() => tags.value.includes(inputValue.value))

const isInvalid = computed(() =>
  inputValue.value === '' ? false : !props.tagValidator(inputValue.value)
)
const isLimitReached = computed(() => tags.value.length === props.limit)

const disableAddButton = computed(() => !isInvalid.value && !isDuplicate.value)

function checkAutofocus() {
  if (props.autofocus) {
    input.value?.focus()
  }
}

function onFocusin(e: FocusEvent) {
  if (props.disabled) {
    const target = e.target as HTMLDivElement
    target.blur()
    return
  }

  emit('focusin', e)
}

function onFocus(e: FocusEvent) {
  if (props.disabled || props.noOuterFocus) {
    return
  }

  focus.value = true
  emit('focus', e)
}

function onBlur(e: FocusEvent) {
  focus.value = false
  emit('blur', e)
}

function onInput(e: Event | string) {
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

  emit('tag-state', validTags, invalidTags, duplicateTags)
}

function onChange(e: Event) {
  if (props.addOnChange) {
    onInput(e)

    if (!isDuplicate.value) {
      addTag(inputValue.value)
    }
  }
}

function onKeydown(e: KeyboardEvent) {
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

function addTag(tag?: string) {
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

function removeTag(tag: string) {
  const tagIndex = tags.value.indexOf(tag)
  lastRemovedTag.value = tags.value.splice(tagIndex, 1).toString()

  emit('update:modelValue', tags.value)
}
</script>

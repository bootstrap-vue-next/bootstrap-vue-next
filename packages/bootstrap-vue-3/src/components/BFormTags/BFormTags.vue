<template>
  <div
    :id="computedId"
    class="b-form-tags form-control h-auto"
    :class="classes"
    role="group"
    tabindex="-1"
    @focusin="onFocusin"
    @focusout="emit('focusout', $event)"
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
        <template v-for="tag in tags">
          <slot name="tag" v-bind="{tag, tagClass, tagVariant, tagPillsBoolean, removeTag}">
            <b-form-tag
              :key="tag"
              :class="tagClass"
              tag="li"
              :variant="tagVariant"
              :pill="tagPillsBoolean"
              @remove="removeTag"
              >{{ tag }}</b-form-tag
            >
          </slot>
        </template>
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
              :disabled="disabledBoolean"
              :value="inputValue"
              :type="inputType"
              :placeholder="placeholder"
              class="b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0"
              style="outline: currentcolor none 0px; min-width: 5rem"
              v-bind="inputAttrs"
              :form="form"
              :required="requiredBoolean"
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
              :disabled="disabledBoolean || inputValue.length === 0 || isLimitReached"
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
import {
  computed,
  onActivated,
  onMounted,
  ref,
  Ref,
  toRef,
  VNodeNormalizedChildren,
  watch,
} from 'vue'
import BFormTag from './BFormTag.vue'
import {useBooleanish, useId} from '../../composables'
import type {
  Booleanish,
  ButtonVariant,
  ClassValue,
  ColorVariant,
  InputSize,
  InputType,
} from '../../types'

interface BFormTagsProps {
  addButtonText?: string
  addButtonVariant?: ButtonVariant
  addOnChange?: Booleanish
  autofocus?: Booleanish
  disabled?: Booleanish
  duplicateTagText?: string
  inputAttrs?: Record<string, unknown>
  inputClass?: ClassValue
  inputId?: string
  inputType?: InputType
  invalidTagText?: string
  form?: string
  limit?: number
  limitTagsText?: string
  modelValue?: Array<string>
  name?: string
  noAddOnEnter?: Booleanish
  noOuterFocus?: Booleanish
  noTagRemove?: Booleanish
  placeholder?: string
  removeOnDelete?: Booleanish
  required?: Booleanish
  separator?: string | Array<unknown>
  state?: Booleanish
  size?: InputSize
  tagClass?: ClassValue
  tagPills?: Booleanish
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

const addOnChangeBoolean = useBooleanish(toRef(props, 'addOnChange'))
const autofocusBoolean = useBooleanish(toRef(props, 'autofocus'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const noAddOnEnterBoolean = useBooleanish(toRef(props, 'noAddOnEnter'))
const noOuterFocusBoolean = useBooleanish(toRef(props, 'noOuterFocus'))
const noTagRemoveBoolean = useBooleanish(toRef(props, 'noTagRemove'))
const removeOnDeleteBoolean = useBooleanish(toRef(props, 'removeOnDelete'))
const requiredBoolean = useBooleanish(toRef(props, 'required'))
const stateBoolean = useBooleanish(toRef(props, 'state') as Ref<Booleanish | undefined>)
const tagPillsBoolean = useBooleanish(toRef(props, 'tagPills'))

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
  [`form-control-${props.size}`]: props.size !== undefined,
  'disabled': disabledBoolean.value,
  'focus': focus.value,
  'is-invalid': stateBoolean.value === false,
  'is-valid': stateBoolean.value === true,
}))

const isDuplicate = computed<boolean>(() => tags.value.includes(inputValue.value))

const isInvalid = computed<boolean>(() =>
  inputValue.value === '' ? false : !props.tagValidator(inputValue.value)
)
const isLimitReached = computed<boolean>(() => tags.value.length === props.limit)

const disableAddButton = computed<boolean>(() => !isInvalid.value && !isDuplicate.value)

const checkAutofocus = () => {
  if (autofocusBoolean.value) {
    input.value?.focus()
  }
}

const onFocusin = (e: FocusEvent): void => {
  if (disabledBoolean.value) {
    const target = e.target as HTMLDivElement
    target.blur()
    return
  }

  emit('focusin', e)
}

const onFocus = (e: FocusEvent): void => {
  if (disabledBoolean.value || noOuterFocusBoolean.value) {
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
  if (addOnChangeBoolean.value) {
    onInput(e)

    if (!isDuplicate.value) {
      addTag(inputValue.value)
    }
  }
}

const onKeydown = (e: KeyboardEvent): void => {
  if (e.key === 'Enter' && !noAddOnEnterBoolean.value) {
    addTag(inputValue.value)
    return
  }

  if (
    (e.key === 'Backspace' || e.key === 'Delete') &&
    removeOnDeleteBoolean.value &&
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
    duplicateTagText,
    inputAttrs,
    form,
    inputType,
    invalidTagText,
    limitTagsText,
    limit,
    placeholder,
    separator,
    size,
    tagClass,
    tagRemoveLabel,
    tagVariant,
  } = props
  return {
    addButtonText,
    addButtonVariant,
    addTag,
    disableAddButton,
    disabled: disabledBoolean.value,
    duplicateTagText,
    duplicateTags,
    form,
    inputAttrs: {
      ...inputAttrs,
      disabled: disabledBoolean.value,
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
    noTagRemove: noTagRemoveBoolean.value,
    placeholder,
    removeTag,
    required: requiredBoolean.value,
    separator,
    size,
    state: stateBoolean.value,
    tagClass,
    tagPills: tagPillsBoolean.value,
    tagRemoveLabel,
    tagVariant,
    tags,
  }
})
</script>

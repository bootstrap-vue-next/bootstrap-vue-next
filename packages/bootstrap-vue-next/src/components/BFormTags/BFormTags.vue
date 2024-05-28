<template>
  <div
    :id="computedId"
    class="b-form-tags form-control h-auto"
    :class="computedClasses"
    role="group"
    tabindex="-1"
    @focusin="onFocusin"
    @focusout="emit('focusout', $event)"
  >
    <output
      :id="`${computedId}selected_tags__`"
      class="visually-hidden"
      :for="_inputId"
      :aria-live="focused ? 'polite' : 'off'"
      aria-atomic="true"
      aria-relevant="additions text"
      >{{ tags.join(', ') }}</output
    >
    <div
      :id="`${computedId}removed_tags__`"
      role="status"
      :aria-live="focused ? 'assertive' : 'off'"
      aria-atomic="true"
      class="visually-hidden"
    >
      ({{ props.tagRemovedLabel }}) {{ lastRemovedTag }}
    </div>

    <slot v-bind="slotAttrs">
      <ul
        :id="`${computedId}tag_list__`"
        class="b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
      >
        <template v-for="(tag, index) in tags" :key="index">
          <slot
            name="tag"
            :tag="tag"
            :tag-class="props.tagClass"
            :tag-variant="props.tagVariant"
            :tag-pills="props.tagPills"
            :remove-tag="removeTag"
          >
            <BFormTag
              :key="tag"
              :class="props.tagClass"
              tag="li"
              :variant="props.tagVariant"
              :pill="props.tagPills"
              @remove="removeTag"
              >{{ tag }}</BFormTag
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
              :disabled="props.disabled"
              :value="inputValue"
              :type="props.inputType"
              :placeholder="props.placeholder"
              class="b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0"
              style="outline: currentcolor none 0px; min-width: 5rem"
              v-bind="props.inputAttrs"
              :form="props.form"
              :required="props.required || undefined"
              :aria-required="props.required || undefined"
              @input="onInput"
              @change="onChange"
              @focus="onFocus"
              @blur="onBlur"
            />
            <button
              v-if="disableAddButton"
              type="button"
              class="btn b-form-tags-button py-0"
              :class="[
                inputClass,
                {
                  [`btn-${props.addButtonVariant}`]: props.addButtonVariant !== null,
                  'disabled invisible': inputValue.length === 0,
                },
              ]"
              style="font-size: 90%"
              :disabled="props.disabled || inputValue.length === 0 || isLimitReached"
              @click="addTag(inputValue)"
            >
              <slot name="add-button-text">{{ props.addButtonText }}</slot>
            </button>
          </div>
        </li>
      </ul>
      <div aria-live="polite" aria-atomic="true">
        <div v-if="isInvalid" class="d-block invalid-feedback">
          {{ props.invalidTagText }}: {{ inputValue }}
        </div>
        <small v-if="isDuplicate" class="form-text text-body-secondary"
          >{{ props.duplicateTagText }}: {{ inputValue }}</small
        >
        <small v-if="tags.length === props.limit" class="form-text text-body-secondary">
          {{ props.limitTagsText }}</small
        >
      </div>
    </slot>
    <template v-if="props.name">
      <input
        v-for="(tag, index) in tags"
        :key="index"
        type="hidden"
        :name="props.name"
        :value="tag"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import {onKeyStroke, syncRef, useFocus, useToNumber} from '@vueuse/core'
import {computed, ref, toRef} from 'vue'
import {useDefaults, useId, useStateClass} from '../../composables'
import type {BFormTagsProps, ClassValue, ColorVariant} from '../../types'
import {escapeRegExpChars} from '../../utils'
import BFormTag from './BFormTag.vue'

const _props = withDefaults(defineProps<BFormTagsProps>(), {
  addButtonText: 'Add',
  addButtonVariant: 'outline-secondary',
  addOnChange: false,
  autofocus: false,
  disabled: false,
  duplicateTagText: 'Duplicate tag(s)',
  form: undefined,
  inputAttrs: undefined,
  inputClass: undefined,
  inputId: undefined,
  inputType: 'text',
  invalidTagText: 'Invalid tag(s)',
  limit: undefined,
  limitTagsText: 'Tag limit reached',
  name: undefined,
  noAddOnEnter: false,
  noOuterFocus: false,
  noTagRemove: false,
  placeholder: 'Add tag...',
  removeOnDelete: false,
  required: false,
  separator: undefined,
  size: 'md',
  state: null,
  tagClass: undefined,
  tagPills: false,
  tagRemoveLabel: undefined,
  tagRemovedLabel: 'Tag removed',
  tagValidator: () => true,
  tagVariant: 'secondary',
})
const props = useDefaults(_props, 'BFormTags')

const emit = defineEmits<{
  'blur': [value: FocusEvent]
  'focus': [value: FocusEvent]
  'focusin': [value: FocusEvent]
  'focusout': [value: FocusEvent]
  'tag-state': [...args: string[][]]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'add-button-text'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: typeof slotAttrs.value) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'tag'?: (props: {
    tag: string
    tagClass: ClassValue
    tagVariant: ColorVariant | null
    tagPills: boolean
    removeTag: (tag?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
}>()

const modelValue = defineModel<string[]>({
  default: () => [],
})

const computedId = useId()

const limitNumber = useToNumber(() => props.limit ?? NaN)

const stateClass = useStateClass(() => props.state)

const input = ref<HTMLInputElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: props.autofocus,
})

const _inputId = toRef(() => props.inputId || `${computedId.value}input__`)
const tags = ref<string[]>([...modelValue.value])
const inputValue = ref<string>('')
const shouldRemoveOnDelete = ref<boolean>(modelValue.value.length > 0)
const lastRemovedTag = ref<string>('')
const validTags = ref<string[]>([])
const invalidTags = ref<string[]>([])
const duplicateTags = ref<string[]>([])

syncRef(modelValue, tags, {
  direction: 'ltr',
  transform: {
    ltr: (v) => [...v],
  },
})

const computedClasses = computed(() => [
  stateClass.value,
  {
    [`form-control-${props.size}`]: props.size !== 'md',
    disabled: props.disabled,
    focus: focused.value,
  },
])

const isDuplicate = computed(() => tags.value.includes(inputValue.value))
const isInvalid = computed(() =>
  inputValue.value === '' ? false : !props.tagValidator(inputValue.value)
)
const isLimitReached = toRef(() => tags.value.length === limitNumber.value)
const disableAddButton = toRef(() => !isInvalid.value && !isDuplicate.value)

const slotAttrs = computed(() => ({
  addButtonText: props.addButtonText,
  addButtonVariant: props.addButtonVariant,
  addTag,
  disableAddButton: disableAddButton.value,
  disabled: props.disabled,
  duplicateTagText: props.duplicateTagText,
  duplicateTags: duplicateTags.value,
  form: props.form,
  inputAttrs: {
    ...props.inputAttrs,
    disabled: props.disabled,
    form: props.form,
    id: _inputId,
    value: inputValue,
  },
  inputHandlers: {
    input: onInput,
    keydown: onKeydown,
    change: onChange,
  },
  inputId: _inputId,
  inputType: props.inputType,
  invalidTagText: props.invalidTagText,
  invalidTags: invalidTags.value,
  isDuplicate: isDuplicate.value,
  isInvalid: isInvalid.value,
  isLimitReached: isLimitReached.value,
  limitTagsText: props.limitTagsText,
  limit: limitNumber.value,
  noTagRemove: props.noTagRemove,
  placeholder: props.placeholder,
  removeTag,
  required: props.required,
  separator: props.separator,
  size: props.size,
  state: props.state,
  tagClass: props.tagClass,
  tagPills: props.tagPills,
  tagRemoveLabel: props.tagRemoveLabel,
  tagVariant: props.tagVariant,
  tags: tags.value,
}))

const onFocusin = (e: Readonly<FocusEvent>): void => {
  if (props.disabled) {
    const target = e.target as HTMLDivElement
    target.blur()
    return
  }

  emit('focusin', e)
}

const onFocus = (e: Readonly<FocusEvent>): void => {
  if (props.disabled || props.noOuterFocus) {
    return
  }

  focused.value = true
  emit('focus', e)
}

const onBlur = (e: Readonly<FocusEvent>): void => {
  focused.value = false
  emit('blur', e)
}

const onInput = (e: Readonly<Event> | string): void => {
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

const onChange = (e: Readonly<Event>): void => {
  if (props.addOnChange) {
    onInput(e)

    if (!isDuplicate.value) {
      addTag(inputValue.value)
    }
  }
}

const onKeydown = (e: Readonly<KeyboardEvent>): void => {
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

onKeyStroke(onKeydown, {target: input})

const separator = computed(() => {
  if (!props.separator) {
    return
  }

  return typeof props.separator === 'string' ? props.separator : props.separator.join('')
})

const separatorRegExp = computed(() => {
  if (!separator.value) {
    return
  }

  return new RegExp(`[${escapeRegExpChars(separator.value)}]+`)
})

const addTag = (tag?: string): void => {
  tag = (tag ?? inputValue.value).trim()

  const newTags = separatorRegExp.value
    ? tag.split(separatorRegExp.value).map((t) => t.trim())
    : [tag]
  const validTags: string[] = []

  for (const newTag of newTags) {
    if (newTag === '' || isDuplicate.value || !props.tagValidator(newTag)) {
      continue
    }

    if (limitNumber.value && isLimitReached.value) {
      break
    }

    validTags.push(newTag)
  }

  const newValue = [...modelValue.value, ...validTags]
  inputValue.value = ''
  shouldRemoveOnDelete.value = true
  modelValue.value = newValue
  focused.value = true
}

const removeTag = (tag?: string): void => {
  const tagIndex = tags.value.indexOf(tag?.toString() ?? '')
  if (tagIndex === -1) return
  lastRemovedTag.value = tags.value.splice(tagIndex, 1).toString()
  modelValue.value = tags.value
}

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

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
      ({{ tagRemovedLabel }}) {{ lastRemovedTag }}
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
            :tag-class="tagClass"
            :tag-variant="tagVariant"
            :tag-pills="tagPillsBoolean"
            :remove-tag="removeTag"
          >
            <BFormTag
              :key="tag"
              :class="tagClass"
              tag="li"
              :variant="tagVariant"
              :pill="tagPills"
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
              :disabled="disabledBoolean"
              :value="inputValue"
              :type="inputType"
              :placeholder="placeholder"
              class="b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0"
              style="outline: currentcolor none 0px; min-width: 5rem"
              v-bind="inputAttrs"
              :form="form"
              :required="requiredBoolean || undefined"
              :aria-required="requiredBoolean || undefined"
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
                  [`btn-${addButtonVariant}`]: addButtonVariant !== null,
                  'disabled invisible': inputValue.length === 0,
                },
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
        <small v-if="isDuplicate" class="form-text text-body-secondary"
          >{{ duplicateTagText }}: {{ inputValue }}</small
        >
        <small v-if="tags.length === limit" class="form-text text-body-secondary"
          >Tag limit reached</small
        >
      </div>
    </slot>
    <template v-if="name">
      <input v-for="(tag, index) in tags" :key="index" type="hidden" :name="name" :value="tag" />
    </template>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, toRef, watch} from 'vue'
import BFormTag from './BFormTag.vue'
import {useBooleanish, useId, useStateClass} from '../../composables'
import type {
  Booleanish,
  ButtonVariant,
  ClassValue,
  ColorVariant,
  InputType,
  Size,
} from '../../types'
import {onKeyStroke, useFocus, useToNumber, useVModel} from '@vueuse/core'
import {escapeRegExpChars} from '../../utils'

const props = withDefaults(
  defineProps<{
    addButtonText?: string
    addButtonVariant?: ButtonVariant | null
    addOnChange?: Booleanish
    autofocus?: Booleanish
    disabled?: Booleanish
    duplicateTagText?: string
    form?: string
    inputAttrs?: Record<string, unknown>
    inputClass?: ClassValue
    inputId?: string
    inputType?: InputType
    invalidTagText?: string
    limit?: number | string
    limitTagsText?: string
    modelValue?: string[]
    name?: string
    noAddOnEnter?: Booleanish
    noOuterFocus?: Booleanish
    noTagRemove?: Booleanish
    placeholder?: string
    removeOnDelete?: Booleanish
    required?: Booleanish
    separator?: string | string[]
    size?: Size
    state?: Booleanish | null
    tagClass?: ClassValue
    tagPills?: Booleanish
    tagRemoveLabel?: string
    tagRemovedLabel?: string
    tagValidator?: (t: string) => boolean
    tagVariant?: ColorVariant | null
  }>(),
  {
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
    modelValue: () => [],
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
  }
)

const emit = defineEmits<{
  'blur': [value: FocusEvent]
  'focus': [value: FocusEvent]
  'focusin': [value: FocusEvent]
  'focusout': [value: FocusEvent]
  'input': [value: string[]]
  'tag-state': [...args: string[][]]
  'update:modelValue': [value: string[]]
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

const modelValue = useVModel(props, 'modelValue', emit)

const computedId = useId()

const addOnChangeBoolean = useBooleanish(() => props.addOnChange)
const autofocusBoolean = useBooleanish(() => props.autofocus)
const disabledBoolean = useBooleanish(() => props.disabled)
const noAddOnEnterBoolean = useBooleanish(() => props.noAddOnEnter)
const noOuterFocusBoolean = useBooleanish(() => props.noOuterFocus)
const noTagRemoveBoolean = useBooleanish(() => props.noTagRemove)
const removeOnDeleteBoolean = useBooleanish(() => props.removeOnDelete)
const requiredBoolean = useBooleanish(() => props.required)
const stateBoolean = useBooleanish(() => props.state)
const tagPillsBoolean = useBooleanish(() => props.tagPills)
const limitNumber = useToNumber(() => props.limit ?? NaN)

const stateClass = useStateClass(stateBoolean)

const input = ref<HTMLInputElement | null>(null)

const {focused} = useFocus(input, {
  initialValue: autofocusBoolean.value,
})

const _inputId = toRef(() => props.inputId || `${computedId.value}input__`)
const tags = ref<string[]>(modelValue.value)
const inputValue = ref<string>('')
const shouldRemoveOnDelete = ref<boolean>(modelValue.value.length > 0)
const lastRemovedTag = ref<string>('')
const validTags = ref<string[]>([])
const invalidTags = ref<string[]>([])
const duplicateTags = ref<string[]>([])

const computedClasses = computed(() => [
  stateClass.value,
  {
    [`form-control-${props.size}`]: props.size !== 'md',
    disabled: disabledBoolean.value,
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
  disabled: disabledBoolean.value,
  duplicateTagText: props.duplicateTagText,
  duplicateTags: duplicateTags.value,
  form: props.form,
  inputAttrs: {
    ...props.inputAttrs,
    disabled: disabledBoolean.value,
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
  noTagRemove: noTagRemoveBoolean.value,
  placeholder: props.placeholder,
  removeTag,
  required: requiredBoolean.value,
  separator: props.separator,
  size: props.size,
  state: stateBoolean.value,
  tagClass: props.tagClass,
  tagPills: tagPillsBoolean.value,
  tagRemoveLabel: props.tagRemoveLabel,
  tagVariant: props.tagVariant,
  tags: tags.value,
}))

watch(modelValue, (newVal) => {
  tags.value = newVal
})

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

  focused.value = true
  emit('focus', e)
}

const onBlur = (e: FocusEvent): void => {
  focused.value = false
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
  emit('input', newValue)
  focused.value = true
}

const removeTag = (tag?: string): void => {
  const tagIndex = tags.value.indexOf(tag?.toString() ?? '')
  lastRemovedTag.value = tags.value.splice(tagIndex, 1).toString()
  modelValue.value = tags.value
}

// TODO these focus/blur events aren't quite in line with use useFormInput implementation. Perhaps we should bring them together?
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

<template>
  <ComboboxRoot
    v-model="modelValue"
    v-model:open="isOpen"
    :multiple="props.multiple"
    :disabled="props.disabled"
    :name="props.name"
    :required="props.required"
    :ignore-filter="props.multiple || !!props.filterFunction"
    :reset-search-term-on-select="props.resetSearchTermOnSelect"
    :reset-search-term-on-blur="props.resetSearchTermOnBlur"
    :by="props.by"
    :dir="props.dir"
    :open-on-focus="props.openOnFocus"
    class="b-autocomplete"
  >
    <ComboboxAnchor as-child>
      <BInputGroup :size="props.size">
        <!-- Selected values display (multiple mode only, hidden when empty) -->
        <div
          v-if="props.multiple && hasSelection"
          class="b-autocomplete-selection"
          :class="{
            'b-autocomplete-selection-tags': props.tags,
            'b-autocomplete-selection-pending-delete': pendingDelete,
          }"
        >
          <slot
            v-if="props.tags"
            name="tags"
            :pending-delete
            :selected="selectedOptions"
            :remove="removeSelected"
          >
            <BFormTag
              v-for="(opt, i) in selectedOptions"
              :key="optionKey(opt, i)"
              :title="String(opt.text)"
              :disabled="props.disabled"
              :variant="'secondary'"
              :class="{
                'b-autocomplete-tag-muted': pendingDelete && !isLastSelectedOption(opt, i),
                'b-autocomplete-tag-pending-delete': pendingDelete && isLastSelectedOption(opt, i),
              }"
              @remove="removeSelected(opt)"
            >
              {{ opt.text }}
            </BFormTag>
          </slot>
          <template v-else>
            <span
              v-for="(opt, i) in selectedOptions"
              :key="optionKey(opt, i)"
              :class="{
                'text-body-tertiary': pendingDelete && !isLastSelectedOption(opt, i),
              }"
              >{{ opt.text }}<span v-if="i < selectedOptions.length - 1">,&nbsp;</span></span
            >
          </template>
        </div>

        <!-- Search input (always present) -->
        <ComboboxInput v-model="searchTerm" as-child :display-value="displayValueFn">
          <input
            :id="computedId"
            :class="inputClasses"
            :disabled="props.disabled"
            :form="props.form || undefined"
            :placeholder="props.placeholder"
            :readonly="props.readonly || props.plaintext"
            :required="props.required || undefined"
            :autocomplete="props.autocomplete || undefined"
            :aria-invalid="computedAriaInvalid"
            :aria-required="props.required || undefined"
            @blur="emit('blur', $event)"
            @focus="emit('focus', $event)"
            @keydown.passive="onInputKeydown"
          />
        </ComboboxInput>

        <template #append>
          <ComboboxTrigger v-if="!props.noToggle" as-child :disabled="props.disabled">
            <BButton class="b-autocomplete-trigger" :disabled="props.disabled">
              <slot name="toggle-icon" :is-open>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="b-autocomplete-chevron"
                  :class="{'b-autocomplete-chevron-open': isOpen}"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </slot>
            </BButton>
          </ComboboxTrigger>
        </template>
      </BInputGroup>
    </ComboboxAnchor>

    <ComboboxPortal :disabled="!props.teleportTo" :to="props.teleportTo">
      <ComboboxContent
        position="popper"
        :side-offset="4"
        :align="'start'"
        :class="['b-autocomplete-content', 'dropdown-menu', 'show']"
        :body-lock="false"
        :style="{width: 'var(--reka-combobox-trigger-width)'}"
      >
        <ComboboxViewport class="b-autocomplete-viewport">
          <ComboboxEmpty class="b-autocomplete-empty">
            <slot name="empty"> No results found </slot>
          </ComboboxEmpty>

          <ComboboxItem
            v-for="(option, index) in filteredOptions"
            :key="optionKey(option, index)"
            :value="option.value as AcceptableValue"
            :disabled="option.disabled"
            :class="['b-autocomplete-item', 'dropdown-item']"
          >
            <slot name="option" v-bind="option">
              {{ option.text }}
            </slot>
            <ComboboxItemIndicator class="b-autocomplete-item-indicator">
              <slot name="option-indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </slot>
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>

<script setup lang="ts">
import {computed, type ComputedRef, ref} from 'vue'
import type {AcceptableValue} from 'reka-ui'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'reka-ui'
import {useDefaults} from '../../composables/useDefaults'
import type {BAutocompleteProps, BAutocompleteSlots, SelectOption} from '../../types'
import {useId} from '../../composables/useId'
import {useStateClass} from '../../composables/useStateClass'
import {useAriaInvalid} from '../../composables/useAriaInvalid'
import BInputGroup from '../BInputGroup/BInputGroup.vue'
import BButton from '../BButton/BButton.vue'
import BFormTag from '../BFormTags/BFormTag.vue'
import {useFormSelect} from '../../composables/useFormSelect.ts'

const _props = withDefaults(defineProps<Omit<BAutocompleteProps, 'modelValue' | 'search'>>(), {
  ariaInvalid: undefined,
  autocomplete: undefined,
  autofocus: false,
  disabled: false,
  form: undefined,
  formatter: undefined,
  id: undefined,
  lazyFormatter: false,
  placeholder: undefined,
  plaintext: false,
  readonly: false,
  required: false,
  size: undefined,
  state: undefined,
  by: undefined,
  dir: undefined,
  disabledField: 'disabled',
  filterFunction: undefined,
  multiple: false,
  name: undefined,
  noToggle: false,
  openOnFocus: false,
  options: () => [],
  resetSearchTermOnBlur: true,
  resetSearchTermOnSelect: true,
  tags: false,
  teleportTo: undefined,
  textField: 'text',
  valueField: 'value',
})
const props = useDefaults(_props, 'BAutocomplete')
const emit = defineEmits<{
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()
defineSlots<BAutocompleteSlots>()

const modelValue = defineModel<BAutocompleteProps['modelValue']>({
  default: undefined,
})
const isOpen = defineModel<Exclude<BAutocompleteProps['open'], undefined>>('open', {default: false})
const searchTerm = defineModel<Exclude<BAutocompleteProps['search'], undefined>>('search', {
  default: '',
})

// Backspace-to-delete state for multiple mode
const pendingDelete = ref(false)

const computedId = useId(() => props.id)
const stateClass = useStateClass(() => props.state ?? null)
const computedAriaInvalid = useAriaInvalid(
  () => props.ariaInvalid,
  () => props.state ?? null
)

const inputClasses = computed(() => [
  stateClass.value,
  {
    'form-control': !props.plaintext,
    'form-control-plaintext': props.plaintext,
    [`form-control-${props.size}`]: !!props.size,
  },
])

const {normalizedOptions} = useFormSelect(() => props.options, props) as {
  normalizedOptions: ComputedRef<SelectOption[]>
}

const findOptionText = (val: AcceptableValue): string => {
  const match = normalizedOptions.value.find((opt) => {
    if (props.by && typeof props.by === 'string') {
      return (
        (opt.value as Record<string, unknown>)?.[props.by] ===
        (val as Record<string, unknown>)?.[props.by]
      )
    }
    return opt.value === val
  })
  return match ? String(match.text) : String(val)
}

// Filter options — for multiple mode, always uses searchTerm which is purely a search query
const filteredOptions = computed(() => {
  const filterText = searchTerm.value
  if (props.filterFunction) {
    return props.filterFunction(normalizedOptions.value, filterText)
  }
  if (!filterText) return normalizedOptions.value
  const term = filterText.toLowerCase()
  return normalizedOptions.value.filter((opt) => String(opt.text).toLowerCase().includes(term))
})

// Display value for single select mode (reka-ui calls this on selection)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const displayValueFn = (val: any) => {
  if (val === null || val === undefined) return ''
  if (props.multiple) return '' // Multiple mode uses the separate display element
  return findOptionText(val)
}

// Whether there are selected values in multiple mode
const hasSelection = computed(() => {
  if (!modelValue.value) return false
  return Array.isArray(modelValue.value) ? modelValue.value.length > 0 : true
})

// Resolved option objects for tags mode
const selectedOptions = computed<SelectOption[]>(() => {
  if (!props.multiple || !modelValue.value) return []
  const selected = Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value]
  return selected
    .map((val) =>
      normalizedOptions.value.find((opt) => {
        if (props.by && typeof props.by === 'string') {
          return (
            (opt.value as Record<string, unknown>)?.[props.by] ===
            (val as Record<string, unknown>)?.[props.by]
          )
        }
        return opt.value === val
      })
    )
    .filter((opt): opt is SelectOption => !!opt)
})

const removeSelected = (option: SelectOption) => {
  if (!Array.isArray(modelValue.value)) return
  modelValue.value = modelValue.value.filter((val) => {
    if (props.by && typeof props.by === 'string') {
      return (
        (val as Record<string, unknown>)?.[props.by] !==
        (option.value as Record<string, unknown>)?.[props.by]
      )
    }
    return val !== option.value
  })
}

const optionKey = (option: SelectOption, index: number) => {
  const val = option.value
  if (val !== null && val !== undefined && typeof val !== 'object') return String(val)
  return index
}

const isLastSelectedOption = (_opt: SelectOption, index: number): boolean => {
  return index === selectedOptions.value.length - 1
}

const resetPendingDelete = () => {
  pendingDelete.value = false
}
const onInputKeydown = (event: KeyboardEvent) => {
  if (!props.multiple || !hasSelection.value) {
    resetPendingDelete()
    return
  }

  if (event.key === 'Backspace' && searchTerm.value === '') {
    if (pendingDelete.value) {
      // Second backspace — delete the last selected item
      const lastOpt = selectedOptions.value[selectedOptions.value.length - 1]
      if (lastOpt) {
        removeSelected(lastOpt)
      }
      pendingDelete.value = false
    } else {
      // First backspace — prime for deletion
      pendingDelete.value = true
    }
    return
  }

  // Any other key resets the pending delete state
  if (pendingDelete.value) {
    resetPendingDelete()
  }
}
</script>

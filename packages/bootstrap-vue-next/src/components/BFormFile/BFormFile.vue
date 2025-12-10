<template>
  <div ref="rootRef" :class="processedAttrs.wrapperClass">
    <!-- Optional label -->
    <label
      v-if="hasLabelSlot || props.label"
      class="form-label"
      :class="props.labelClass"
      :for="computedId"
    >
      <slot name="label">
        {{ props.label }}
      </slot>
    </label>

    <!-- Drop zone wrapper -->
    <div
      v-if="!props.plain"
      ref="dropZoneRef"
      class="b-form-file-wrapper"
      :class="{
        'b-form-file-dragging': isOverDropZone && !props.noDrop,
        'b-form-file-has-files': hasFiles,
      }"
    >
      <!-- Custom file control (mimics Bootstrap native input) -->
      <div class="b-form-file-control" :class="computedClasses" :aria-disabled="props.disabled">
        <!-- File name display -->
        <div class="b-form-file-text">
          <slot name="file-name" :files="selectedFiles" :names="fileNames">
            <span v-if="hasFiles">{{ formattedFileNames }}</span>
            <span v-else-if="hasPlaceholderSlot || props.placeholder" class="text-muted">
              <slot name="placeholder">{{ props.placeholder }}</slot>
            </span>
          </slot>
        </div>

        <!-- Custom browse button -->
        <button
          v-if="!props.noButton"
          ref="browseButtonRef"
          type="button"
          class="b-form-file-button"
          :disabled="props.disabled"
          @click="openFileDialog"
        >
          {{ effectiveBrowseText }}
        </button>
      </div>

      <!-- Drag overlay (only shown when dragging) -->
      <div v-if="isOverDropZone && !props.noDrop" class="b-form-file-drag-overlay">
        <slot name="drop-placeholder" :drop-allowed="dropAllowed">
          <div class="b-form-file-drag-text">
            {{ dropAllowed ? effectiveDropPlaceholder : effectiveNoDropPlaceholder }}
          </div>
        </slot>
      </div>
    </div>

    <!-- Plain mode - simple native input -->
    <input
      v-else
      :id="computedId"
      v-bind="processedAttrs.inputAttrs"
      type="file"
      :class="computedPlainClasses"
      :form="props.form"
      :name="props.name"
      :multiple="props.multiple"
      :disabled="props.disabled"
      :capture="props.capture"
      :accept="computedAccept || undefined"
      :required="props.required || undefined"
      :aria-label="props.ariaLabel"
      :aria-labelledby="props.ariaLabelledby"
      :aria-required="props.required || undefined"
      :directory="props.directory"
      :webkitdirectory="props.directory"
      @change="onPlainChange"
    />

    <!-- External file display (when showFileNames is true and not plain) -->
    <div v-if="showExternalDisplay" class="b-form-file-display mt-2">
      <slot name="file-name" :files="selectedFiles" :names="fileNames">
        <div v-if="hasFiles" class="small text-muted">
          {{ formattedFileNames }}
        </div>
        <div v-else-if="hasPlaceholderSlot || props.placeholder" class="small text-muted">
          <slot name="placeholder">
            {{ props.placeholder }}
          </slot>
        </div>
      </slot>
    </div>

    <!-- Hidden form input for form submission (when name is provided) -->
    <input v-if="props.name && !props.plain" type="hidden" :name="props.name" :form="props.form" />
  </div>
</template>

<script setup lang="ts">
import {useDropZone, useFileDialog} from '@vueuse/core'
import {computed, nextTick, ref, useAttrs, useTemplateRef, watch} from 'vue'
import type {BFormFileProps} from '../../types/ComponentProps'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import {useStateClass} from '../../composables/useStateClass'
import {isEmptySlot} from '../../utils/dom'
import type {BFormFileSlots} from '../../types'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<Omit<BFormFileProps, 'modelValue'>>(), {
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  accept: '',
  autofocus: false,
  browseText: undefined,
  capture: undefined,
  directory: false,
  disabled: false,
  dropPlaceholder: undefined,
  fileNameFormatter: undefined,
  form: undefined,
  id: undefined,
  label: '',
  labelClass: undefined,
  multiple: false,
  name: undefined,
  noButton: false,
  noDrop: false,
  noDropPlaceholder: undefined,
  plain: false,
  placeholder: undefined,
  required: false,
  showFileNames: false,
  size: undefined,
  state: null,
})
const props = useDefaults(_props, 'BFormFile')
const slots = defineSlots<BFormFileSlots>()

const emit = defineEmits<{
  change: [value: Event]
}>()

const modelValue = defineModel<Exclude<BFormFileProps['modelValue'], undefined>>({
  default: null,
})

const attrs = useAttrs()

// Split attrs: class goes to wrapper, everything else to input elements
const processedAttrs = computed(() => {
  const {class: wrapperClass, ...inputAttrs} = attrs
  return {wrapperClass, inputAttrs}
})

const computedId = useId(() => props.id)
const stateClass = useStateClass(() => props.state)

// Refs
const rootRef = useTemplateRef('rootRef')
const dropZoneRef = useTemplateRef('dropZoneRef')
const browseButtonRef = useTemplateRef('browseButtonRef')
const plainInputRef = ref<HTMLInputElement | null>(null)

// Computed accept for file type validation
const computedAccept = computed(() =>
  typeof props.accept === 'string' ? props.accept : props.accept.join(',')
)

// Computed data types for drop zone
const computedDataTypes = computed(() => {
  if (!computedAccept.value) return undefined
  return computedAccept.value.split(',').map((type) => type.trim())
})

// VueUse file dialog (replaces native input in custom mode)
const {
  open,
  reset: resetDialog,
  onChange: onDialogChange,
} = useFileDialog({
  accept: computedAccept.value,
  multiple: props.multiple || props.directory,
  directory: props.directory,
})

// VueUse drop zone (replaces manual drag/drop)
const {isOverDropZone} = useDropZone(dropZoneRef, {
  onDrop: (files) => {
    if (files && !props.noDrop) {
      handleFiles(files)
    }
  },
  dataTypes: computedDataTypes.value,
  multiple: props.multiple || props.directory,
})

// Computed properties
const hasLabelSlot = computed(() => !isEmptySlot(slots.label))
const hasPlaceholderSlot = computed(() => !isEmptySlot(slots.placeholder))

const computedClasses = computed(() => [
  stateClass.value,
  {
    [`form-control-${props.size}`]: props.size !== undefined,
  },
])

const computedPlainClasses = computed(() => [
  stateClass.value,
  {
    [`form-control-${props.size}`]: props.size !== undefined,
    'form-control-file': true,
  },
])

// File enhancement for directory mode
const enhanceFilesWithPaths = (files: readonly File[]): readonly File[] => {
  if (!props.directory) return files

  return files.map((file) => {
    const enhancedFile = file as File & {$path?: string}
    // Use webkitRelativePath if available
    if (
      'webkitRelativePath' in file &&
      (file as File & {webkitRelativePath?: string}).webkitRelativePath
    ) {
      enhancedFile.$path = (file as File & {webkitRelativePath: string}).webkitRelativePath
    } else {
      enhancedFile.$path = file.name
    }
    return enhancedFile
  })
}

// Selected files (from dialog or managed state)
const internalFiles = ref<readonly File[]>([])

const selectedFiles = computed<readonly File[]>(() => enhanceFilesWithPaths(internalFiles.value))

const hasFiles = computed(() => selectedFiles.value.length > 0)

const fileNames = computed(() => selectedFiles.value.map((file) => file.name))

const formattedFileNames = computed(() => {
  if (!hasFiles.value) return ''
  if (props.fileNameFormatter) {
    return props.fileNameFormatter(selectedFiles.value)
  }
  const names = fileNames.value
  if (names.length === 1) return names[0]
  return `${names.length} files selected`
})

const showExternalDisplay = computed(
  () => !props.plain && props.showFileNames && (hasFiles.value || props.placeholder)
)

const effectiveBrowseText = computed(() => props.browseText ?? 'Browse')
const effectiveDropPlaceholder = computed(() => props.dropPlaceholder ?? 'Drop files here...')
const effectiveNoDropPlaceholder = computed(() => props.noDropPlaceholder ?? 'Not allowed')

// Drop validation based on accept attribute
const dropAllowed = computed(() => {
  // If no accept specified, all drops allowed
  if (!computedAccept.value) return true
  // For now, return true - actual validation happens in useDropZone
  return true
})

// File handling
const handleFiles = (files: File[] | FileList) => {
  const fileArray = Array.from(files)
  internalFiles.value = fileArray

  // Update model value
  if (fileArray.length === 0) {
    modelValue.value = null
  } else if (props.directory || props.multiple) {
    modelValue.value = fileArray
  } else {
    const [firstFile] = fileArray
    modelValue.value = firstFile
  }

  // Emit change event for consistency with native input behavior
  // This allows @change listeners to work in both plain and custom modes
  // Emit asynchronously after DOM updates to ensure proper event propagation
  nextTick(() => {
    const changeEvent = new Event('change', {bubbles: true, cancelable: false})
    emit('change', changeEvent)
  })
}

// Open file dialog
const openFileDialog = () => {
  if (!props.disabled) {
    open()
  }
}

// Plain mode change handler
const onPlainChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files) {
    handleFiles(input.files)
  }
}

// Watch dialog files from useFileDialog
onDialogChange((files) => {
  if (files) {
    handleFiles(files)
  }
})

// Reset method
const reset = () => {
  internalFiles.value = []
  modelValue.value = null
  resetDialog()
  if (plainInputRef.value) {
    plainInputRef.value.value = ''
  }
}

// Focus management
const focus = () => {
  if (props.plain) {
    plainInputRef.value?.focus()
  } else {
    browseButtonRef.value?.focus()
  }
}

const blur = () => {
  if (props.plain) {
    plainInputRef.value?.blur()
  } else {
    browseButtonRef.value?.blur()
  }
}

// Autofocus support
watch(
  () => props.autofocus,
  (autofocus) => {
    if (autofocus) {
      focus()
    }
  },
  {immediate: true}
)

// Watch modelValue changes from parent
watch(modelValue, (newValue) => {
  if (newValue === null) {
    internalFiles.value = []
    if (plainInputRef.value) {
      plainInputRef.value.value = ''
    }
  } else if (Array.isArray(newValue)) {
    internalFiles.value = newValue as readonly File[]
  } else {
    internalFiles.value = [newValue] as readonly File[]
  }
})

defineExpose({
  blur,
  element: computed(() => (props.plain ? plainInputRef.value : browseButtonRef.value)),
  focus,
  reset,
})
</script>

<style scoped lang="scss">
.b-form-file-wrapper {
  position: relative;
}

.b-form-file-control {
  display: flex;
  align-items: stretch;
  border: 1px solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  background-color: var(--bs-body-bg);
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus-within:not([aria-disabled='true']) {
    border-color: var(--bs-primary);
    box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
    outline: 0;
  }

  &.is-invalid {
    border-color: var(--bs-form-invalid-border-color);

    &:focus-within {
      box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
    }
  }

  &.is-valid {
    border-color: var(--bs-form-valid-border-color);

    &:focus-within {
      box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
    }
  }

  &[aria-disabled='true'] {
    background-color: var(--bs-secondary-bg);
    opacity: 0.65;
    cursor: not-allowed;

    .b-form-file-text,
    .b-form-file-button {
      pointer-events: none;
    }
  }
}

.b-form-file-text {
  flex: 1;
  padding: 0.375rem 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: transparent;
  line-height: 1.5;
}

.b-form-file-button {
  flex-shrink: 0;
  padding: 0.375rem 0.75rem;
  margin: -1px -1px -1px 0;
  color: var(--bs-body-color);
  background-color: var(--bs-secondary-bg);
  border: none;
  border-left: 1px solid var(--bs-border-color);
  border-radius: 0 var(--bs-border-radius) var(--bs-border-radius) 0;
  cursor: pointer;
  line-height: 1.5;

  &:hover:not(:disabled) {
    background-color: var(--bs-tertiary-bg);
  }

  &:disabled {
    cursor: not-allowed;
  }
}

// Size variants
.b-form-file-control.form-control-sm {
  border-radius: var(--bs-border-radius-sm);
  padding: 0;
  min-height: auto;

  .b-form-file-text,
  .b-form-file-button {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }

  .b-form-file-button {
    margin: -1px -1px -1px 0;
    border-radius: 0 var(--bs-border-radius-sm) var(--bs-border-radius-sm) 0;
  }
}

.b-form-file-control.form-control-lg {
  border-radius: var(--bs-border-radius-lg);
  padding: 0;
  min-height: auto;

  .b-form-file-text,
  .b-form-file-button {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }

  .b-form-file-button {
    margin: -1px -1px -1px 0;
    border-radius: 0 var(--bs-border-radius-lg) var(--bs-border-radius-lg) 0;
  }
}

// Drag states
.b-form-file-dragging {
  .b-form-file-control {
    border-color: var(--bs-primary);
    background-color: rgba(var(--bs-primary-rgb), 0.05);
  }
}

.b-form-file-drag-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.95);
  border: 2px dashed var(--bs-primary);
  border-radius: var(--bs-border-radius);
  pointer-events: none;
  z-index: 1;
}

.b-form-file-drag-text {
  color: var(--bs-primary);
  font-weight: 500;
}
</style>

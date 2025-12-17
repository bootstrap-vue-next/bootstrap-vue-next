<template>
  <div ref="rootRef" v-bind="processedAttrs.wrapperAttrs" class="b-form-file-root">
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
      <div
        class="b-form-file-control"
        :class="computedClasses"
        :aria-disabled="props.disabled"
        @click="handleControlClick"
      >
        <!-- Custom browse button (now on LEFT to match Bootstrap v5) -->
        <button
          v-if="!props.noButton"
          :id="computedId"
          ref="browseButtonRef"
          type="button"
          class="b-form-file-button"
          :disabled="props.disabled"
          :aria-label="props.ariaLabel"
          :aria-labelledby="props.ariaLabelledby"
          @click.stop="openFileDialog"
        >
          {{ effectiveBrowseText }}
        </button>

        <!-- File name display -->
        <div class="b-form-file-text">
          <slot name="file-name" :files="selectedFiles" :names="fileNames">
            <span v-if="hasFiles">{{ formattedFileNames }}</span>
            <span v-else-if="hasPlaceholderSlot || props.placeholder" class="text-muted">
              <slot name="placeholder">{{ props.placeholder }}</slot>
            </span>
          </slot>
        </div>
      </div>

      <!-- Drag overlay (only shown when dragging) -->
      <div v-if="isOverDropZone && !props.noDrop" class="b-form-file-drag-overlay">
        <slot name="drop-placeholder">
          <div class="b-form-file-drag-text">
            {{ effectiveDropPlaceholder }}
          </div>
        </slot>
      </div>

      <!-- Hidden input for form submission (positioned behind UI with z-index) -->
      <input
        ref="customInputRef"
        v-bind="processedAttrs.inputAttrs"
        type="file"
        :name="props.name"
        :form="props.form"
        :multiple="props.multiple || props.directory"
        :disabled="props.disabled"
        :required="props.required"
        :accept="computedAccept || undefined"
        :capture="props.capture"
        :directory="props.directory"
        :webkitdirectory="props.directory"
        tabindex="-1"
        aria-hidden="true"
        style="
          position: absolute;
          z-index: -5;
          width: 0;
          height: 0;
          opacity: 0;
          overflow: hidden;
          pointer-events: none;
        "
      />
    </div>

    <!-- Plain mode - simple native input -->
    <input
      v-else
      :id="computedId"
      ref="plainInputRef"
      v-bind="processedAttrs.inputAttrs"
      type="file"
      :class="computedPlainClasses"
      :form="props.form"
      :name="props.name"
      :multiple="props.multiple || props.directory"
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

    <!-- ARIA live region for screen reader announcements -->
    <div v-if="!props.plain" class="visually-hidden" aria-live="polite" aria-atomic="true">
      {{ ariaLiveMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDropZone, useFileDialog} from '@vueuse/core'
import {computed, nextTick, onMounted, ref, type Ref, useAttrs, useTemplateRef, watch} from 'vue'
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
  plain: false,
  placeholder: 'No file chosen',
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

const processedAttrs = computed(() => {
  // In plain mode, pass all attributes to the input element
  if (props.plain) {
    return {
      wrapperAttrs: {},
      inputAttrs: attrs,
    }
  }
  // In custom mode, split class/style to wrapper, rest to input
  const {class: wrapperClass, style: wrapperStyle, ...inputAttrs} = attrs
  const wrapperAttrs: Record<string, unknown> = {}
  if (wrapperClass !== undefined) wrapperAttrs.class = wrapperClass
  if (wrapperStyle !== undefined) wrapperAttrs.style = wrapperStyle
  return {wrapperAttrs, inputAttrs}
})

const computedId = useId(() => props.id)
const stateClass = useStateClass(() => props.state)

// Refs
const rootRef = useTemplateRef('rootRef')
const dropZoneRef = useTemplateRef('dropZoneRef')
const browseButtonRef = useTemplateRef('browseButtonRef')
const plainInputRef = useTemplateRef<HTMLInputElement>('plainInputRef')
const customInputRef = useTemplateRef<HTMLInputElement>('customInputRef')

// Computed accept for file type validation
const computedAccept = computed(() =>
  typeof props.accept === 'string' ? props.accept : props.accept.join(',')
)

// VueUse file dialog (uses our hidden input element)
const {
  open,
  reset: resetDialog,
  onChange: onDialogChange,
} = useFileDialog({
  accept: computedAccept.value,
  multiple: props.multiple || props.directory,
  directory: props.directory,
  input: customInputRef as unknown as Ref<HTMLInputElement>,
})

// VueUse drop zone (replaces manual drag/drop)
// Note: We don't pass dataTypes because the accept attribute handles validation
// and there is no reliable way to get MIME types from in all browsers
// https://github.com/vueuse/vueuse/issues/4523
const {isOverDropZone} = useDropZone(dropZoneRef, {
  onDrop: (files) => {
    if (files && !props.noDrop) {
      handleFiles(files)
    }
  },
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
  'form-control',
  stateClass.value,
  {
    [`form-control-${props.size}`]: props.size !== undefined,
  },
])

// Selected files (from dialog or managed state)
const internalFiles = ref<readonly File[]>([])

const selectedFiles = computed<readonly File[]>(() => internalFiles.value)

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

// ARIA live region message for accessibility
const ariaLiveMessage = computed(() => {
  if (!hasFiles.value) return ''
  const count = selectedFiles.value.length
  if (count === 1) {
    return `File selected: ${selectedFiles.value[0].name}`
  }
  return `${count} files selected`
})

const effectiveBrowseText = computed(() => props.browseText ?? 'Browse')
const effectiveDropPlaceholder = computed(() => props.dropPlaceholder ?? 'Drop files here...')

// Validate file against accept criteria
const isFileAccepted = (file: File): boolean => {
  if (!computedAccept.value) return true

  const acceptTypes = computedAccept.value.split(',').map((type) => type.trim())

  return acceptTypes.some((acceptType) => {
    // Extension match (e.g., .pdf)
    if (acceptType.startsWith('.')) {
      return file.name.toLowerCase().endsWith(acceptType.toLowerCase())
    }
    // Exact MIME type match (e.g., image/png)
    if (!acceptType.includes('*')) {
      return file.type === acceptType
    }
    // Wildcard MIME type match (e.g., image/* or */*)
    const slashIndex = acceptType.indexOf('/')
    if (slashIndex === -1) {
      // Malformed wildcard pattern (no '/'): do not match anything
      return false
    }
    const category = acceptType.slice(0, slashIndex)
    // */* should match any MIME type
    if (category === '*') {
      return true
    }
    return file.type.startsWith(`${category}/`)
  })
}

// File handling
const handleFiles = (files: File[] | FileList, nativeEvent?: Event) => {
  let fileArray: File[] = []

  if (nativeEvent) {
    // Plain mode: read from the event target (browser already filtered via accept)
    const input = nativeEvent.target as HTMLInputElement
    fileArray = input.files ? Array.from(input.files) : []
  } else {
    // Custom mode (drag & drop or file dialog): manually filter and set on hidden input
    fileArray = Array.from(files).filter((file) => isFileAccepted(file))
    if (customInputRef.value && typeof DataTransfer !== 'undefined') {
      try {
        const dataTransfer = new DataTransfer()
        fileArray.forEach((file) => dataTransfer.items.add(file))
        customInputRef.value.files = dataTransfer.files
      } catch {
        // In environments where DataTransfer is not fully supported, skip syncing files on the input
      }
    }
  }

  // Update internal state
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

  // Emit change event in nextTick to ensure DOM updates
  // In plain mode: forward the native event (has target.files)
  // In custom mode: create CustomEvent with files in detail
  nextTick(() => {
    if (nativeEvent) {
      // Plain mode: forward native event
      emit('change', nativeEvent)
    } else {
      // Custom mode: create CustomEvent with files
      const changeEvent = new CustomEvent('change', {
        bubbles: true,
        cancelable: false,
        detail: {
          files: fileArray,
          target: {files: fileArray},
        },
      })
      // Also attach files directly for easier access
      Object.defineProperty(changeEvent, 'files', {
        value: fileArray,
        enumerable: true,
      })
      emit('change', changeEvent)
    }
  })
}

// Open file dialog
const openFileDialog = () => {
  if (!props.disabled) {
    open({
      accept: computedAccept.value,
      multiple: props.multiple || props.directory,
      directory: props.directory,
    })
  }
}

// Handle click on control wrapper (make entire control clickable like Bootstrap v5)
const handleControlClick = () => {
  // Don't trigger if clicking the button itself (button has its own handler with .stop)
  // Don't trigger if disabled
  if (!props.disabled) {
    openFileDialog()
  }
}

// Plain mode change handler
const onPlainChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files) {
    handleFiles(input.files, e) // Pass native event
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
  resetDialog() // This resets the hidden input in custom mode
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

// Autofocus support - initial focus on mount
onMounted(() => {
  if (props.autofocus) {
    nextTick(() => {
      focus()
    })
  }
})

// Autofocus support - runtime prop changes
watch(
  () => props.autofocus,
  (autofocus) => {
    if (autofocus) {
      focus()
    }
  }
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

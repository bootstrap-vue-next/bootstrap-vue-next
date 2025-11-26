<template>
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

  <div
    class="b-form-file-wrapper"
    :class="{'b-form-file-dragging': isDragging, 'b-form-file-drop-allowed': dropAllowed}"
  >
    <input
      :id="computedId"
      v-bind="$attrs"
      ref="_input"
      type="file"
      :class="computedClasses"
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
      @change="onChange"
      @drop="onDrop"
      @dragover="onDragOver"
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
    />

    <!-- External file name display -->
    <div v-if="showDisplay" class="b-form-file-display mt-2">
      <slot
        name="file-name"
        :files="selectedFiles"
        :names="fileNames"
        :files-traversed="filesTraversed"
      >
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

    <!-- Drag state feedback overlay -->
    <div v-if="isDragging && !props.noDrop" class="b-form-file-drag-overlay">
      <slot name="drop-placeholder" :drop-allowed="dropAllowed">
        <div class="b-form-file-drag-text">
          {{ dropAllowed ? effectiveDropPlaceholder : effectiveNoDropPlaceholder }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useFocus} from '@vueuse/core'
import {computed, ref, useTemplateRef, watch} from 'vue'
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
  noTraverse: false,
  plain: false,
  placeholder: undefined,
  required: false,
  showFileNames: false,
  size: undefined,
  state: null,
})
const props = useDefaults(_props, 'BFormFile')
const slots = defineSlots<BFormFileSlots>()

const modelValue = defineModel<Exclude<BFormFileProps['modelValue'], undefined>>({
  default: null,
})

const computedId = useId(() => props.id)

// Drag and drop state
const isDragging = ref(false)
const dropAllowed = ref(true)
const dragCounter = ref(0)

// TODO noTraverse is not implemented yet

const stateClass = useStateClass(() => props.state)

const input = useTemplateRef('_input')

const {focused} = useFocus(input, {initialValue: props.autofocus})

const hasLabelSlot = computed(() => !isEmptySlot(slots['label']))
const hasPlaceholderSlot = computed(() => !isEmptySlot(slots['placeholder']))

const computedAccept = computed(() =>
  typeof props.accept === 'string' ? props.accept : props.accept.join(',')
)

const computedClasses = computed(() => [
  stateClass.value,
  {
    [`form-control-${props.size}`]: props.size !== undefined,
    'form-control': !props.plain,
    'form-control-input-file-hide-button': props.noButton,
  },
])

const selectedFiles = computed<readonly File[]>(() => {
  if (modelValue.value === null) return []
  return Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value]
})

const hasFiles = computed(() => selectedFiles.value.length > 0)

const fileNames = computed(() =>
  selectedFiles.value.map((file) => (file && file.name ? file.name : ''))
)

// TODO: Implement directory traversal when noTraverse is false
const filesTraversed = computed(() => selectedFiles.value)

const formattedFileNames = computed(() => {
  if (!hasFiles.value) return ''
  if (props.fileNameFormatter) {
    return props.fileNameFormatter(selectedFiles.value)
  }
  const names = fileNames.value
  if (names.length === 1) return names[0]
  return `${names.length} files selected`
})

const showDisplay = computed(() => props.showFileNames || hasFiles.value || props.placeholder)

const effectiveDropPlaceholder = computed(() => props.dropPlaceholder ?? 'Drop files here...')

const effectiveNoDropPlaceholder = computed(() => props.noDropPlaceholder ?? 'Drop not allowed')

const onChange = () => {
  const files =
    input.value?.files === null || input.value?.files === undefined ? null : [...input.value.files]

  // Add $path property for directory mode
  if (files && props.directory) {
    files.forEach((file: File & {$path?: string}) => {
      // Use webkitRelativePath if available (set by browser for directory selection)
      if (
        'webkitRelativePath' in file &&
        (file as File & {webkitRelativePath?: string}).webkitRelativePath
      ) {
        file.$path = (file as File & {webkitRelativePath: string}).webkitRelativePath
      } else {
        // Fallback to just the file name
        file.$path = file.name
      }
    })
  }

  // Directory mode always returns array, regular mode respects multiple prop
  modelValue.value = files === null ? null : props.directory || props.multiple ? files : files[0]
}

const onDrop = (e: Readonly<DragEvent>) => {
  isDragging.value = false
  dragCounter.value = 0
  if (props.noDrop === true) {
    e.preventDefault()
  }
}

const onDragOver = (e: Readonly<DragEvent>) => {
  if (props.noDrop) {
    e.preventDefault()
    return
  }
  e.preventDefault()
  // Check if drop is allowed based on file types
  const items = e.dataTransfer?.items
  if (items && props.accept) {
    const acceptTypes = computedAccept.value.split(',').map((type) => type.trim())
    dropAllowed.value = Array.from(items).some((item) => {
      if (item.kind !== 'file') return false
      const itemType = item.type
      return acceptTypes.some((accept) => {
        if (accept.startsWith('.')) {
          // Extension check would need file name, which we don't have in dragover
          return true
        }
        if (accept.endsWith('/*')) {
          return itemType.startsWith(accept.slice(0, -1))
        }
        return itemType === accept
      })
    })
  } else {
    dropAllowed.value = true
  }
}

const onDragEnter = (e: Readonly<DragEvent>) => {
  if (props.noDrop) {
    e.preventDefault()
    return
  }
  dragCounter.value++
  isDragging.value = true
}

const onDragLeave = (e: Readonly<DragEvent>) => {
  if (props.noDrop) {
    e.preventDefault()
    return
  }
  dragCounter.value--
  if (dragCounter.value === 0) {
    isDragging.value = false
  }
}

/**
 * Reset the form input
 */
const reset = () => {
  modelValue.value = null
}

watch(modelValue, (newValue) => {
  if (newValue === null && input.value !== null) {
    input.value.value = ''
  }
})

defineExpose({
  blur: () => {
    focused.value = false
  },
  element: input,
  focus: () => {
    focused.value = true
  },
  reset,
})
</script>

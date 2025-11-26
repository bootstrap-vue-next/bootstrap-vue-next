# BFormFile Component Architecture

## Overview

The `BFormFile` component provides a file input control for forms with support for single and multiple file selection, drag and drop, file type restrictions, and directory selection. The component follows a **native-first philosophy**, keeping the browser's native file input visible and functional while adding enhancement features around it.

## Design Philosophy

### Native-First Approach

BootstrapVueNext's implementation differs significantly from the original BootstrapVue approach:

#### BootstrapVue (Vue 2 + Bootstrap 4)

- Hides native input using `z-index: -5`
- Creates custom UI overlay for full control
- ~500+ lines of code
- ~40% larger bundle size
- Complex maintenance requirements
- Custom keyboard/accessibility handling needed

#### BootstrapVueNext (Vue 3 + Bootstrap 5)

- **Native browser file input remains visible and functional**
- Enhancement elements added externally around the input
- ~280 lines of code
- Minimal bundle size impact
- Browser handles native behavior automatically
- Better accessibility out of the box

### Benefits of Native-First

1. **Accessibility**: Browser provides keyboard navigation, screen reader support, and ARIA attributes natively
2. **Bundle Size**: Significantly smaller component (~40% less code)
3. **Maintenance**: Lower complexity, fewer edge cases to handle
4. **Progressive Enhancement**: Core functionality works even if enhancement features fail
5. **Standards Compliance**: Follows HTML5 standards and browser conventions

## Component Structure

### Core Architecture

```vue
<label> <!-- Optional label -->
  <slot name="label">{{ label }}</slot>
</label>

<div class="b-form-file-wrapper"> <!-- Wrapper for drag states -->
  <!-- Native browser input (always visible) -->
  <input
    type="file"
    class="form-control"
    :multiple="multiple"
    :accept="accept"
    :directory="directory"
    :webkitdirectory="directory"
    @change="onChange"
    @drop="onDrop"
    @dragover="onDragOver"
  />

  <!-- External enhancement: file name display -->
  <div v-if="showDisplay" class="b-form-file-display">
    <slot name="file-name" :files="files" :names="names">
      {{ formattedFileNames }}
    </slot>
    <slot name="placeholder" v-if="!hasFiles">
      {{ placeholder }}
    </slot>
  </div>

  <!-- External enhancement: drag feedback overlay -->
  <div v-if="isDragging" class="b-form-file-drag-overlay">
    <slot name="drop-placeholder" :drop-allowed="dropAllowed">
      {{ dropAllowed ? dropPlaceholder : noDropPlaceholder }}
    </slot>
  </div>
</div>
```

### Key Components

1. **Native Input**: The standard HTML5 `<input type="file">` with Bootstrap 5 styling
2. **External Display**: Shows selected file names and placeholder text outside the input
3. **Drag Overlay**: Visual feedback during drag-and-drop operations
4. **Scoped Slots**: Flexible customization points with contextual data

## Architecture Decisions

### Directory Mode Implementation

The directory mode feature includes several key architectural decisions:

- **`$path` Property Enhancement**: Component adds a special `$path` property to each `File` object using browser's `webkitRelativePath` when available, falling back to `file.name`. This enables nested directory structure visualization without traversing the file tree.

- **Array Return Behavior**: Directory mode always returns an array, even without the `multiple` prop, because directory selection inherently involves multiple files. Implementation: `(props.directory || props.multiple) ? files : files[0]`

- **Browser Limitations**: Chromium-based browsers may flatten directory structure when using the browse dialog (known bug). Drag-and-drop provides better nested structure support, so we document this recommendation prominently.

### Drag State Management

The drag-and-drop implementation uses specific patterns to handle browser quirks:

- **Drag Counter Pattern**: Uses a counter to handle nested element drag events correctly. Increments on `dragenter`, decrements on `dragleave`. Only shows overlay when counter reaches 1 (entering wrapper) and only hides when counter reaches 0 (leaving wrapper). This prevents flickering when dragging over child elements.

- **Drop Validation**: Checks `e.dataTransfer?.types?.includes('Files')` to validate file drag, sets `dropAllowed` state for visual feedback. Browser handles actual file transfer; component only manages UI state.

### External Display Architecture

The file name display is implemented as a separate element rather than modifying the native input:

- **Separate Display Element**: File names shown in external element below input (not within), keeping native input fully visible and functional. Display only appears when `showFileNames={true}` OR files are selected OR placeholder is set.

- **Formatter Function Pattern**: Receives full `File[]` array as input and returns formatted string for display. This enables complex formatting (e.g., file sizes, icons) without component changes.

## Code Implementation Details

### File Selection Handling

```typescript
const onChange = () => {
  const files =
    input.value?.files === null || input.value?.files === undefined ? null : [...input.value.files]

  // Add $path property for directory mode
  if (files && props.directory) {
    files.forEach((file: File & {$path?: string}) => {
      if ('webkitRelativePath' in file && file.webkitRelativePath) {
        file.$path = file.webkitRelativePath
      } else {
        file.$path = file.name
      }
    })
  }

  // Directory mode always returns array
  modelValue.value = files === null ? null : props.directory || props.multiple ? files : files[0]
}
```

#### Key Points

- Converts `FileList` to array for easier manipulation
- Adds `$path` property to files in directory mode
- Returns single file in single mode, array in multiple/directory mode
- Handles null case when files are cleared

### Drag and Drop State Management

```typescript
const isDragging = ref(false)
const dropAllowed = ref(true)
const dragCounter = ref(0)

const onDragEnter = (e: DragEvent) => {
  dragCounter.value++
  if (dragCounter.value === 1) {
    isDragging.value = true
    dropAllowed.value = e.dataTransfer?.types?.includes('Files') ?? false
  }
}

const onDragLeave = () => {
  dragCounter.value--
  if (dragCounter.value === 0) {
    isDragging.value = false
  }
}
```

#### Drag State Key Points

- Uses counter to handle nested element drag events
- Checks `dataTransfer.types` to validate files are being dragged
- Only shows overlay when actively dragging
- Cleans up state properly on drag leave

### Computed Values

#### File Name Formatting

```typescript
const formattedFileNames = computed(() => {
  if (!hasFiles.value) return ''
  if (props.fileNameFormatter) {
    return props.fileNameFormatter(selectedFiles.value)
  }
  const names = fileNames.value
  if (names.length === 1) return names[0]
  return `${names.length} files selected`
})
```

#### Display Visibility

```typescript
const showDisplay = computed(
  () => props.showFileNames || hasFiles.value || (props.placeholder && !hasFiles.value)
)
```

## Testing

### Unit Tests (57 tests)

#### File Selection

- Single file mode returns File object
- Multiple file mode returns array
- Directory mode returns array with $path
- Null handling when no files selected

#### Props and Attributes

- Accept attribute formatting
- Multiple attribute binding
- Directory/webkitdirectory attributes
- Disabled, required states

#### Drag and Drop Tests

- Drag enter/leave state management
- Drag counter for nested elements
- Drop allowed validation
- Custom placeholder text

#### Display Elements

- File name formatting
- Custom formatter function
- Placeholder display
- Slot rendering with scope

#### Accessibility Tests

- ARIA attributes
- Label association
- Focus management
- Validation states

### Manual Testing Checklist

- [ ] Single file selection shows file name
- [ ] Multiple file selection shows count
- [ ] Directory selection shows all files
- [ ] Drag and drop visual feedback
- [ ] Custom formatter displays correctly
- [ ] Slots override default behavior
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Validation states apply properly
- [ ] Works with form submission

## Future Enhancements

### BFormFileCustom Component (Phase 2)

If user feedback indicates that the native-first approach is insufficient, a separate `BFormFileCustom` component could be created following the BootstrapVue overlay approach.

#### Rationale for Separate Component

- Keeps `BFormFile` simple and lightweight
- Users opt-in to complexity and bundle size
- Clear mental model: two distinct approaches
- No breaking changes to existing implementations

#### Features in BFormFileCustom

- Hidden native input (z-index: -5)
- Custom label overlay mimicking file input
- `browseText` prop for custom button text
- In-input placeholder text
- Full control over visual appearance
- ~40% larger bundle size
- Increased maintenance complexity

#### Implementation Approach

```vue
<!-- BFormFileCustom - Future Component -->
<div class="b-form-file-custom">
  <input
    type="file"
    class="b-form-file-input"
    style="z-index: -5"
  />
  <label class="b-form-file-label">
    <span class="b-form-file-text">
      {{ hasFiles ? fileNames : placeholder }}
    </span>
    <span class="b-form-file-button">
      {{ browseText }}
    </span>
  </label>
</div>
```

#### Decision Criteria for Implementation

- Community feedback from GitHub Discussion #1213
- Specific use cases requiring hidden input
- Bundle size impact acceptance
- Maintenance commitment availability

**Current Status**: Not implemented. Phase 1 (native-first) approach deemed sufficient for v1.0 release. Will evaluate based on user feedback and actual use cases.

### Other Future Enhancements

#### noTraverse Implementation

- Currently planned but not implemented
- Would return flat array of files in directory mode
- Requires custom file tree traversal logic

#### Enhanced File Validation

- Custom validation beyond accept attribute
- File size limits
- File count limits
- Custom validation functions

#### Progress Tracking

- Upload progress for file transfers
- Integration with upload libraries
- Progress bar component

#### Preview Support

- Image thumbnail previews
- File type icons
- Preview slots

## Migration from BootstrapVue

### Key Differences

| Feature            | BootstrapVue                   | BootstrapVueNext                         |
| ------------------ | ------------------------------ | ---------------------------------------- |
| Native Input       | Hidden (z-index: -5)           | Visible and functional                   |
| File Name Display  | Inside custom label            | External element                         |
| Browse Button Text | Customizable via `browse-text` | Native browser button (not customizable) |
| Placeholder        | Inside input area              | External element                         |
| Bundle Size        | ~500 LOC                       | ~280 LOC                                 |
| Accessibility      | Manual implementation          | Browser native                           |

### Migration Example

```vue
<!-- BootstrapVue -->
<b-form-file
  v-model="file"
  placeholder="Choose a file..."
  browse-text="Browse"
  drop-placeholder="Drop file here..."
/>

<!-- BootstrapVueNext -->
<BFormFile
  v-model="file"
  show-file-names
  placeholder="Choose a file..."
  drop-placeholder="Drop file here..."
/>
<!-- Note: browse-text not available (native browser button) -->
```

### Feature Parity

#### Fully Supported

- ✅ Single and multiple file selection
- ✅ Drag and drop
- ✅ File type restrictions (accept)
- ✅ File name display
- ✅ Custom formatting
- ✅ Validation states
- ✅ Sizing options
- ✅ Directory selection
- ✅ Scoped slots for customization

#### Not Supported (by design)

- ❌ Custom "Browse" button text (native button used)
- ❌ Placeholder text inside input area (external display)
- ❌ Hidden input with custom label overlay

#### Workarounds

- For browse button customization: Use `BFormFileCustom` when available (Phase 2)
- For in-input placeholder: External display provides same information
- For full control: Use scoped slots for complete customization

## References

- [GitHub Discussion #1213](https://github.com/bootstrap-vue-next/bootstrap-vue-next/discussions/1213) - Community feedback and feature requests
- [Bootstrap 5 File Input](https://getbootstrap.com/docs/5.3/forms/form-control/#file-input) - Base styling and behavior
- [MDN File Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) - HTML5 specification
- [MDN webkitdirectory](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory) - Directory selection API
- [Can I Use: Directory Upload](https://caniuse.com/input-file-directory) - Browser support matrix

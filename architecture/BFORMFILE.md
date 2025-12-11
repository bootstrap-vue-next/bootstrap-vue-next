# BFormFile Architecture

## Overview

`BFormFile` is a file input component that wraps the native HTML `<input type="file">` element with Bootstrap styling and Vue reactivity. The component leverages VueUse composables for robust file selection and drag-and-drop functionality.

## Core Design Principles

1. **Composable-First**: Use battle-tested VueUse composables rather than reimplementing file handling
2. **Native HTML Foundation**: Leverage native `<input type="file">` capabilities with progressive enhancement
3. **Accessibility**: Maintain proper ARIA attributes and semantic HTML structure
4. **Bootstrap Integration**: Apply Bootstrap form control classes and styling conventions
5. **Vue Reactivity**: Use Vue's reactivity system for file state management

## Architecture

### Component Structure

```text
BFormFile
├── Wrapper <div>
│   ├── Class/Style attributes
│   └── Drop zone functionality (when not disabled/plain)
│
├── Label <label>
│   ├── Default slot (label text)
│   └── For attribute linking to input
│
└── File Input(s)
    ├── Native <input type="file">
    ├── ARIA/data attributes
    └── Multiple inputs for `multiple` + `directory` mode
```

### VueUse Integration

#### `useFileDialog`

Manages programmatic file selection through the native file picker dialog.

**Responsibilities:**

- Opens native file picker on click/drag
- Handles file selection events
- Manages `accept`, `multiple`, and `directory` (webkitdirectory) attributes
- Provides reactive file state
- **Internally creates a hidden `<input type="file">` element** (no additional hidden input needed)

**Configuration:**

```typescript
const {files, open, reset, onChange} = useFileDialog({
  accept: props.accept,
  directory: props.directory,
  multiple: props.multiple || props.directory,
  reset: true,
})

// When opening the dialog, pass current values for runtime reactivity
open({
  accept: computedAccept.value,
  multiple: props.multiple || props.directory,
  directory: props.directory,
})
```

**Runtime Reactivity:** VueUse's `open()` method accepts optional parameters that override the initial configuration. By passing the current prop values when opening the dialog, the component supports runtime changes to `accept`, `multiple`, and `directory` props without requiring remounting.

#### `useDropZone`

Handles drag-and-drop file operations on the component wrapper.

**Responsibilities:**

- Detects drag enter/leave/over events
- Provides `isOverDropZone` reactive state
- Validates dropped files against `accept` attribute
- Prevents default browser file opening behavior

**Configuration:**

```typescript
const {isOverDropZone} = useDropZone(dropZoneTarget, {
  onDrop: (files) => onChange(files),
  dataTypes: computedDataTypes, // Reactive computed ref
  disabled: computed(() => props.disabled || props.plain || props.noDrop),
})
```

**Reactivity:** Passing `dataTypes` as a computed ref (rather than unwrapping it with `.value`) ensures the drop zone automatically updates when the `accept` prop changes.

### File State Management

#### V-Model Integration

```typescript
const modelValue = defineModel<File | File[] | null>({default: null})

// Sync VueUse files to v-model
watch(files, (value) => {
  if (value === null || value.length === 0) {
    modelValue.value = null
  } else if (props.multiple || props.directory) {
    modelValue.value = [...value]
  } else {
    modelValue.value = value[0] ?? null
  }
})
```

#### Directory Mode File Path Access

When `directory` prop is enabled, files automatically include the standard `webkitRelativePath` property:

```typescript
// Files from directory selection automatically have webkitRelativePath
const handleFiles = (files: File[]) => {
  files.forEach((file) => {
    // Standard File API property - no enhancement needed
    console.log(file.webkitRelativePath) // e.g., "project/src/utils/helpers.ts"
  })
}
```

**Design Rationale:**

- Uses native browser property - no custom enhancement needed
- Available in all browsers supporting `webkitdirectory` attribute
- Part of standard File API when directory selection is used
- No TypeScript interface extension required
- Simpler implementation without property manipulation

#### Autofocus Implementation

The `autofocus` prop requires careful lifecycle management to ensure the hidden file input is focused after the DOM is mounted:

```typescript
// Initial focus on mount
onMounted(() => {
  if (props.autofocus) {
    nextTick(() => {
      focus()
    })
  }
})

// Runtime prop changes
watch(
  () => props.autofocus,
  (autofocus) => {
    if (autofocus) {
      focus()
    }
  }
)
```

**Implementation Details:**

- **Initial Focus**: Uses `onMounted` + `nextTick` to ensure DOM is ready before focusing
- **Runtime Updates**: Separate watcher handles dynamic `autofocus` prop changes
- **Timing Critical**: Using `immediate: true` on the watcher would execute during setup before DOM mount, causing focus to silently fail
- **Two-Part Solution**: Separating mount-time and runtime logic ensures reliable focus in all scenarios

**Rationale:**

- DOM elements must exist before `focus()` can be called
- Vue's `onMounted` hook guarantees component is mounted, but DOM updates may still be pending
- `nextTick` ensures all pending DOM updates complete before focus attempt
- This pattern follows Vue lifecycle best practices for DOM-dependent operations

### Attribute Routing

Attributes are intelligently routed to appropriate elements:

```typescript
const processedAttrs = computed(() => {
  const {class: className, style, ...rest} = attrs
  return {
    wrapper: {class: className, style}, // Visual attributes
    input: rest, // Semantic attributes (aria-*, data-*)
  }
})
```

**Routing Strategy:**

- **Wrapper `<div>`**: Receives `class` and `style` for visual presentation
- **Input element(s)**: Receives ARIA attributes, data attributes, and other semantic HTML attributes

This prevents attribute conflicts and ensures proper accessibility attribute targeting.

### Multiple Input Pattern (Directory + Multiple)

When both `directory` and `multiple` are enabled, the component renders two separate inputs:

```vue
<template v-if="directory && multiple">
  <input type="file" webkitdirectory v-bind="inputAttrs" @change="handleFileInput" />
  <input type="file" multiple v-bind="inputAttrs" @change="handleFileInput" />
</template>
```

**Rationale:**

- Native `<input>` cannot have both `webkitdirectory` and `multiple` simultaneously
- Allows users to choose between selecting a directory OR multiple individual files
- Both inputs share the same v-model binding
- User sees both options available

### Styling System

#### State Classes

```typescript
const computedClasses = computed(() => [
  'form-control',
  {
    [`form-control-${props.size}`]: props.size !== 'md',
    'is-valid': props.state === true,
    'is-invalid': props.state === false,
    'form-control-plaintext': props.plain,
  },
])
```

#### Size Variants

- **Small (`sm`)**: `.form-control-sm` - Reduced padding and font size
- **Medium (default)**: `.form-control` - Standard Bootstrap sizing
- **Large (`lg`)**: `.form-control-lg` - Increased padding and font size

#### Validation States

- **Valid**: `.is-valid` - Green border/feedback
- **Invalid**: `.is-invalid` - Red border/feedback
- **Neutral**: No state class - Default styling

#### Plain Text Mode

- `.form-control-plaintext` - Removes borders, matches static text styling
- Disables drop zone functionality
- Suitable for read-only form displays

## API Reference

For complete documentation of props, slots, and events, see the [BFormFile component documentation](../apps/docs/src/docs/components/form-file.md).

## Browser Compatibility

### Directory Selection

- Uses `webkitdirectory` attribute (non-standard but widely supported)
- **Supported Browsers:**
  - ✅ Chrome (all versions with file input support)
  - ✅ Edge (Chromium-based)
  - ✅ Safari (desktop and iOS with limitations)
  - ✅ Opera
  - ✅ Firefox 50+ (since November 2016)
- **Limitations:**
  - Mobile browsers: Support varies by platform and version
  - Non-standard: Not part of official HTML specification
  - Some browsers may require vendor prefix (`webkitdirectory`)
- **Graceful Degradation:** Falls back to standard file input if unsupported

### Drag and Drop

- Uses HTML5 Drag and Drop API
- Supported: All modern browsers
- Mobile: Limited support, varies by browser

### Form Submission

Both **custom mode** and **plain mode** support native form submission:

- **Custom Mode:** Uses a hidden `<input type="file">` element positioned behind the UI (z-index: -5). This element is passed to VueUse's `useFileDialog` composable via the `input` option, so VueUse manages the file input directly - no manual syncing required.
- **Plain Mode:** Uses a visible native `<input type="file">` element which naturally supports form submission.
- **Implementation:** The hidden input approach matches Bootstrap Vue's implementation, but leverages VueUse's built-in support for custom input elements, resulting in cleaner code without manual file synchronization.

## Testing Strategy

### Unit Tests Coverage

1. **File Selection**: Single, multiple, directory modes
2. **V-Model Binding**: Two-way data flow
3. **State Management**: Valid, invalid, disabled states
4. **Events**: Change events, custom formatters
5. **Slots**: Default, label, file-name, drop-placeholder
6. **Attributes**: Proper routing to wrapper vs input
7. **Props**: All prop combinations and edge cases

### Test Files

- `BFormFile.spec.ts` - Component behavior tests
- Total: 60 tests covering all functionality

## Migration from BSV (Bootstrap-Vue)

### Removed Features

- **`noTraverse`**: Removed - use standard `webkitRelativePath` property on File objects instead

### Changed Behavior

- Drop zone now uses VueUse `useDropZone` (more reliable)
- File dialog uses VueUse `useFileDialog` (better cross-browser support)
- Directory mode files use standard `webkitRelativePath` property (no custom enhancement)

### Migration Path

```vue
<!-- BSV (Old) -->
<BFormFile v-model="files" directory :no-traverse="false" />

<!-- BSVN (New) -->
<BFormFile v-model="files" directory />
<script setup>
// Access directory paths via standard webkitRelativePath property
watch(files, (newFiles) => {
  newFiles?.forEach((file) => {
    console.log(file.webkitRelativePath) // Full relative path
  })
})
</script>
```

## Performance Considerations

1. **Computed Properties**: Minimize reactivity overhead with targeted computeds
2. **File Processing**: Files are used directly without enhancement overhead
3. **Event Handlers**: Use VueUse's built-in debouncing for drag events
4. **Memory Management**: Reset file state properly to prevent memory leaks

## Security Considerations

1. **File Validation**: Always validate on server-side; client-side `accept` is UX only
2. **MIME Type Checking**: Browser-provided, not cryptographically secure
3. **File Size Limits**: Must be enforced server-side
4. **XSS Prevention**: File names are rendered as text, not HTML (unless raw HTML slot used)

## Future Enhancements

- [ ] Add progress tracking for large file selections
- [ ] Add file preview capabilities (images, PDFs)
- [ ] Add drag-and-drop file reordering for multiple files
- [ ] Add max file size validation prop
- [ ] Add max file count validation prop

## References

- [VueUse useFileDialog](https://vueuse.org/core/useFileDialog/)
- [VueUse useDropZone](https://vueuse.org/core/useDropZone/)
- [MDN: File API](https://developer.mozilla.org/en-US/docs/Web/API/File)
- [MDN: HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory)
- [Bootstrap Form Controls](https://getbootstrap.com/docs/5.3/forms/form-control/)

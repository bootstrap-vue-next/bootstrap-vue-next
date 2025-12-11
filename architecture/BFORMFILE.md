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
```

**Important:** The configuration options (`accept`, `multiple`, `directory`) are **not reactive**. These props should be set at component mount time and not changed dynamically. This is a design decision consistent with:

- Native `<input type="file">` behavior (these attributes don't support runtime changes)
- VueUse composable initialization patterns
- Other form control components in the library

If these props must change, the component should be remounted with a `key` attribute.

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
  dataTypes: props.accept ? [props.accept] : undefined,
  disabled: computed(() => props.disabled || props.plain || props.noDrop),
})
```

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

#### File Enhancement (Directory Mode)

When `directory` prop is enabled, files are enhanced with a `$path` property:

```typescript
const enhanceFilesWithPath = (fileList: FileList | File[] | null): File[] | null => {
  if (!fileList || !props.directory) return fileList ? [...fileList] : null

  return Array.from(fileList).map((file) => {
    if (file.webkitRelativePath) {
      const pathParts = file.webkitRelativePath.split('/')
      pathParts.pop() // Remove filename
      Object.defineProperty(file, '$path', {
        value: pathParts.join('/'),
        writable: false,
        enumerable: false,
        configurable: true,
      })
    }
    return file
  })
}
```

**Design Rationale:**

- Non-enumerable to avoid serialization issues
- Non-writable to prevent accidental modification
- Configurable to allow redefinition if needed
- Derived from `webkitRelativePath` (native browser property)

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

## File Properties Extension

### TypeScript Integration

The `$path` property requires global type augmentation in consuming applications:

```typescript
// vite-env.d.ts or env.d.ts
declare global {
  interface File {
    /**
     * Directory path of the file (derived from webkitRelativePath)
     * Only available when selecting files in directory mode with BFormFile
     */
    $path?: string
  }
}
export {}
```

**Why Global Augmentation?**

- `File` is a DOM API interface, not part of the component library
- Each application controls its own global type definitions
- Keeps library types clean and avoids DOM type pollution
- Follows TypeScript best practices for extending built-in types

**File Naming Convention:**

- **Vite projects**: `vite-env.d.ts` (Vite scaffolding convention)
- **Non-Vite projects**: `env.d.ts` (generic environment types)
- Must be included in `tsconfig.json` compilation

For more details on TypeScript integration, see the [Types documentation](../apps/docs/src/docs/types.md#extending-the-file-interface-for-bformfile).

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

- **`noTraverse`**: Removed in favor of `$path` property on files

### Changed Behavior

- Drop zone now uses VueUse `useDropZone` (more reliable)
- File dialog uses VueUse `useFileDialog` (better cross-browser support)
- Directory mode files automatically include `$path` property

### Migration Path

```vue
<!-- BSV (Old) -->
<BFormFile v-model="files" directory :no-traverse="false" />

<!-- BSVN (New) -->
<BFormFile v-model="files" directory />
<script setup>
// Access directory paths via $path property
watch(files, (newFiles) => {
  newFiles?.forEach((file) => {
    console.log(file.$path) // Directory path
  })
})
</script>
```

## Performance Considerations

1. **Computed Properties**: Minimize reactivity overhead with targeted computeds
2. **File Processing**: Only enhance files when `directory` mode is enabled
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

# BFormFile Enhancement Plan

## Overview

This document outlines the plan to enhance the `BFormFile` component in BootstrapVueNext to close the feature gap with the original BootstrapVue implementation while maintaining our native-first philosophy.

## Background

### Current State (BootstrapVueNext)

- Uses **native browser file input** (visible control)
- Relies on Bootstrap 5's built-in styling
- Simple, lightweight implementation (~140 LOC)
- Minimal bundle size impact

### Original BootstrapVue Approach

- Creates **custom UI overlay** hiding the native input (z-index: -5)
- Extensive custom file handling and display logic (~500+ LOC)
- ~40% larger bundle size
- High maintenance complexity

### Community Feedback

From [Discussion #1213](https://github.com/bootstrap-vue-next/bootstrap-vue-next/discussions/1213):

- 72% of users wanted custom features vs 27% preferring simple default
- Key missing features identified:
  - `placeholder` - Custom text when no files selected
  - `browse-text` - Custom "Browse" button text
  - `drop-placeholder` - Text while dragging files
  - `no-drop-placeholder` - Text when drop is not allowed
  - `file-name-formatter` - Custom file name display formatting

## Philosophy

**Native-First Approach**: We prioritize keeping the native browser file input visible and functional, adding enhancement features around it rather than replacing it. This provides:

- Better accessibility (browser handles native behavior)
- Smaller bundle size
- Lower maintenance burden
- Progressive enhancement (works even if features fail)

## Implementation Plan

### Phase 1: Native Control Enhancements (v1.0 Target)

Implement features that work **with** the visible native input by adding enhancement elements outside/around the native control.

#### Step 1: Enhanced External Display Elements

**Props to Add:**

- `placeholder` (string) - Text shown in external display when no files selected
- `fileNameFormatter` (function) - Custom formatting for displayed file names
- `dropPlaceholder` (string) - Text shown during drag-over state
- `noDropPlaceholder` (string) - Text shown when drag is not allowed
- `showFileNames` (boolean, default: false) - Show selected file names externally

**Implementation Details:**

- Add a separate display element below/above the native input showing file information
- Use props to customize what's displayed in this external element
- Display element only appears when `showFileNames` is true or files are selected
- Keep native input fully visible and functional

**Example Structure:**

```vue
<div class="b-form-file">
  <label v-if="label">{{ label }}</label>

  <!-- Native browser input (always visible) -->
  <input
    type="file"
    class="form-control"
    :class="inputClasses"
    v-bind="$attrs"
  />

  <!-- External enhancement display -->
  <div v-if="showFileNames || hasFiles" class="b-form-file-display">
    <slot name="file-name" :files="files" :names="fileNames">
      {{ formattedFileNames }}
    </slot>
  </div>

  <!-- Drag state feedback -->
  <div v-if="isDragging" class="b-form-file-drag-feedback">
    <slot name="drop-placeholder" :drop-allowed="dropAllowed">
      {{ dropAllowed ? dropPlaceholder : noDropPlaceholder }}
    </slot>
  </div>
</div>
```

#### Step 2: Scoped Slots for Flexibility

**Slots to Add:**

- `file-name` - Scoped slot for custom file name display
  - Scope: `{ files: File[], names: string[], filesTraversed: File[] }`
- `placeholder` - Custom placeholder content when no files
- `drop-placeholder` - Custom drop zone feedback during drag
  - Scope: `{ dropAllowed: boolean }`

**Benefits:**

- Developers can fully customize file display without requiring custom mode
- Provides same flexibility as BSV but with native input visible
- Slots override default prop-based display

#### Step 3: Visual Drag/Drop Feedback

**Props to Add:**

- `dragOverClass` (ClassValue) - Classes applied during drag-over
- `dropSuccessClass` (ClassValue) - Classes applied after successful drop
- `dropErrorClass` (ClassValue) - Classes applied after failed drop

**Implementation:**

- CSS classes for drag-over state (border highlight, background change)
- Success/error visual feedback after drop
- Accessible drag state announcements

#### Step 4: Documentation Updates

**Update Files:**

- `apps/docs/src/data/components/formFile.data.ts` - Add all new props and slots
- Migration guide section explaining new features
- Usage examples showing:
  - Basic file name display
  - Custom formatting with `fileNameFormatter`
  - Drag/drop visual feedback
  - Slot-based customization

**Migration Guide Entry:**

```markdown
### BFormFile

BootstrapVueNext's BFormFile uses the native browser file input, enhanced with
external display elements for file information and drag/drop feedback. This
provides better accessibility and smaller bundle size compared to BootstrapVue's
custom overlay approach.

**New Features in BootstrapVueNext:**

- `showFileNames` - Display selected files externally
- `fileNameFormatter` - Custom file name formatting
- `dropPlaceholder` / `noDropPlaceholder` - Drag feedback text
- `file-name` slot - Custom file display
- Enhanced drag/drop visual feedback

**Not Implemented (requires custom mode):**

- Custom "Browse" button text within the input
- Placeholder text within the input area
- Full BSV-style hidden input overlay
```

### Phase 2: Optional Custom Mode (Future Consideration)

**Only implement if Phase 1 proves insufficient for v1.0 release.**

#### Option A: Custom Mode via Prop

Add `custom` boolean prop that switches rendering to BSV-style overlay:

- When `custom={true}`, hide native input and render custom label overlay
- Enables browse button text customization and in-input placeholders
- Adds ~40% to component bundle size
- Higher maintenance complexity

#### Option B: Separate Component

Create `BFormFileCustom` as separate component:

- Keeps `BFormFile` simple and native
- Users opt-in to complexity/bundle size by importing different component
- Clearer mental model (two distinct approaches)

#### Option C: CSS-Only Tricks

Attempt to achieve customization through CSS hacks:

- Explore `::file-selector-button` pseudo-element for button text
- Browser compatibility concerns
- May not achieve full parity

## Success Criteria for Phase 1

Phase 1 will be considered successful and sufficient for v1.0 if:

1. **File name display** - Users can see selected file names with custom formatting
2. **Drag feedback** - Clear visual indication during drag/drop operations
3. **Flexibility** - Scoped slots enable full UI customization around native input
4. **Accessibility** - Native input provides full keyboard/screen reader support
5. **Bundle size** - Component remains lightweight (<200 LOC)
6. **Community acceptance** - Positive feedback on approach from issue #1213 participants

## Decision Point

After Phase 1 implementation:

- Gather community feedback
- Evaluate if custom mode (Phase 2) is needed for v1.0
- Consider if ~40% bundle size increase is justified
- Decide between Option A (prop), B (separate component), or C (CSS-only)

## Testing Requirements

### Unit Tests

- File selection and display
- File name formatter function
- Drag/drop state management
- Multiple file handling
- Directory traversal (when enabled)
- Slot rendering with scoped variables
- Validation state feedback

### Integration Tests

- Works with form validation
- v-model binding
- Event emission (change, update:modelValue)
- Focus management
- Accessibility attributes

### Visual Regression Tests

- Drag-over state styling
- File display formatting
- Various size props
- Validation states

## Migration Path

For users migrating from BootstrapVue:

```vue
<!-- BootstrapVue (hidden input with custom overlay) -->
<b-form-file
  v-model="file"
  placeholder="Choose a file..."
  browse-text="Browse"
  drop-placeholder="Drop file here..."
/>

<!-- BootstrapVueNext Phase 1 (native input with external display) -->
<BFormFile
  v-model="file"
  show-file-names
  placeholder="Choose a file..."
  drop-placeholder="Drop file here..."
/>
<!-- Note: browse-text not available (native browser button) -->

<!-- BootstrapVueNext with custom formatting -->
<BFormFile v-model="file" show-file-names>
  <template #file-name="{ names }">
    <div class="custom-file-display">
      Selected: {{ names.join(', ') }}
    </div>
  </template>
</BFormFile>
```

## Timeline

1. **Architecture Document** - Create this document ✓
2. **Implementation** - 2-3 days
   - Component updates
   - Type definitions
   - Tests
3. **Documentation** - 1 day
   - Data file updates
   - Migration guide
   - Usage examples
4. **Review & Feedback** - 1 week
   - Community review on #1213
   - Internal testing
   - Accessibility audit
5. **Decision Point** - Evaluate need for Phase 2

## References

- [Discussion #1213](https://github.com/bootstrap-vue-next/bootstrap-vue-next/discussions/1213)
- [Bootstrap 5 File Input](https://getbootstrap.com/docs/5.3/forms/form-control/#file-input)
- [BootstrapVue BFormFile](https://github.com/bootstrap-vue/bootstrap-vue/tree/dev/src/components/form-file)
- [Original Research](https://github.com/bootstrap-vue-next/bootstrap-vue-next/discussions/1213#discussioncomment-11517168)

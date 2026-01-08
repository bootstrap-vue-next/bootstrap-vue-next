# Deprecation Warning System Refactoring

## Overview

This document outlines the plan to refactor the deprecation and "not yet implemented" warning system throughout the documentation. The goal is to replace large, repetitive warning blocks with concise, consistent deprecation notices that link back to a central explanation.

## Current Problems

1. **Excessive Information**: Large `DeprecatedFeature` cards with full explanations appear throughout the migration guide, making it difficult to scan
2. **Inconsistent Warnings**: Mix of `NotYetImplemented`, `NotYetDocumented`, and `DeprecatedFeature` components with varying styles
3. **Unclear Status**: Hard to distinguish between "truly not yet done" vs "won't be in initial release" vs "already completed but warning not removed"
4. **Maintenance Burden**: Duplicated explanation text in multiple locations

## Goals

1. Keep detailed deprecation rationale in one canonical location
2. Provide concise, consistent inline warnings throughout docs
3. Make it easy to update/remove warnings as features are completed
4. Clearly distinguish different deprecation reasons
5. Allow for feature-specific context (bug links, parity features)

## Component Architecture

### DeprecatedReasons Component (No Changes)

**Location**: `apps/docs/src/components/DeprecatedReasons.vue`

**Purpose**: Display the full, detailed list of deprecation reasons in the Migration Guide's Deprecation section

**Keep as-is**: This component shows the numbered/lettered list explaining all reasons we deprecate features

### DeprecatedFeature Component (Major Refactor)

**Location**: `apps/docs/src/components/DeprecatedFeature.vue`

**New Purpose**: Display a concise inline warning with automatic link back to detailed explanation

#### Props

```typescript
interface DeprecatedFeatureProps {
  reason: DeprecationReason // enum, see below
}

enum DeprecationReason {
  BOOTSTRAP_DEPRECATED = 'bootstrap-deprecated', // Reason 1a
  VUE3_BOOTSTRAP5_CHANGES = 'vue3-bootstrap5-changes', // Reason 1b
  BOOTSTRAP_NATIVE = 'bootstrap-native', // Reason 1c
  MODERN_ALTERNATIVE = 'modern-alternative', // Reason 1d
  INSUFFICIENT_DEMAND = 'insufficient-demand', // Reason 2
}
```

#### Reason Code Mapping

| Enum Value                | Short Description           | Full Description                                                                                                                                            |
| ------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BOOTSTRAP_DEPRECATED`    | Deprecated by Bootstrap     | It's been deprecated by Bootstrap                                                                                                                           |
| `VUE3_BOOTSTRAP5_CHANGES` | Vue 3/Bootstrap 5 evolution | Some aspect of Vue3 or bootstrap5 has made this feature less useful or not reasonable to implement                                                          |
| `BOOTSTRAP_NATIVE`        | Achievable natively         | The functionality can be as easily achieved using bootstrap natively (e.g. adding classes)                                                                  |
| `MODERN_ALTERNATIVE`      | Modern alternative exists   | There is a more modern way of solving the same problem - in this case we are trying to point out the parity feature in the migration guide                  |
| `INSUFFICIENT_DEMAND`     | Insufficient demand         | There hasn't been enough demand to implement this feature, and in many cases we believe we can add it in a future version without causing a breaking change |

#### Slots

- **`default`**: For adding specific context (bug numbers, issue links, parity feature references, etc.)

#### Visual Design

**Style**: Small inline alert (Bootstrap alert component)

- Use warning variant for visibility
- Compact padding
- Single line when no slot content
- Expandable to multi-line when slot content provided

**Design Principle**: Style should be easily changeable via component props or CSS without affecting usage throughout docs

**Example Implementation**:

```vue
<template>
  <BAlert variant="warning" show class="deprecation-warning">
    <strong>Deprecated:</strong> {{ reasonText }}
    <BLink :href="deprecationSectionUrl">Learn more about deprecation reasons</BLink>
    <span v-if="$slots.default"> – </span>
    <slot />
  </BAlert>
</template>

<style scoped>
.deprecation-warning {
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}
</style>
```

#### Usage Examples

**Minimal usage (just the reason):**

```vue
<DeprecatedFeature reason="bootstrap-deprecated" />
```

**With specific context:**

```vue
<DeprecatedFeature reason="vue3-bootstrap5-changes">
  <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">See issue #1860</BLink>
</DeprecatedFeature>
```

**With parity feature reference:**

```vue
<DeprecatedFeature reason="modern-alternative">
  Use <BLink href="/docs/components/accordion">BAccordion</BLink> instead.
</DeprecatedFeature>
```

### NotYetImplemented Component (Decision Required)

**Current Location**: `apps/docs/src/components/NotYetImplemented.vue`

**Options**:

1. **Remove entirely**: Replace all usages with `DeprecatedFeature reason="insufficient-demand"`
2. **Keep for special cases**: Reserve for features actively in development vs "won't do for initial release"
3. **Rename/Repurpose**: Convert to "PlannedFeature" for features that are definitely coming

**Recommendation**: Remove and replace with `DeprecatedFeature reason="insufficient-demand"` since the distinction is rarely meaningful to users

### NotYetDocumented Component

**Current Location**: `apps/docs/src/components/NotYetDocumented.vue`

**Recommendation**: Keep this as-is since "not documented" is a different category from "not implemented" or "deprecated"

## Implementation Plan

### Phase 1: Component Refactoring

1. **Update DeprecatedFeature.vue**
   - Change from card-based to alert-based styling
   - Implement reason enum and prop
   - Add automatic link to deprecation section
   - Update TypeScript types
   - Add comprehensive JSDoc comments

2. **Create shared types file** (if not exists)
   - Location: `apps/docs/src/types/deprecation.ts`
   - Export `DeprecationReason` enum
   - Export reason-to-text mapping

3. **Test the component**
   - Verify all enum values render correctly
   - Test with and without slot content
   - Verify styling in different contexts

### Phase 2: Audit Existing Warnings

**Scope**: Both migration guide AND component-specific documentation

**Process**:

1. Search for all instances of:
   - `<NotYetImplemented/>`
   - `<NotYetImplemented>`
   - `<NotYetDocumented/>`
   - `<NotYetDocumented>`
   - `<DeprecatedFeature`

2. For each instance, determine:
   - ✅ **Already done**: Feature is implemented/documented → Remove warning
   - 🚫 **Won't implement**: Feature won't be in initial release → Replace with new `DeprecatedFeature`
   - 📝 **Needs docs**: Feature exists but not documented → Keep `NotYetDocumented`
   - ❓ **Unclear**: Needs investigation → Flag for team review

3. Create audit spreadsheet with:
   - File path
   - Line number
   - Current warning type
   - Component/feature name
   - Recommended action
   - Notes

### Phase 3: Systematic Replacement

**Order of operations**:

1. Migration guide (`apps/docs/src/docs/migration-guide.md`)
2. Component documentation pages (`apps/docs/src/docs/components/*.md`)
3. Other documentation pages (`apps/docs/src/docs/**/*.md`)

**For each file**:

1. Remove warnings for completed features
2. Replace `NotYetImplemented` with appropriate `DeprecatedFeature` reason
3. Add specific context in slots where relevant
4. Ensure consistent formatting
5. Verify links work correctly

### Phase 4: Cleanup

1. **Update components.d.ts** if any components are removed
2. **Update migration guide's Deprecation section** if needed
3. **Remove old component files** if NotYetImplemented is deprecated
4. **Update CONTRIBUTING.md** with guidance on using the new system
5. **Create PR with comprehensive description** of changes

## Migration Examples

### Example 1: Simple Not Yet Implemented

**Before:**

```vue
<NotYetImplemented />
```

**After:**

```vue
<DeprecatedFeature reason="insufficient-demand" />
```

### Example 2: Not Yet Implemented with Context

**Before:**

```vue
<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">See issue #1860</BLink></NotYetImplemented>
```

**After:**

```vue
<DeprecatedFeature reason="insufficient-demand">
  <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">See issue #1860</BLink>
</DeprecatedFeature>
```

### Example 3: Large Deprecated Feature Card

**Before:**

```vue
<DeprecatedFeature kind="component" reason="1b">
  <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">See issue #1860</BLink>
</DeprecatedFeature>
```

**After:**

```vue
<DeprecatedFeature reason="vue3-bootstrap5-changes">
  <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">See issue #1860</BLink>
</DeprecatedFeature>
```

### Example 4: Already Implemented (Remove)

**Before:**

```vue
The following feature is
<NotYetImplemented />
: - Feature X
```

**After:**

```markdown
The following feature is now implemented:

- Feature X
```

Or simply remove the entire notice if the feature description is elsewhere.

## Documentation Updates

### CONTRIBUTING.md

Add section on using deprecation warnings:

```markdown
## Deprecation Warnings

When documenting deprecated features in the migration guide or component docs, use:

\`\`\`vue
<DeprecatedFeature reason="bootstrap-deprecated" />
\`\`\`

Available reasons:

- \`bootstrap-deprecated\`: Feature deprecated by Bootstrap
- \`vue3-bootstrap5-changes\`: Vue 3/Bootstrap 5 made this less relevant
- \`bootstrap-native\`: Can be achieved with Bootstrap classes
- \`modern-alternative\`: A modern alternative exists (mention it in the slot)
- \`insufficient-demand\`: Not enough demand for initial release

Add specific context using the default slot:

\`\`\`vue
<DeprecatedFeature reason="insufficient-demand">
<BLink href="https://github.com/.../issues/123">Track in issue #123</BLink>
</DeprecatedFeature>
\`\`\`
```

## Testing Strategy

1. **Visual Testing**: Review several pages with new warnings to ensure consistent appearance
2. **Link Testing**: Verify all "Learn more" links point to correct section
3. **Responsive Testing**: Check warnings display correctly on mobile/tablet
4. **Accessibility Testing**: Ensure alerts are properly announced to screen readers
5. **Build Testing**: Verify no TypeScript errors with enum usage

## Rollback Plan

If issues arise:

1. Keep old DeprecatedFeature component as `DeprecatedFeature.old.vue`
2. Can revert import statements if needed
3. Git history preserves all previous states

## Future Enhancements

1. **Add icons**: Consider adding warning icons to each reason type
2. **Statistics**: Track which deprecation reasons are most common
3. **Grouping**: Consider grouping deprecated features by reason in migration guide
4. **Filtering**: Allow users to filter migration guide by deprecation reason
5. **Timeline**: Add "deprecated since version X" information if useful

## Success Criteria

- ✅ All `NotYetImplemented` instances reviewed and updated or removed
- ✅ All `DeprecatedFeature` instances use new compact format
- ✅ Consistent styling across all documentation
- ✅ No broken links to deprecation section
- ✅ All TypeScript types compile without errors
- ✅ Documentation builds successfully
- ✅ Team reviews and approves changes

## Timeline Estimate

- Phase 1 (Component Refactoring): 2-3 hours
- Phase 2 (Audit): 3-4 hours
- Phase 3 (Replacement): 4-6 hours
- Phase 4 (Cleanup & Testing): 1-2 hours

**Total**: ~10-15 hours of focused work

# ARIA Visibility Architecture

## Overview

Bootstrap Vue Next implements a sophisticated ARIA attribute management system for show/hide components (BCollapse, BOffcanvas, BModal, BDropdown, BAlert, BToast, BPopover, BTooltip). This system ensures proper accessibility through dynamic ARIA attributes while supporting multiple usage patterns.

## Core Components

### 1. Show/Hide Components

Components that use the `useShowHide` composable:

- **BCollapse** - Collapsible content sections
- **BOffcanvas** - Off-canvas panels
- **BModal** - Modal dialogs
- **BDropdown** - Dropdown menus
- **BAlert** - Dismissible alerts
- **BToast** - Toast notifications
- **BPopover** - Popovers
- **BTooltip** - Tooltips

### 2. v-b-toggle Directive

The `v-b-toggle` directive (`packages/bootstrap-vue-next/src/directives/BToggle/index.ts`) provides automatic trigger registration and relationship mapping.

### 3. useShowHide Composable

The `useShowHide` composable (`packages/bootstrap-vue-next/src/composables/useShowHide.ts`) manages visibility state and dynamic ARIA attributes for registered triggers.

## Architecture Principles

### Trigger Registration System

The ARIA management is **opt-in** through a trigger registration system:

**Registration happens when:**

- Using `v-b-toggle` directive (automatic)
- Using slot functions (`toggle`, `show`, `hide`) which leverage the registration system

**Unregistered triggers:**

- Must manually manage all ARIA attributes
- Do NOT receive automatic updates from the composable

### Division of Responsibilities

The architecture splits ARIA attribute management based on **static vs dynamic** characteristics:

#### Static Attributes (v-b-toggle Directive)

**Managed by:** `v-b-toggle` directive

**Attributes:**

- `aria-controls` - Lists the IDs of controlled elements

**Rationale:**

- The directive knows target IDs from its binding (modifiers, arg, value, href)
- Supports multiple targets: `v-b-toggle.target1.target2.target3`
- This relationship is **static** - it doesn't change with visibility state
- Only the directive layer has access to this binding information
- Set once on mount/update, removed on unmount

**Example:**

```html
<!-- Directive sets aria-controls="my-collapse" -->
<BButton v-b-toggle.my-collapse>Toggle</BButton>
```

#### Dynamic Attributes (useShowHide Composable)

**Managed by:** `useShowHide` composable (for registered triggers only)

**Attributes:**

- `aria-expanded` - Current visibility state ('true' or 'false')
- CSS classes - `collapsed` / `not-collapsed` visual state indicators

**Rationale:**

- These attributes **change dynamically** when visibility changes
- The composable watches `modelValue` and knows current state
- Must update **all registered triggers** when visibility changes
- Works regardless of HOW visibility changed (v-b-toggle click, v-model update, slot function, programmatic call)
- Centralized state management ensures consistency

**Example:**

```html
<!-- Composable sets aria-expanded="false" and class="collapsed" initially -->
<!-- Then updates to aria-expanded="true" and class="not-collapsed" when visible -->
<BButton v-b-toggle.my-collapse>Toggle</BButton>
```

### Why Split Responsibilities?

The division is based on **information ownership** and **lifecycle management**:

1. **Information Ownership:**
   - Directive = knows target IDs, sets static relationships
   - Composable = knows visibility state, manages dynamic attributes

2. **Lifecycle:**
   - `aria-controls` = set once, static for component lifetime
   - `aria-expanded` & classes = updated on every visibility change

3. **Multi-Trigger Support:**
   - One component can have multiple registered triggers
   - All triggers must update when visibility changes
   - Composable's watch mechanism handles this automatically

4. **Decoupling:**
   - Directive doesn't need to know visibility state
   - Composable doesn't need to know target IDs
   - Each layer has single, focused responsibility

## Data Flow

### Registration Flow

```
User adds v-b-toggle directive to button
         ↓
Directive mounts and calls handleUpdate()
         ↓
1. Parses target IDs from binding
2. Sets aria-controls="target-id" on button
3. Calls component.registerTrigger('click', buttonElement)
         ↓
useShowHide.registerTrigger() executes:
         ↓
1. Adds buttonElement to triggerRegistry[]
2. Adds 'click' event listener
3. Calls checkVisibility(buttonElement)
         ↓
checkVisibility() sets initial state:
         ↓
1. Sets aria-expanded="false" (or "true" if visible)
2. Adds class="collapsed" (or "not-collapsed")
```

### Visibility Change Flow

```
Visibility changes via ANY method:
  - User clicks v-b-toggle button
  - v-model updates programmatically
  - Slot function called (hide/show/toggle)
  - Direct method call via template ref
         ↓
modelValue updates in component
         ↓
useShowHide watch() triggers:
         ↓
watch(modelValue, () => {
  triggerRegistry.forEach((t) => {
    checkVisibility(t.el)
  })
})
         ↓
checkVisibility() updates EACH registered trigger:
         ↓
1. Sets aria-expanded="true" or "false"
2. Toggles collapsed/not-collapsed classes
         ↓
ALL registered triggers now reflect current state
```

### Unregistration Flow

```
Directive unmounts
         ↓
handleUnmount() executes:
         ↓
1. Calls component.unregisterTrigger('click', buttonElement, true)
2. Removes aria-controls from button
         ↓
useShowHide.unregisterTrigger(clean=true) executes:
         ↓
1. Removes buttonElement from triggerRegistry[]
2. Removes 'click' event listener
3. Removes aria-expanded attribute
4. Removes collapsed/not-collapsed classes
```

## Usage Patterns

### Pattern 1: v-b-toggle Directive (Automatic)

**Use when:** You want automatic ARIA management with minimal code

**Example:**

```vue
<template>
  <BButton v-b-toggle.my-collapse>Toggle</BButton>
  <BCollapse id="my-collapse">
    <BCard>Content</BCard>
  </BCollapse>
</template>
```

**What happens:**

- ✅ `aria-controls` - Set by directive
- ✅ `aria-expanded` - Managed by composable
- ✅ `collapsed`/`not-collapsed` classes - Managed by composable
- ✅ Click handler - Added by composable
- ✅ Automatic updates - All triggers update on visibility change

### Pattern 2: v-b-toggle + v-model (Hybrid)

**Use when:** You need both automatic ARIA and programmatic control

**Example:**

```vue
<template>
  <BButton v-b-toggle.my-collapse>Toggle</BButton>
  <BButton @click="visible = false">Close</BButton>

  <BCollapse id="my-collapse" v-model="visible">
    <BCard>Content</BCard>
  </BCollapse>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const visible = ref(false)
</script>
```

**What happens:**

- ✅ First button gets automatic ARIA management (registered via v-b-toggle)
- ✅ First button updates when second button closes collapse
- ✅ Programmatic control via v-model works seamlessly
- ❌ Second button has NO ARIA attributes (not registered)

### Pattern 3: v-model with Slot Functions

**Use when:** You want programmatic control with ARIA managed via slots

**Example:**

```vue
<template>
  <BCollapse v-model="visible">
    <template #default="{hide}">
      <BCard>
        Content
        <BButton @click="hide">Close</BButton>
      </BCard>
    </template>
  </BCollapse>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const visible = ref(false)
</script>
```

**What happens:**

- ✅ Slot functions work with v-model
- ✅ Button can use slot function for accessibility
- ℹ️ For external triggers, still need v-b-toggle or manual ARIA

### Pattern 4: Manual ARIA Management

**Use when:** You're not using v-b-toggle and don't register triggers

**Example:**

```vue
<template>
  <BButton
    aria-controls="my-collapse"
    :aria-expanded="visible ? 'true' : 'false'"
    :class="visible ? 'not-collapsed' : 'collapsed'"
    @click="toggle"
  >
    Toggle
  </BButton>

  <BCollapse id="my-collapse" v-model="visible">
    <BCard>Content</BCard>
  </BCollapse>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const visible = ref(false)
const toggle = () => {
  visible.value = !visible.value
}
</script>
```

**What happens:**

- ❌ No automatic ARIA management
- ✅ Full manual control
- ✅ All ARIA attributes on trigger element
- ⚠️ Developer responsible for keeping attributes in sync

## Component Internals

### useShowHide Key Functions

#### registerTrigger(trigger: string, el: Element)

```typescript
const registerTrigger = (trigger: string, el: Element) => {
  triggerRegistry.push({trigger, el})
  el.addEventListener(trigger, triggerToggle)
  checkVisibility(el) // Sets initial state
}
```

**Purpose:** Adds trigger to registry and sets initial ARIA state

**Called by:**

- v-b-toggle directive (internal use only)

#### unregisterTrigger(trigger: string, el: Element, clean = true)

```typescript
const unregisterTrigger = (trigger: string, el: Element, clean = true) => {
  const idx = triggerRegistry.findIndex((t) => t?.trigger === trigger && t.el === el)
  if (idx > -1) {
    triggerRegistry.splice(idx, 1)
    el.removeEventListener(trigger, triggerToggle)
    if (clean) {
      el.removeAttribute('aria-expanded')
      el.classList.remove('collapsed')
      el.classList.remove('not-collapsed')
    }
  }
}
```

**Purpose:** Removes trigger from registry and optionally cleans attributes

**Parameters:**

- `clean=true` - Remove aria-expanded and classes (default)
- `clean=false` - Preserve attributes (used during updates before re-registration)

#### checkVisibility(el: Element)

```typescript
const checkVisibility = (el: Element) => {
  el.setAttribute('aria-expanded', modelValue.value ? 'true' : 'false')
  el.classList.toggle('collapsed', !modelValue.value)
  el.classList.toggle('not-collapsed', !!modelValue.value)
}
```

**Purpose:** Updates ARIA attributes and classes based on current visibility state

**Called by:**

- `registerTrigger()` - Sets initial state
- `watch(modelValue)` - Updates all registered triggers on visibility change

#### Watch Mechanism

```typescript
watch(modelValue, () => {
  triggerRegistry.forEach((t) => {
    checkVisibility(t.el)
  })
})
```

**Purpose:** Ensures ALL registered triggers stay in sync when visibility changes

**Why it works for all visibility sources:**

- v-b-toggle click → updates modelValue → triggers watch
- v-model update → updates modelValue → triggers watch
- Slot function call → updates modelValue → triggers watch
- Direct method call → updates modelValue → triggers watch

## Design Benefits

### 1. Separation of Concerns

- **Directive:** Relationship mapping (aria-controls)
- **Composable:** State management (aria-expanded, classes)
- Clear boundaries between static and dynamic concerns

### 2. Consistency

- All show/hide components use the same system
- Predictable behavior across the library
- Single source of truth for ARIA state

### 3. Flexibility

- Supports multiple usage patterns
- Works with v-model, directives, slots, and programmatic control
- Opt-in system doesn't force users into one approach

### 4. Maintainability

- Centralized ARIA logic in composable
- Changes to ARIA behavior only require updating one place
- Clear responsibilities make debugging easier

### 5. Accessibility

- Automatic ARIA management reduces developer burden
- Ensures all registered triggers stay in sync
- Prevents common accessibility mistakes

### 6. Performance

- Efficient registry-based system
- Only updates registered triggers
- Single watch handles all visibility changes

## Common Patterns in Components

### BAccordionItem - Internal ARIA Management

```vue
<button
  class="accordion-button"
  :aria-expanded="toggleVisible ? 'true' : 'false'"
  :aria-controls="computedId"
  @click="slotToggle"
></button>
```

**Why manual?** The accordion button is internal to the component and has specific styling/behavior needs. Using the registry system would add unnecessary complexity.

### BDropdown - Split Button Handling

```vue
<BButton :aria-expanded="props.split ? undefined : showRef" aria-haspopup="menu">
</BButton>
<BButton v-if="props.split" :aria-expanded="showRef" aria-haspopup="menu"></BButton>
```

**Why manual?** Different buttons need different aria-expanded values based on split mode. Template-based management is clearer than programmatic registration.

## Testing Considerations

### Unit Tests

**v-b-toggle directive:**

- Sets `aria-controls` correctly
- Registers trigger with component
- Only removes `aria-controls` on unmount
- Does NOT manage `aria-expanded` or classes

**useShowHide composable:**

- `registerTrigger` sets initial `aria-expanded` and classes
- `unregisterTrigger(clean=true)` removes attributes
- `unregisterTrigger(clean=false)` preserves attributes
- `watch(modelValue)` updates all registered triggers

### Integration Tests

- Multiple triggers for single component
- v-model updates affect registered triggers
- Rapid mount/unmount cycles
- Mixed usage patterns (v-b-toggle + v-model)

## Migration Notes

### From Bootstrap Vue 2

Bootstrap Vue Next improves ARIA management through:

1. **Automatic registration system** - v-b-toggle handles ARIA automatically
2. **Multi-trigger support** - One component can have multiple registered triggers
3. **Consistent updates** - All triggers update regardless of visibility source
4. **Better separation** - Clear division between static (aria-controls) and dynamic (aria-expanded) attributes

### Best Practices

1. **Prefer v-b-toggle** for external triggers - Gets you automatic ARIA management
2. **Use v-model** when you need programmatic control - Works seamlessly with v-b-toggle
3. **Manual ARIA only when necessary** - When not using v-b-toggle and not registering triggers
4. **Don't mix approaches on same trigger** - Choose either automatic (v-b-toggle) or manual, not both
5. **Test with screen readers** - Verify ARIA attributes work correctly in practice

## Future Considerations

### Potential Enhancements

1. **Exposed registerTrigger API** - Allow programmatic registration without v-b-toggle
2. **ARIA live regions** - Enhanced announcements for state changes
3. **Keyboard navigation** - Arrow key support for grouped show/hide components
4. **Focus management** - Automatic focus handling on show/hide

### Non-Goals

- **Automatic registration of all buttons** - Opt-in system is intentional
- **ARIA on target elements** - Target elements (BCollapse, etc.) don't need aria-expanded
- **Complex ARIA patterns** - Keep it simple; focus on core show/hide accessibility

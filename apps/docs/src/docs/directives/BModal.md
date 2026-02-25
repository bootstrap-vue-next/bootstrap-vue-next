---
description: 'A light-weight directive for showing modals by ID. It provides a semantically clear way to trigger modals and automatically handles accessibility attributes and trigger registration'
---

> The `v-b-modal` directive provides a simple, declarative way to show `BModal` components. The directive automatically handles accessibility and provides a semantic alternative to the more general `v-b-toggle` directive.

<<< DEMO ./demo/BModalOverview.vue#template{vue-html}

## Overview

Things to know when using the modal directive:

- The directive works exclusively with `BModal` components
- Target modals are specified by their `id` attribute
- Multiple modals can be shown simultaneously
- The directive automatically manages ARIA accessibility attributes
- The trigger element receives `collapsed` and `not-collapsed` CSS classes based on modal state
- Disabled buttons will not trigger modal events
- `v-b-modal` is an alias for `v-b-toggle` - both work identically but `v-b-modal` is semantically clearer for modals

## Target Specification

The v-b-modal directive offers flexible ways to specify target modals:

### Using Modifiers

The most common approach is using modifiers, where each modifier represents a modal ID:

<<< DEMO ./demo/BModalModifier.vue#template{vue-html}

### Using Directive Argument

You can specify the target as a directive argument (supports Vue's dynamic arguments):

<<< DEMO ./demo/BModalArgument.vue#template{vue-html}

### Using Directive Value

The directive value can be a string ID or an array of IDs:

<<< DEMO ./demo/BModalValue.vue#template{vue-html}

### All Methods

Here are all the ways to specify targets:

<<< FRAGMENT ./demo/ModalDirectiveTargetSpecification.html#modifiers{vue-html}

<<< FRAGMENT ./demo/ModalDirectiveTargetSpecification.html#argument{vue-html}

<<< FRAGMENT ./demo/ModalDirectiveTargetSpecification.html#value{vue-html}

<<< FRAGMENT ./demo/ModalDirectiveTargetSpecification.html#href{vue-html}

<<< FRAGMENT ./demo/ModalDirectiveTargetSpecification.html#combined{vue-html}

## Multiple Modals

Show multiple modals simultaneously using any of these methods:

<<< DEMO ./demo/BModalMultiple.vue

## Using on Links

When the directive is applied to an `<a>` tag or `BLink`, the target can be specified via the `href` attribute:

<<< DEMO ./demo/BModalHref.vue#template{vue-html}

:::warning URL Navigation
Without `@click.prevent`, clicking the link will change the browser URL. Add `@click.prevent` to prevent this behavior while still showing the modal.
:::

## Conditional CSS Classes

The directive automatically adds CSS classes to the trigger element based on the modal's visibility state:

- `collapsed` - Added when the modal is hidden
- `not-collapsed` - Added when the modal is visible

You can use these classes to conditionally style the trigger:

```css
.collapsed .when-open {
  display: none;
}

.not-collapsed .when-closed {
  display: none;
}
```

## Disabled State

Disabled elements will not trigger modals:

```vue-html
<!-- This button will not trigger the modal when disabled -->
<BButton v-b-modal.my-modal :disabled="true">
  Disabled Button
</BButton>
```

## Comparison with Other Approaches

The v-b-modal directive is one of several ways to control modals. Choose the approach that best fits your use case:

<<< DEMO ./demo/BModalComparison.vue

### When to Use Each Approach

**Use `v-b-modal` directive when:**

- You need a simple, declarative way to trigger modals
- The trigger element is separate from modal state management
- You want automatic accessibility handling
- You're triggering modals from static elements (buttons, links)

**Use `v-model` when:**

- You need two-way binding with modal visibility
- Modal state is part of your component's reactive data
- You want to react to modal visibility changes
- You need to control the modal from multiple places

**Use template refs when:**

- You need programmatic control with explicit method calls
- You want access to the full component API (`show()`, `hide()`, `toggle()`)
- You're building wrapper components
- You need to call methods from lifecycle hooks or watchers

**Use `useModal` composable when:**

- You need to create modals dynamically
- You're building message boxes or confirmation dialogs
- You need to return values from modals (Promise-based API)
- You want to show modals without declaring them in the template

## Accessibility

The directive automatically handles accessibility by setting and managing ARIA attributes:

### What the Directive Manages

The `v-b-modal` directive sets:

- `aria-controls` - Lists the IDs of all target modals (static, set once)

### What the Modal Component Manages

The modal component manages:

- `aria-expanded` - Reflects current visibility state (`'true'` or `'false'`)

The directive itself handles the CSS classes (`collapsed`/`not-collapsed`) and click event handlers on the trigger element.

This separation of responsibilities ensures consistent accessibility across all show/hide components. For detailed information, see the [ARIA Visibility Architecture documentation](/docs/reference/accessibility#aria-trigger-registration-for-component-visibility).

### Best Practices

- Only use the directive on keyboard-focusable elements (buttons, links, form controls)
- Avoid applying to decorative elements like `<div>` or `<span>` (accessibility attributes will be added, but keyboard navigation won't work without additional setup)
- For elements that don't have a native role of `button` or `link`, `role="button"` and `tabindex="0"` are automatically applied

## Related Components

- [BModal Component](/docs/components/modal) - Full modal component documentation
- [BToggle Directive](/docs/directives/BToggle) - General purpose toggle directive for collapse, offcanvas, and modal

## See Also

- [v-b-toggle Directive](/docs/directives/BToggle) - The underlying directive (v-b-modal is an alias)
- [useModal Composable](/docs/composables/useModal) - For creating modals dynamically
- [Modal Component](/docs/components/modal) - Complete modal component documentation

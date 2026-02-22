---
description: 'A light-weight directive for toggling visibility state for collapses, offcanvas, and modals by ID. It automatically sets the aria-controls attribute and registers the trigger with the target component, which then manages aria-expanded and visual state'
---

> The `v-b-toggle` directive provides a simple, declarative way to toggle visibility of components like `BCollapse`, `BOffcanvas`, and `BModal`. The directive automatically handles accessibility and can target multiple components at once.

<<< DEMO ./demo/BToggleOverview.vue#template{vue-html}

## Overview

Things to know when using the toggle directive:

- The directive works with `BCollapse`, `BOffcanvas`, and `BModal` components
- Target components are specified by their `id` attribute
- Multiple targets can be toggled simultaneously
- The directive automatically manages ARIA accessibility attributes
- The trigger element receives `collapsed` and `not-collapsed` CSS classes based on target state
- Disabled buttons will not trigger toggle events

## Target Specification

The v-b-toggle directive offers flexible ways to specify target components:

### Using Modifiers

The most common approach is using modifiers, where each modifier represents a target ID:

<<< DEMO ./demo/BToggleModifier.vue#template{vue-html}

For multiple targets, chain multiple modifiers:

<<< FRAGMENT ./demo/ToggleDirectiveTargetSpecification.html#modifiers{vue-html}

### Using Directive Argument

You can specify the target as a directive argument (supports Vue's dynamic arguments):

<<< DEMO ./demo/BToggleArgument.vue#template{vue-html}

### Using Directive Value

The directive value can be a string ID or an array of IDs:

<<< DEMO ./demo/BToggleValue.vue#template{vue-html}

### All Methods

Here are all the ways to specify targets:

<<< FRAGMENT ./demo/ToggleDirectiveTargetSpecification.html#modifiers{vue-html}

<<< FRAGMENT ./demo/ToggleDirectiveTargetSpecification.html#argument{vue-html}

<<< FRAGMENT ./demo/ToggleDirectiveTargetSpecification.html#value{vue-html}

<<< FRAGMENT ./demo/ToggleDirectiveTargetSpecification.html#href{vue-html}

<<< FRAGMENT ./demo/ToggleDirectiveTargetSpecification.html#combined{vue-html}

## Multiple Targets

Toggle multiple components simultaneously using any of these methods:

<<< DEMO ./demo/BToggleMultiple.vue

## Using on Links

When the directive is applied to an `<a>` tag or `BLink`, the target can be specified via the `href` attribute:

<<< DEMO ./demo/BToggleHref.vue#template{vue-html}

:::warning URL Navigation
Without `@click.prevent`, clicking the link will change the browser URL and may scroll the page. Add `@click.prevent` to prevent this behavior.
:::

## Conditional CSS Classes

The directive automatically adds CSS classes to the trigger element based on the target's visibility state:

- `collapsed` - Added when the target is hidden
- `not-collapsed` - Added when the target is visible

You can use these classes to conditionally show/hide content:

<<< DEMO ./demo/BToggleConditionalCSS.vue

The CSS pattern for conditional display:

<<< FRAGMENT ./demo/ToggleDirectiveConditionalCSS.html#css{css}

## Preventing Toggle

Set the `disabled` attribute on the trigger element to prevent it from toggling the target:

<<< DEMO ./demo/BToggleDisabled.vue

This works with `<button>`, `BButton`, `BLink`, and any element that supports the `disabled` attribute.

## Compatible Components

The v-b-toggle directive works with these components:

### BCollapse

Toggle collapsible content. See the [modifier example above](#using-modifiers) for a demonstration.

For more details, see the [BCollapse documentation](/docs/components/collapse#v-b-toggle-directive).

### BOffcanvas

Toggle off-canvas sidebars:

<<< DEMO ./demo/BToggleOffcanvas.vue

See the [BOffcanvas documentation](/docs/components/offcanvas#v-b-toggle-directive) for more details.

### BModal

The v-b-toggle directive also works with modals. However, for modals, the dedicated `v-b-modal` directive is recommended as it's an alias specifically designed for modal use cases.

See the [BModal documentation](/docs/components/modal) for more details.

## Comparison with Programmatic Control

The v-b-toggle directive is ideal for simple, declarative toggling. For programmatic control, use the `useToggle` composable or `v-model`:

<<< DEMO ./demo/BToggleComparison.vue

| Approach     | Use When                                 | Pros                      | Cons                           |
| ------------ | ---------------------------------------- | ------------------------- | ------------------------------ |
| `v-b-toggle` | Simple click-to-toggle                   | Declarative, minimal code | Click-only, no state access    |
| `useToggle`  | Need programmatic control + state access | Full API, reactive state  | More code                      |
| `v-model`    | Direct reactive binding                  | Simple, two-way binding   | Manual event handling required |

## Accessibility

The directive automatically handles accessibility by setting and managing ARIA attributes:

### What the Directive Manages

The `v-b-toggle` directive sets:

- `aria-controls` - Lists the IDs of all target components (static, set once)

### What the Target Component Manages

The target component (BCollapse, BOffcanvas, etc.) manages:

- `aria-expanded` - Reflects current visibility state (`'true'` or `'false'`)
- `collapsed` and `not-collapsed` CSS classes
- Click event handlers

This separation of responsibilities ensures consistent accessibility across all show/hide components. For detailed information, see the [ARIA Visibility Architecture documentation](/docs/reference/accessibility#aria-trigger-registration-for-component-visibility).

### Best Practices

- Only use the directive on keyboard-focusable elements (buttons, links, form controls)
- Avoid applying to decorative elements like `<div>` or `<span>` (accessibility attributes will be added, but keyboard navigation won't work without additional setup)
- For elements that don't have a native role of `button` or `link`, `role="button"` and `tabindex="0"` are automatically applied

### Multiple Target Caveats

When toggling multiple targets, the `aria-expanded` attribute on the trigger reflects the state based on the **first** target component. If individual targets have independent visibility controls (via `v-model`, other toggle buttons, or programmatic control), the `aria-expanded` value may not accurately reflect all targets' states.

For better accessibility with multiple independent targets, use separate toggle buttons for each target.

## See Also

- [BCollapse component](/docs/components/collapse) - Collapsible content with accordion support
- [BOffcanvas component](/docs/components/offcanvas) - Off-canvas sidebars
- [BModal component](/docs/components/modal) - Modal dialogs
- [useToggle composable](/docs/composables/useToggle) - Programmatic visibility control
- [ARIA Visibility Architecture](/docs/reference/accessibility#aria-trigger-registration-for-component-visibility) - Technical details on accessibility implementation

---
description: 'A light-weight directive for toggling visibility state for collapses and sidebars by ID. It automatically sets the aria-controls attribute and registers the trigger with the target component, which then manages aria-expanded and visual state'
---

# v-b-toggle Directive

The `v-b-toggle` directive provides an easy way to toggle visibility of components like `BCollapse`, `BOffcanvas`, and `BModal`.

## Accessibility

The directive automatically handles accessibility by:

1. Setting the `aria-controls` attribute to the ID(s) of the target component(s)
2. Registering the trigger element with the target component
3. The target component then manages:
   - The `aria-expanded` attribute (set to `'true'` or `'false'` based on visibility)
   - The `collapsed` and `not-collapsed` CSS classes
   - Event handlers for the click event

This separation ensures that the directive handles the initial connection while each component manages its own state attributes, providing consistent behavior across all show/hide components.

## Usage

See the documentation for individual components:

- [BCollapse](/docs/components/collapse#v-b-toggle-directive)
- [BOffcanvas](/docs/components/offcanvas#v-b-toggle-directive)
- [BModal](/docs/components/modal)

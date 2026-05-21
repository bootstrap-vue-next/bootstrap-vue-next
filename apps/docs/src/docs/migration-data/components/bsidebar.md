---
id: bsidebar
title: BSidebar to BOffcanvas Migration
category: components
components:
  - BSidebar
  - BOffcanvas
match:
  - BSidebar
  - BOffcanvas
  - ":right=\"true\""
  - ":right=\"false\""
  - aria-label
  - aria-labelby
  - bg-variant
  - text-variant
  - body-class
  - "body-class=\"bg-dark text-light\""
  - header-class
  - no-slide
  - no-animation
  - no-enforce-focus
  - no-trap
  - no-close-on-route-change
tags:
  - migration
  - components
  - bsidebar
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
replacement:
  <BSidebar>: <BOffcanvas>
  no-slide: no-animation
  no-enforce-focus: no-trap
manualReviewRequired: true
deprecated:
  - <BSidebar>
  - no-slide
  - no-enforce-focus
confidence: high
---

# BSidebar to BOffcanvas Migration

## Summary

Migration notes for BSidebar from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BSidebar
- BOffcanvas

## Breaking Change

`BSidebar` has been renamed to `BOffcanvas` to align with the name chosen by the
[Bootstrap 5](https://getbootstrap.com/docs/5.3/components/offcanvas) team for this functionality.

### Renamed Component

- `<BSidebar>` → `<BOffcanvas>`

### Placement Changes

The `right` prop has been replaced with a more flexible `placement` prop:

- `right` prop is **deprecated**
- Use `placement="end"` instead of `:right="true"`
- Use `placement="start"` instead of `:right="false"` (or omit, as `start` is the default)
- New placements available: `placement="top"` and `placement="bottom"`

### aria-\* support

`aria-label` and `aria-labelby` aren't explicitly defined as props, but setting them
on `<BOffcanvas>` will bind correctly to the main `<div>`.

### Variant Props Deprecated

The `bg-variant` and `text-variant` props have been **deprecated**. Bootstrap 5 offcanvas components don't support these props directly.

Instead, use utility classes:

- Apply background classes via `body-class` prop: `body-class="bg-dark text-light"`
- Apply classes to content wrapper elements within the default slot
- Use the `header-class` prop for header styling

### Animation Props

The `no-slide` prop has been renamed to `no-animation` for consistency with other components.

- `no-slide` → `no-animation`

### Focus Management

The `no-enforce-focus` prop has been renamed to `no-trap` for consistency with modal and other components.

- `no-enforce-focus` → `no-trap`

### Route Change Behavior

The `no-close-on-route-change` prop has been **removed**. Offcanvas components no longer automatically close on route changes by default. If you need this behavior, you'll need to implement it manually by watching the route and calling the `hide()` method.

### Z-Index Prop Removed

The `z-index` prop has been **removed**. Use CSS to customize z-index if needed.

### Backdrop

The `backdrop` prop has been deprecated. Backdrop is enabled by default. Use the new `no-backdrop` prop to turn it off.

The `backdrop-variant` prop has been **removed**. Bootstrap 5 offcanvas backdrops use a standard dark backdrop.

### Class Props

The `sidebar-class` prop has been **removed**. Use the standard `class` prop instead to apply classes directly to the offcanvas element.

### Tag

The `tag` prop has been deprecated.

### Header and Footer

The `header-tag` and `footer-tag` props have been deprecated. Use the `header` and `footer` slots to override header and footer behavior.

The `close-label` prop been renamed to `header-close-label` for consistency

### Events

The `change` event is no longer emitted. Use `update:model-value` instead for v-model compatibility, or use the `show`/`hide`/`shown`/`hidden` events to track state changes.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- None

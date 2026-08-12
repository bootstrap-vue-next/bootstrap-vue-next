---
id: btoast
title: BToast Migration
description: 'Migration notes for BToast from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BToast
match:
  - BToast
  - $bvToast
  - this.$bvToast.show(options)
  - useToast
  - this.$bvToast.hide(target)
  - .hide()
  - this.$bvToast.hideAll()
  - <b-toaster>
  - model-value
  - no-auto-hide
  - auto-hide-delay
  - append-toast
  - b-toaster-*
  - progress-props
  - no-progress
  - show-on-pause
tags:
  - migration
  - components
  - btoast
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
replacement:
  visible: model-value
  toast-title: title
manualReviewRequired: true
deprecated:
  - visible
  - toast-title
  - toaster
related:
  - show-hide
confidence: high
---

# BToast Migration

## Summary

Migration notes for BToast from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BToast

## Breaking Change

### Global Toast Management System Changes

**`$bvToast` instance methods are deprecated:**

- `this.$bvToast.show(options)` → Use `useToast` composable with `create()` method
- `this.$bvToast.hide(target)` → Use `useToast` composable or template refs with `.hide()`
- `this.$bvToast.hideAll()` → Use `useToast` composable

**Named toaster system is deprecated:**

- `<b-toaster>` targets → Use Vue's `Teleport` component or `useToast` positioning
- Toaster positioning CSS → Use CSS positioning on individual toasts or toast containers

**Alternative approaches:**

Please see [useToast](/docs/composables/useToast) for the modern method of programmatically creating and managing toasts.

### Props Changes

**Renamed props:**

- `visible` → `model-value` - Controls both visibility and auto-dismiss timing (replaces separate `visible` model)
- `no-auto-hide` → Set `model-value` to `false` or `true` (boolean) instead of using auto-hide duration
- `auto-hide-delay` → Set `model-value` to number of milliseconds for auto-dismiss duration

**Removed props (not implemented in BootstrapVueNext):**

- `href` and `to` - Use `useToast` with BLink props or see [BLink Integration](/docs/components/toast#blink-integration) in the toast documentation
- `toaster` - Use `Teleport` or `useToast` positioning instead
- `append-toast` - Available on `useToast` instead
- `b-toaster-*` related props - Use modern positioning with `Teleport`
- `static` - BToast renders in place by default (no teleporting behavior)

**New props in BootstrapVueNext:**

- `progress-props` - Configure built-in progress bar for timed toasts
- `no-progress` - Hide progress bar on timed toasts
- `show-on-pause` - Control visibility when countdown is paused
- `interval` - Control countdown timer update frequency (default: `'requestAnimationFrame'`)
- `solid` - Disable toast transparency (same as BootstrapVue)

### Auto-dismiss Behavior Changes

**BootstrapVue:** Used separate props for auto-hide configuration:

<<< FRAGMENT ../../demo/ToastBootstrapVue.vue#snippet{vue-html}

**BootstrapVueNext:** Uses `model-value` for both visibility and auto-dismiss:

<<< FRAGMENT ../../demo/ToastBootstrapVueNext.vue#snippet{vue-html}

### Event System Changes

**Event naming changes:**

- No `$root` event system - toasts are managed through composables or direct component references
- All events now use the standardized show/hide event lifecycle

**New events:** BootstrapVueNext adds several events:

- `close-countdown` - Emitted during countdown with remaining milliseconds
- `update:model-value` - Standard v-model event for visibility/duration changes
- Standard show/hide lifecycle events: `show`, `shown`, `hide`, `hidden`, `show-prevented`, `hide-prevented`, `toggle`, `toggle-prevented`

### Slots Changes

**Renamed slots:**

- `toast-title` → `title` - Toast header title content

**Available slots:**

- `default` - Toast body content (enhanced with slot scope data)
- `title` - Toast header title content (was `toast-title` in BootstrapVue)
- `close` - Custom close button content (new in BootstrapVueNext)

**Enhanced slot scope:** All slots now receive scope data with control functions:

- `id` - Toast component ID
- `show()` - Function to show the toast
- `hide()` - Function to hide the toast
- `toggle()` - Function to toggle visibility
- `visible` - Current visibility state
- `active` - Whether countdown timer is active

### Accessibility Improvements

**Enhanced ARIA support:**

- `isStatus` prop correctly toggles between `role="alert"` (default) and `role="status"`
- Corresponding `aria-live` values: `"assertive"` (default) and `"polite"`
- `aria-atomic="true"` automatically applied for better screen reader announcements
- `tabindex="0"` for keyboard accessibility

See [Show and Hide](/docs/migration-data/patterns/show-hide) shared properties.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- [show-hide](/docs/migration-data/patterns/show-hide)

---
id: btabs
title: BTabs Migration
description: 'Migration notes for BTabs from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BTabs
match:
  - BTabs
  - v-model
  - "v-model:index"
  - activate-tab
  - <BTabs>
tags:
  - migration
  - components
  - btabs
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BTabs Migration

## Summary

Migration notes for BTabs from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BTabs

## Breaking Change

`align` prop now takes values from [`AlignmentJustifyContent`](/docs/types#alignment): `start`, `center`, `end`, `between`, `around`, and `evenly`

The primary `v-model` now reflects the `id` of the currently selected tag. Use `v-model:index` to synchronize to
the current tab index. See [programmatically activating and deactivating tabs](/docs/components/tabs#programmatically-activating-and-deactivating-tabs) for details.

The `changed` event on `BTabs` is deprecated.

`activate-tab` now emits a single payload object (`{newTabId, prevTabId, newTabIndex, prevTabIndex, event}`)
instead of positional arguments.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

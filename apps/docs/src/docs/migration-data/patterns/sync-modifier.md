---
id: sync-modifier
title: Sync Modifier Migration
category: patterns
components:
  - BFormCheckbox
match:
  - .sync
  - v-bind.sync
  - indeterminate.sync
  - v-model
tags:
  - migration
  - patterns
  - sync
  - v-model
safeRewrite: true
migrationType: pattern-migration
introducedIn: bootstrap-vue-next
replacement:
  "*.sync": "v-model:<prop>"
manualReviewRequired: false
deprecated:
  - "*.sync"
related:
  - show-hide
confidence: high
---

# Sync Modifier Migration

## Summary

Replace BootstrapVue `.sync` bindings with Vue 3 model bindings in BootstrapVueNext.

## Affected APIs

- BFormCheckbox

## Breaking Change

A number of components in `bootstrap-vue` use `v-bind`'s `.sync` modifier. This modifier has been replaced by properties
on the model (generally named models).

For instance, in order to two-way bind to the `indeterminate` property in `BFormCheckBox` you `v-bind` to the model
named `indeterminate` rather than adding the sync modifier to the `indeterminate` property:

<<< FRAGMENT ../../demo/SyncBefore.vue#template{vue-html}

becomes

<<< FRAGMENT ../../demo/SyncAfter.vue#template{vue-html}

See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
for more info.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [show-hide](/docs/migration-data/patterns/show-hide)

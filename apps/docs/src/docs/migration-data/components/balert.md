---
id: balert
title: BAlert Migration
description: 'Migration notes for BAlert from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BAlert
match:
  - BAlert
  - bootstrap-vue
  - v-model
  - model-value
  - <BAlert>
tags:
  - migration
  - components
  - balert
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - show-hide
confidence: high
---

# BAlert Migration

## Summary

Migration notes for BAlert from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BAlert

## Breaking Change

As in `bootstrap-vue`, a simple `BAlert` is not visible by default. However, the means of showing the alert are different.

The primary way to control alert visibility is via `v-model` (or `model-value` in props). In practice this means the old `show.sync` pattern maps cleanly to `v-model`, while the `show` and `visible` props remain available for controlling initial visibility. See [Show and Hide](/docs/migration-data/patterns/show-hide) shared properties for details.

<<< FRAGMENT ../../demo/AlertBefore.vue#template{vue-html}

becomes

<<< FRAGMENT ../../demo/AlertAfter.vue#template{vue-html}

For consistency with other component properties, slots, and events, BootstrapVueNext uses the term `close` where BootstrapVue used `dismiss`. The mappings are mechanical: `dismissed` becomes `closed`, the `dismiss` slot becomes the `close` slot, and dismissible alert flows move cleanly to the new close naming.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [show-hide](/docs/migration-data/patterns/show-hide)

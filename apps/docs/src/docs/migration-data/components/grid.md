---
id: grid
title: Grid Migration
description: 'Migration notes for Grid from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BCol
match:
  - Grid
tags:
  - migration
  - components
  - grid
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# Grid Migration

## Summary

Migration notes for Grid from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BCol

## Breaking Change

BootstrapVueNext doesn't currently implement the ability to define `breakpoint` names.

See the [Bootstrap 5 migration guide](https://getbootstrap.com/docs/5.3/migration/#grid-updates), in particular
values for `order` on `<BCol>` only provides support for 1 - 5.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

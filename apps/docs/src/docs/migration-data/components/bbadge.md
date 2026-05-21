---
id: bbadge
title: BBadge Migration
description: 'Migration notes for BBadge from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BBadge
match:
  - BBadge
  - <BBadge>
tags:
  - migration
  - components
  - bbadge
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BBadge Migration

## Summary

Migration notes for BBadge from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BBadge

## Breaking Change

Badges no longer have the automatic focus or hover styles that Bootstrap 4 applied to linked badges. In practice this is a straightforward cleanup: the old behavior can simply be dropped, and custom classes can be added if you still want bespoke link styling. See the
[Bootstrap migration guide](https://getbootstrap.com/docs/5.3/migration/#badges) for more information.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

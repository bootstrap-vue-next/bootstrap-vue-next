---
id: boverlay
title: BOverlay Migration
description: 'Migration notes for BOverlay from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BOverlay
match:
  - BOverlay
  - <BOverlay>
tags:
  - migration
  - components
  - boverlay
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - rounded-radius-element
confidence: high
---

# BOverlay Migration

## Summary

Migration notes for BOverlay from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BOverlay

## Breaking Change

See the [Rounding](/docs/migration-data/props/rounded-radius-element) section.

prop `blur` does not work when the prop `bgColor` is defined. It also will not work if the prop `variant` is anything other than `white` or `transparent`. This overcomes a browser change.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [rounded-radius-element](/docs/migration-data/props/rounded-radius-element)

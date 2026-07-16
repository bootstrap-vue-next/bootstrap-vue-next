---
id: bimglazy
title: BImgLazy Migration
description: 'Migration notes for BImgLazy from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BImgLazy
  - BImg
match:
  - BImgLazy
  - <BImgLazy>
tags:
  - migration
  - components
  - bimglazy
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - bimg
confidence: high
---

# BImgLazy Migration

## Summary

Migration notes for BImgLazy from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BImgLazy
- BImg

## Breaking Change

This functionality has been replaced by lazy loading on `<BImg>` see [BImg](/docs/migration-data/components/bimg) for details.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [bimg](/docs/migration-data/components/bimg)

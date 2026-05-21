---
id: bcardimglazy
title: BCardImgLazy Migration
description: 'Migration notes for BCardImgLazy from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BCardImgLazy
  - BImg
match:
  - BCardImgLazy
  - <BCardImgLazy>
tags:
  - migration
  - components
  - bcardimglazy
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - bimg
confidence: high
---

# BCardImgLazy Migration

## Summary

Migration notes for BCardImgLazy from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BCardImgLazy
- BImg

## Breaking Change

This functionality has been replaced by lazy loading on `<BImg>`. In most cases this is a direct component swap plus the `lazy`/native loading configuration described in [BImg notes](/docs/migration-data/components/bimg).

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [bimg](/docs/migration-data/components/bimg)

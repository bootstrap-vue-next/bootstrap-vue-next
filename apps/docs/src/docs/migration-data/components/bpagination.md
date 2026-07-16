---
id: bpagination
title: BPagination Migration
description: 'Migration notes for BPagination from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BPagination
match:
  - BPagination
  - <BPagination>
tags:
  - migration
  - components
  - bpagination
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - show-hide
confidence: high
---

# BPagination Migration

## Summary

Migration notes for BPagination from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BPagination

## Breaking Change

See [Show and Hide](/docs/migration-data/patterns/show-hide) shared properties.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [show-hide](/docs/migration-data/patterns/show-hide)

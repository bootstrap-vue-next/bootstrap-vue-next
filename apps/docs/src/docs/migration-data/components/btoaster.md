---
id: btoaster
title: BToaster Migration
description: 'Migration notes for BToaster from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BToaster
  - BApp
match:
  - BToaster
  - useToast
  - BApp
  - <BToaster>
tags:
  - migration
  - components
  - btoaster
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BToaster Migration

## Summary

Migration notes for BToaster from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BToaster
- BApp

## Breaking Change

The `BToaster` component has been deprecated. Its functionality has been replaced by the
[`useToast`](/docs/composables/useToast) composable working in concert with the
[`BApp`](/docs/components/app) component. In practice this is usually a straightforward migration: move toast orchestration to `useToast` and make sure `BApp` exists at the root.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

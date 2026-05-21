---
id: bformspinbutton
title: BFormSpinButton Migration
description: 'Migration notes for BFormSpinButton from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BFormSpinButton
match:
  - BFormSpinButton
tags:
  - migration
  - components
  - bformspinbutton
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BFormSpinButton Migration

## Summary

Migration notes for BFormSpinButton from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BFormSpinButton

## Breaking Change

See [BForm Components](/docs/components/form-spinbutton)
The locale property in BootstrapVueNext only allows for a single locale, while BSV allows for an array of locales. If this is
a limitation that affect your scenario, please [file an issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues) with an explanation of the expected behavior.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

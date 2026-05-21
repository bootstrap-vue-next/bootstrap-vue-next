---
id: bformcheckbox
title: BFormCheckbox Migration
category: components
components:
  - BFormCheckbox
match:
  - BFormCheckbox
  - v-model
  - model-value
  - update:model-value
  - <BFormCheckbox>
tags:
  - migration
  - components
  - bformcheckbox
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BFormCheckbox Migration

## Summary

`BFormCheckbox` mostly follows the shared Vue 3 form-model migration pattern.

## Affected APIs

- BFormCheckbox

## Breaking Change

`BFormCheckbox` follows the shared BootstrapVueNext form input model changes.

BootstrapVue's `value`/`input`/`change` patterns move to Vue 3's `model-value` and `update:model-value`, which makes this migration mostly mechanical. See [BForm Components](/docs/components/form-checkbox) for the component reference.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- This entry intentionally stays focused on the shared form-model migration rather than inventing component-specific breaking changes that are not present.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

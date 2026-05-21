---
id: bforminput
title: BFormInput Migration
category: components
components:
  - BFormInput
match:
  - BFormInput
  - "@wheel.prevent"
  - <BFormInput>
tags:
  - migration
  - components
  - bforminput
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BFormInput Migration

## Summary

Migration notes for BFormInput from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BFormInput

## Breaking Change

Access to the native `input` element is implemented differently due to changes in how Vue 3
handles references. See the [BFormInput documentation](/docs/components/form-input#exposed-input-element) for more details.

Disabling mousewheel events on numeric inputs can be achieved using Vue's native event modifier: `@wheel.prevent`. See the [BFormInput documentation](/docs/components/form-input#disabling-mousewheel-events-on-numeric-like-inputs) for usage examples.

`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers
[`trim`, `lazy`, and `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
They work as documented in vue.js, so there is no longer a need for the properties.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

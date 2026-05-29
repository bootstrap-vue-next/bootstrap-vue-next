---
id: native-events
title: Native Event Documentation Migration
description: 'BootstrapVueNext no longer documents bubbled native DOM events as component API events, even though native Vue event bubbling may still make those events observable at the component boundary.'
category: patterns
components: []
match:
  - native events
  - click
  - bubbled events
tags:
  - migration
  - patterns
  - events
safeRewrite: false
migrationType: pattern-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# Native Event Documentation Migration

## Summary

BootstrapVueNext no longer documents bubbled native DOM events as component API events, even though native Vue event bubbling may still make those events observable at the component boundary.

## Affected APIs

- None explicitly listed

## Breaking Change

BootstrapVue sometimes listed native events such as `click` that bubbled from the underlying HTML element. BootstrapVueNext does not capture and re-document those events as part of the component API because we want the documented event list to stay consistent with the code. Depending on the component, native Vue event bubbling may still allow the event to be observed by consumers.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- None

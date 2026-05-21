---
id: show-hide
title: Show and Hide Prop Migration
description: 'BootstrapVueNext standardizes visibility control around `v-model` and `no*`-prefixed rendering props.'
category: patterns
components:
  - BCollapse
  - BModal
  - BPlaceholder
  - BToast
match:
  - visible
  - show
  - hide-
  - no-
  - skipAnimation
  - noAnimation
  - v-model
tags:
  - migration
  - visibility
  - props
  - events
safeRewrite: false
migrationType: pattern-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# Show and Hide Prop Migration

## Summary

BootstrapVueNext standardizes visibility control around `v-model` and `no*`-prefixed rendering props.

## Affected APIs

- BCollapse
- BModal
- BPlaceholder
- BToast

## Breaking Change

We have made an effort to standardize the names and behaviors of props that are related to the showing
and hiding of components and sub-components.

The primary reactive way to control the visibility of a component is generally by use of the `v-model` rather
than `visible` as in `BCollapse`, `BModal`, `BToast`. Note that `show` and `visible` are still supported for
specifying the initial visibility of these components.

Rather than using `hide` as a prefix to specify that you don't want a sub-component to be rendered, we've moved to using `no`
as the prefix. For instant in `BPlaceholder`, `hideHeader` becomes `noHeader`. Similarly we use the 'no' prefix in place
of 'skip' in places like `BCollapse` where `skipAnimation` becomes `noAnimation`.

The properties and components that are affected by this change are shown in the following table:

<ShowHideProps/>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- None

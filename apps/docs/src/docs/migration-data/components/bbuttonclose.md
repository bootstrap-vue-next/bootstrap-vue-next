---
id: bbuttonclose
title: BButtonClose Migration
description: 'Migration notes for BButtonClose from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BButtonClose
  - BCloseButton
  - BLink
match:
  - BButtonClose
  - BCloseButton
  - text-variant
  - <BButtonClose>
tags:
  - migration
  - components
  - bbuttonclose
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BButtonClose Migration

## Summary

Migration notes for BButtonClose from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BButtonClose
- BCloseButton
- BLink

## Breaking Change

`BButtonClose` has been renamed to `BCloseButton` for consistency with [Bootstrap](https://getbootstrap.com/docs/5.3/components/close-button/)

<DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED" what="`content` and `text-variant` props on `BButtonClose`" :plural="true">
  Bootstrap 5 moved to using an embedded svg for the close icon, so the rename to `BCloseButton` plus prop cleanup is largely mechanical.
  See <BLink href="https://getbootstrap.com/docs/5.3/migration/#close-button-1">their migration guide</BLink> for details.
</DeprecatedFeature>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

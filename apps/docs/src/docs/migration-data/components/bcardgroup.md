---
id: bcardgroup
title: BCardGroup Migration
description: 'Migration notes for BCardGroup from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BCardGroup
match:
  - BCardGroup
  - .card-deck
  - .card-columns
  - .row-cols-*
  - <BCardGroup>
tags:
  - migration
  - components
  - bcardgroup
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BCardGroup Migration

## Summary

Migration notes for BCardGroup from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BCardGroup

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED" what="card deck and card columns props">
  The `deck` and `columns` props output CSS classes (`.card-deck` and `.card-columns`) that were removed from Bootstrap 5.
  Use Bootstrap's grid system with `.row-cols-*` classes for responsive card layouts instead, which makes this a straightforward class-based rewrite.
  Only the default card group (without `deck` or `columns` props) works with Bootstrap 5 and is responsive.
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

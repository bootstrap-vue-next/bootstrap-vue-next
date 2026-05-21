---
id: bpaginationnav
title: BPaginationNav Migration
category: components
components:
  - BPaginationNav
match:
  - BPaginationNav
  - <BPaginationNav>
tags:
  - migration
  - components
  - bpaginationnav
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# BPaginationNav Migration

## Summary

Migration notes for BPaginationNav from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BPaginationNav

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="`BPaginationNav` component">
  This component will not be implemented for v1 due to insufficient demand.
  It can be added post-v1 without breaking changes if needed.
</DeprecatedFeature>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- None

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

---
id: bembed
title: BEmbed Migration
description: 'Migration notes for BEmbed from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BEmbed
match:
  - BEmbed
  - <BEmbed>
tags:
  - migration
  - components
  - bembed
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# BEmbed Migration

## Summary

Migration notes for BEmbed from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BEmbed

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="`BEmbed` component">
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

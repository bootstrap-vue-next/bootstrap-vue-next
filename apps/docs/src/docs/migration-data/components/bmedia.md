---
id: bmedia
title: BMedia Migration
category: components
components:
  - BMedia
  - BLink
match:
  - BMedia
  - <BMedia>
tags:
  - migration
  - components
  - bmedia
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BMedia Migration

## Summary

Migration notes for BMedia from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BMedia
- BLink

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="`BMedia` component">
  This component will not be implemented for v1 due to insufficient demand.
  Bootstrap has deprecated their Media object, but it can be replicated using flex utility classes.
  See their <BLink href="https://getbootstrap.com/docs/5.3/utilities/flex/#media-object">documentation</BLink> for details.
</DeprecatedFeature>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

<script setup lang="ts">
import {DeprecationReason} from '../../types/deprecation'
</script>

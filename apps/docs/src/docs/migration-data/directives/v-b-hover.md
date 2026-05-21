---
id: v-b-hover
title: v-b-hover Migration
category: directives
components:
  - BLink
match:
  - Hover
  - v-b-hover
  - useElementHover()
tags:
  - migration
  - directives
  - hover
safeRewrite: true
migrationType: directive-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# v-b-hover Migration

## Summary

Migration notes for v-b-hover from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BLink

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="`v-b-hover` directive">
  This directive will not be implemented. Consider using VueUse's
  <BLink href="https://vueuse.org/core/useElementHover/">`useElementHover()`</BLink>
  composable as a modern alternative. If your project does not already use VueUse, include that dependency as part of the migration.
</DeprecatedFeature>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical, but review the result when surrounding behavior or adjacent props may affect the final markup.

## Related Migrations

- None

<script setup lang="ts">
import {DeprecationReason} from '../../types/deprecation'
</script>

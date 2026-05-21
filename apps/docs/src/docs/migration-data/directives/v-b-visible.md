---
id: v-b-visible
title: v-b-visible Migration
category: directives
components:
  - BLink
match:
  - Visible
  - v-b-visible
  - useElementVisibility()
tags:
  - migration
  - directives
  - visible
safeRewrite: true
migrationType: directive-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# v-b-visible Migration

## Summary

Migration notes for v-b-visible from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BLink

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" what="`v-b-visible` directive">
  This directive will not be implemented. Use VueUse's
  <BLink href="https://vueuse.org/core/useElementVisibility/">`useElementVisibility()`</BLink>
  composable instead, which provides the same functionality with better performance. If your project does not already use VueUse, include that dependency as part of the migration.
</DeprecatedFeature>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical, but review the result when surrounding behavior or adjacent props may affect the final markup.

## Related Migrations

- None

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

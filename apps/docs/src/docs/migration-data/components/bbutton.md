---
id: bbutton
title: BButton Migration
category: components
components:
  - BButton
  - BLink
match:
  - BButton
  - <BButton>
tags:
  - migration
  - components
  - bbutton
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BButton Migration

## Summary

Migration notes for BButton from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BButton
- BLink

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED" what="`block` prop on `BButton`">
  See our <BLink href="/docs/components/button#block-level-buttons">`BButton` documentation</BLink>
  and <BLink href="https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons">Bootstrap's documentation</BLink> for
  details on creating block-level buttons with utility classes such as `d-grid` or width utilities.
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

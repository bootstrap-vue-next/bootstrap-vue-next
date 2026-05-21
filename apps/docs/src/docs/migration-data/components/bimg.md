---
id: bimg
title: BImg Migration
category: components
components:
  - BImg
  - BImgLazy
  - BCardImgLazy
match:
  - BImg
  - BImgLazy
  - BCardImgLazy
  - <BImg>
tags:
  - migration
  - components
  - bimg
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - rounded-radius-element
confidence: high
---

# BImg Migration

## Summary

Migration notes for BImg from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BImg
- BImgLazy
- BCardImgLazy

## Breaking Change

See the [Rounding](/docs/migration-data/props/rounded-radius-element) section.

Lazy loading is now achieved through the native `loading` attribute rather than a separate component.

<DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_NATIVE" what="`BImgLazy` and `BCardImgLazy` components" :plural="true">
  Use the native <code>loading="lazy"</code> attribute on <code>&lt;BImg&gt;</code> and <code>&lt;BCardImg&gt;</code> instead.
</DeprecatedFeature>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [rounded-radius-element](/docs/migration-data/props/rounded-radius-element)

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

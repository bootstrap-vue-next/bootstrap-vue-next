---
id: bformrating
title: BFormRating Migration
category: components
components:
  - BFormRating
  - BLink
match:
  - BFormRating
  - v-model
  - <BFormRating>
tags:
  - migration
  - components
  - bformrating
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# BFormRating Migration

## Summary

Migration notes for BFormRating from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BFormRating
- BLink

## Breaking Change

`BFormRating` is now available in BootstrapVueNext, preserving most of the original BootstrapVue functionality under Vue 3's v-model conventions.
See the [Vue 3 migration guide](https://v3-migration.vuejs.org/breaking-changes/v-model.html) for details on the new `v-model` syntax.

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="the internationalization feature">
  The `locale` prop for localized display and RTL support will not be implemented for v1 due to insufficient demand.
</DeprecatedFeature>

### Icon System Changes

<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" what="Icon-related props on form components" :plural="true">
  The following icon-related props from BootstrapVue have been deprecated:
  <ul>
    <li><code>icon-empty</code>: For specifying empty star icon</li>
    <li><code>icon-half</code>: For specifying half-filled star icon</li>
    <li><code>icon-full</code>: For specifying filled star icon</li>
    <li><code>icon-clear</code>: For specifying clear button icon</li>
  </ul>
  BootstrapVueNext does not include a built-in icon library. See
  <BLink href="/docs/icons">Icons</BLink> for guidance on using unplugin-icons as the recommended
  modern solution with automatic tree-shaking.
</DeprecatedFeature>

Instead, BootstrapVueNext provides two approaches for customizing icons:

1. **Default built-in SVG icons** (recommended): Uses built-in star SVG icons that work with `variant`, `color`, and `size` props
2. **Custom icons via scoped slots**: For complete customization where you handle all styling yourself

**Important:** When using custom icons via scoped slots, the `variant`, `color`, and `size` props do not apply. You must handle all styling in your custom CSS.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- None

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

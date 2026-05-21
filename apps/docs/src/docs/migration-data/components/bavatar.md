---
id: bavatar
title: BAvatar Migration
category: components
components:
  - BAvatar
  - BLink
match:
  - BAvatar
  - .svg
  - badge-placement
  - badge-placement='top'
  - badge-top
  - badge-placement='end'
  - badge-right
  - badge-offset
  - <BAvatar>
tags:
  - migration
  - components
  - bavatar
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
related:
  - rounded-radius-element
confidence: high
---

# BAvatar Migration

## Summary

Migration notes for BAvatar from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BAvatar
- BLink

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" what="Icon support on `BAvatar`">
  Icons can be implemented using the default slot with either <BLink href="/docs/icons">unplugin-icons</BLink>
  or by embedding an `.svg`. See the <BLink href="/docs/icons">Icons</BLink> guide for the recommended approach.
</DeprecatedFeature>

<<< DEMO ../../demo/AvatarIcon.vue#template{vue-html}

### Badge Positioning

Badge positioning has changed to using a single property `badge-placement` and our
[`CombinedPlacement` utility](/docs/types#combinedplacement) rather than individual properties.

For instance, use `badge-placement='top'` in place of `badge-top` or `badge-placement='end'` in place of
`badge-right`. For combined props, rather than using `badge-top` and `badge-right`, use
`badge-placement='top-end'`. This before/after mapping is straightforward and is a good candidate for codemod-style replacement.

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="`badge-offset`">
  This property is <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/pull/2692">significantly more complex</BLink> to implement in BootstrapVueNext (due to Bootstrap 5.0's implementation).
</DeprecatedFeature>

### Rounding Sides

See the [Rounding](/docs/migration-data/props/rounded-radius-element) section. The directional rounding changes are also straightforward to map automatically.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical, but review the result when surrounding behavior or adjacent props may affect the final markup.

## Related Migrations

- [rounded-radius-element](/docs/migration-data/props/rounded-radius-element)

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

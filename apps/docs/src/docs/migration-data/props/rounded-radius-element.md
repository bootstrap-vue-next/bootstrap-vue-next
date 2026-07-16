---
id: rounded-radius-element
title: RadiusElementExtendables Rounding Migration
description: 'Directional `rounded` prop values from BootstrapVue are replaced by edge-specific RadiusElement props in BootstrapVueNext.'
category: props
components:
  - BAvatar
  - BAvatarGroup
  - BCardImg
  - BImg
  - BOverlay
match:
  - "rounded=\"top\""
  - "rounded=\"bottom\""
  - "rounded=\"left\""
  - "rounded=\"right\""
  - rounded-top
  - rounded-bottom
  - rounded-start
  - rounded-end
tags:
  - rounding
  - props
  - migration
  - radius
safeRewrite: true
migrationType: prop-value-migration
introducedIn: bootstrap-vue-next
replacement:
  top: rounded-top
  bottom: rounded-bottom
  left: rounded-start
  right: rounded-end
manualReviewRequired: false
deprecated:
  - "rounded=\"left\""
  - "rounded=\"right\""
related:
  - bavatar
  - bimg
  - boverlay
confidence: high
---

# RadiusElementExtendables Rounding Migration

## Summary

Directional `rounded` prop values from BootstrapVue are replaced by edge-specific RadiusElement props in BootstrapVueNext.

## Affected APIs

- BAvatar
- BAvatarGroup
- BCardImg
- BImg
- BOverlay

## Breaking Change

`BAvatar`, `BAvatarGroup`, `BCardImg`, `BImg` and `BOverlay` all implement
[`RadiusElementExtendables`](/docs/types#radiuselementextendables) in order to support complex
rounding behavior. The `rounded`, `rounded-top`, `rounded-bottom`, `rounded-start`, and `rounded-end`
props each takes a [`RadiusElement`](/docs/types#radiuselement) value to specify how the component
is rounded. The edge specific props such as `rounded-top` override the `rounded` prop for that edge.

This takes the place of `top`, `bottom`, `left`, and `right` values for the `rounded` prop.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [bavatar](/docs/migration-data/components/bavatar)
- [bimg](/docs/migration-data/components/bimg)
- [boverlay](/docs/migration-data/components/boverlay)

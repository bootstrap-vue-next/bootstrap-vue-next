---
id: bnav
title: BNav Migration
category: components
components:
  - BNav
  - BDropdown
match:
  - BNav
  - BDropdown
  - <BNav>
tags:
  - migration
  - components
  - bnav
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - bdropdown
  - v-html-props
confidence: high
---

# BNav Migration

## Summary

Migration notes for BNav from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BNav
- BDropdown

## Breaking Change

`align` prop now takes values from [`AlignmentJustifyContent`](/docs/types#alignment): `start`, `center`, `end`, `between`, `around`, and `evenly`

### BNavItemDropdown

See [`BDropdown`](/docs/migration-data/components/bdropdown) for details

See the [v-html](/docs/migration-data/patterns/v-html-props) section for information on deprecation of the `html` prop.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [bdropdown](/docs/migration-data/components/bdropdown)
- [v-html-props](/docs/migration-data/patterns/v-html-props)

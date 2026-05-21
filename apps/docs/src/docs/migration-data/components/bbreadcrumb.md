---
id: bbreadcrumb
title: BBreadcrumb Migration
category: components
components:
  - BBreadcrumb
match:
  - BBreadcrumb
  - <BBreadcrumb>
tags:
  - migration
  - components
  - bbreadcrumb
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - v-html-props
confidence: high
---

# BBreadcrumb Migration

## Summary

Migration notes for BBreadcrumb from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BBreadcrumb

## Breaking Change

See the [v-html](/docs/migration-data/patterns/v-html-props) section for information on deprecation of the `html` prop. In most migrations this is a straightforward rewrite from the `html` prop to the default slot using Vue template content.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [v-html-props](/docs/migration-data/patterns/v-html-props)

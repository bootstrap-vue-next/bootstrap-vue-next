---
id: bprogressbar
title: BProgressBar Migration
description: 'Migration notes for BProgressBar from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BProgressBar
match:
  - BProgressBar
  - label-html
  - <BProgressBar>
tags:
  - migration
  - components
  - bprogressbar
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
related:
  - v-html-props
confidence: high
---

# BProgressBar Migration

## Summary

Migration notes for BProgressBar from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BProgressBar

## Breaking Change

See the [v-html](/docs/migration-data/patterns/v-html-props) section for information on deprecation of the `label-html` prop.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- [v-html-props](/docs/migration-data/patterns/v-html-props)

---
id: baccordion
title: BAccordion Migration
description: 'BootstrapVue did not ship a first-class accordion component, so accordion migrations usually start from `BCollapse`-based patterns rather than a direct `BAccordion` replacement.'
category: components
components:
  - BAccordion
  - BAccordionItem
  - BCollapse
match:
  - BAccordion
  - BAccordionItem
  - BCollapse
  - accordion
  - visible
  - v-model
tags:
  - migration
  - components
  - baccordion
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
related:
  - bcollapse
  - show-hide
confidence: high
---

# BAccordion Migration

## Summary

BootstrapVue did not ship a first-class accordion component, so accordion migrations usually start from `BCollapse`-based patterns rather than a direct `BAccordion` replacement.

## Affected APIs

- BAccordion
- BAccordionItem
- BCollapse

## Breaking Change

BootstrapVueNext provides dedicated `BAccordion` and `BAccordionItem` components for accordion behavior.

In BootstrapVue, similar UIs were commonly built with `BCollapse` plus the `accordion` prop. When migrating those patterns, map the grouped `BCollapse` instances to `BAccordion`/`BAccordionItem` and then review the surrounding behavior, as accordions are common but not identical to the older collapse-based implementation.

See [BCollapse](/docs/migration-data/components/bcollapse) and [Show and Hide](/docs/migration-data/patterns/show-hide) for the underlying visibility changes.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

No. Accordion migrations often begin as a mechanical `BCollapse` to `BAccordion` mapping, but the surrounding structure and behavior should still be reviewed.

## Related Migrations

- [bcollapse](/docs/migration-data/components/bcollapse)
- [show-hide](/docs/migration-data/patterns/show-hide)

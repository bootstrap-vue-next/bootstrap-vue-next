---
id: bcollapse
title: BCollapse Migration
description: 'Migration notes for BCollapse from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BCollapse
  - BAccordion
  - BLink
match:
  - BCollapse
  - BootstrapVue
  - Bootstrap4
  - BootstrapVueNext
  - Bootstrap5
  - BAccordion
  - $root
  - "bv::collapse::state"
  - "bv::toggle::collapse"
  - <BCollapse>
tags:
  - migration
  - components
  - bcollapse
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
related:
  - show-hide
confidence: high
---

# BCollapse Migration

## Summary

Migration notes for BCollapse from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BCollapse
- BAccordion
- BLink

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED" what="`accordion` prop on `BCollapse`">
  In `BootstrapVue`/`Bootstrap4`, accordions are implemented via `BCollapse`.
  In `BootstrapVueNext`/`Bootstrap5` accordions are first class citizens, so please use the
  <BLink href="/docs/components/accordion">`BAccordion`</BLink> component instead.
</DeprecatedFeature>

The prop `toggle` has replaced the prop `appear` with slightly different semantics. In order to create a
collapse that is closed and transitions to open on the initial mount, set `visible` to false and `toggle` to true.

The `close` scoped slot element has been replaced by `hide` for consistency with the other props and
events on this component.

`$root` instance events `bv::collapse::state` and `bv::toggle::collapse` are deprecated.

See [Show and Hide](/docs/migration-data/patterns/show-hide) shared properties.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical, but review the result when surrounding behavior or adjacent props may affect the final markup.

## Related Migrations

- [show-hide](/docs/migration-data/patterns/show-hide)

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

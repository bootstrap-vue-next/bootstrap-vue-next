---
id: bjumbotron
title: BJumbotron Migration
category: components
components:
  - BJumbotron
match:
  - BJumbotron
  - <BJumbotron>
tags:
  - migration
  - components
  - bjumbotron
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# BJumbotron Migration

## Summary

Migration notes for BJumbotron from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BJumbotron

## Breaking Change

<DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED" what="`BJumbotron` component">
  Bootstrap removed the Jumbotron component in Bootstrap 5, but the same presentation can be recreated using
  utility classes if needed.
</DeprecatedFeature>

Note that Bootstrap has deprecated their Jumbotron component, but it can be replicated using
utility classes. See their [migration guide](https://getbootstrap.com/docs/5.3/migration/#jumbotron)
for details.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

<script setup lang="ts">
import {DeprecationReason} from '../../../types/deprecation'
</script>

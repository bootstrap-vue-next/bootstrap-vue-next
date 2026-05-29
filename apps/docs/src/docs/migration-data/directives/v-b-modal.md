---
id: v-b-modal
title: v-b-modal Migration
description: 'Migration notes for v-b-modal from BootstrapVue to BootstrapVueNext.'
category: directives
components: []
match:
  - Modal
  - v-b-modal
  - v-b-toggle
  - not-collapsed
  - this.$bvModal.show(id)
tags:
  - migration
  - directives
  - modal
safeRewrite: true
migrationType: directive-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# v-b-modal Migration

## Summary

Migration notes for v-b-modal from BootstrapVue to BootstrapVueNext.

## Affected APIs

- None explicitly listed

## Breaking Change

### Relationship with v-b-toggle

In BSVN, `v-b-modal` is an alias for `v-b-toggle`:

- Both directives work identically
- `v-b-modal` is semantically clearer when working with modals
- `v-b-toggle` works with modals, collapse, and offcanvas
- Use whichever makes your code more readable

<<< FRAGMENT ../../directives/demo/ModalDirectiveMigration.html#alias-bsv{vue-html}

<<< FRAGMENT ../../directives/demo/ModalDirectiveMigration.html#alias-bsvn{vue-html}

### New Features in BSVN

**Array value support:**

<<< FRAGMENT ../../directives/demo/ModalDirectiveMigration.html#array-value{vue-html}

**CSS class tracking:**

BSVN adds `collapsed`/`not-collapsed` classes to trigger elements based on modal state, allowing for conditional styling.

**Migration from BSV `this.$bvModal.show(id)`:**

BSV's `this.$bvModal.show(id)` has been replaced with multiple approaches. See the [BModal directive documentation](/docs/directives/BModal#comparison-with-other-approaches) for detailed migration examples.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

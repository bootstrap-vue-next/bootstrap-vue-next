---
id: migration-overview
title: BootstrapVue to BootstrapVueNext Migration Overview
category: patterns
components:
  - BootstrapVueNext
match:
  - BootstrapVue
  - BootstrapVueNext
  - migration guide
  - Vue 3
  - Bootstrap 5
tags:
  - migration
  - overview
  - bootstrapvue
  - bootstrap-vue-next
safeRewrite: false
migrationType: pattern-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
related:
  - sync-modifier
  - show-hide
  - v-html-props
  - component-aliases
confidence: high
---

# BootstrapVue to BootstrapVueNext Migration Overview

## Summary

Overview of the major BootstrapVue to BootstrapVueNext migration themes, prerequisites, and deprecation policy.

## Affected APIs

- BootstrapVueNext

## Breaking Change

`BootstrapVueNext` is an entirely new implementation of [BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/) based on [Vue 3](https://vuejs.org/) and [Bootstrap 5](https://getbootstrap.com/). Therefore, you should not expect this to be a drop-in replacement. Where possible compatibility has been maintained, but providing a clean developer experience when working with `Vue 3`, `Bootstrap 5` and this library is a higher priority.

You should start by familiarizing yourself with the [Vue 3 Migration Guide](https://v3-migration.vuejs.org/), especially
the [breaking changes](https://v3-migration.vuejs.org/breaking-changes/) section and the
[Bootstrap 5 migration guide](https://getbootstrap.com/docs/5.3/migration/#v530). While there are
some places where this library will insulate you from the changes to the underlying libraries,
a general familiarity with the changes in the core dependencies will serve you well.

For instance, there are likely many places where you use `Bootstrap` utility classes in order to style your components.
`Bootstrap 5` made a [breaking change](https://getbootstrap.com/docs/5.3/migration/#utilities-3) to all utility
classes that involve `left` and `right` (or `l` and `r`) to be `start` and `end` (or `s` and `e`). This
will affect components such as `BNavBar` in unexpected ways that BootstrapVueNext has no control over.

Similarly, `left` and `right` props and values in the `bootstrap-vue-next` API are generally replaced by `start` and `end`.

Bootstrap-vue-next will commit to breaking changes whenever Bootstrap marks something as "deprecated". These changes may be resolved automatically, or they might necessitate manual action from the library's users.

### Nuxt

`bootstrap-vue-next` integrates with `nuxt 3` so if you are using `nuxt`, please read their
[migration guide](https://nuxt.com/docs/migration/overview) and our [router link support](/docs/reference/router-links) reference

### Status

This migration guide is a work in progress. We're adding to this guide as we complete the documentation and parity pass and doing
our best to note each component or directive that hasn't been through the full process.

<NotYetDocumented :help-only="true" />

For section of this guide that are not marked as in progress, we're still interested in examples of migrations that you
have found tricky or clarification if the details in the guide weren't sufficient.

### Deprecation

We will mark features of BootstrapVue as deprecated for one of several reasons.

<DeprecatedReasons/>

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- [sync-modifier](/docs/migration-data/patterns/sync-modifier)
- [show-hide](/docs/migration-data/patterns/show-hide)
- [v-html-props](/docs/migration-data/patterns/v-html-props)
- [component-aliases](/docs/migration-data/patterns/component-aliases)

---
id: blink
title: BLink Migration
description: 'Migration notes for BLink from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BLink
match:
  - BLink
  - "href=\"#navbar-overview\""
  - <router-link>
  - exact-path
  - exact-path-active-class
  - "bv::link::clicked"
  - $root
  - <BLink>
tags:
  - migration
  - components
  - blink
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# BLink Migration

## Summary

Migration notes for BLink from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BLink

## Breaking Change

Bootstrap Vue used `Vue Router 3`, BootstrapVueNext uses [`Vue Router 4`](https://router.vuejs.org/) please read the
[Vue Router migration guide](https://router.vuejs.org/guide/migration/) if using the router features of `BLink`.

`BLink` no longer suppresses the scroll to top default behavior when `href='#'`.

::: tip Handling href="#" Links in Documentation
In our documentation site, we addressed the scroll-to-top behavior by cleaning up unnecessary `href="#"` attributes:

1. **Remove unnecessary hrefs**: We removed `href="#"` from demo components where it wasn't providing any functional value (just styling).

2. **Use contextual anchors**: Where navigation is actually needed, we replaced `href="#"` with meaningful anchor links that point to their demo containers (e.g., `href="#navbar-overview"`). This provides better user experience by allowing users to navigate directly to specific examples.

This approach maintains component functionality while eliminating the unwanted scroll-to-top behavior.
:::

### append

Vue router deprecated the `append` prop in `<router-link>`, BootstrapVueNext has followed suit and deprecated the `append`
prop on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-append-prop-in-router-link-) for details.

### event

Vue router deprecated the `event` prop in `<router-link>`, BootstrapVueNext has followed suit and deprecated the `event`
prop on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-event-and-tag-props-in-router-link-) for details.

### exact

Vue router deprecated the `exact` prop in `<router-link>`, BootstrapVueNext has followed suit and deprecated the `exact`, `exact-path`
and `exact-path-active-class` props on `BLink`. See the [`Vue Router` migration guide](https://router.vuejs.org/guide/migration/#Removal-of-the-exact-prop-in-router-link-) for details.

### $root events

BootstrapVueNext no longer emits the `bv::link::clicked` event on `$root`.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical, but review the result when surrounding behavior or adjacent props may affect the final markup.

## Related Migrations

- None

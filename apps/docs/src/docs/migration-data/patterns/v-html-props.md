---
id: v-html-props
title: HTML Prop to Slot Migration
category: patterns
components:
  - BBreadcrumbItem
  - BCard
  - BCarouselSlide
  - BDropdown
  - BInputGroup
  - BModal
  - BPopover
  - BProgressBar
  - BTable
  - BTableSimple
match:
  - html
  - "*-html"
  - v-html
  - slot replacement
  - HTML Injection
tags:
  - migration
  - slots
  - security
  - html
safeRewrite: false
migrationType: pattern-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# HTML Prop to Slot Migration

## Summary

Unsafe HTML string props are replaced by explicit slot-based rendering in BootstrapVueNext.

## Affected APIs

- BBreadcrumbItem
- BCard
- BCarouselSlide
- BDropdown
- BInputGroup
- BModal
- BPopover
- BProgressBar
- BTable
- BTableSimple

## Breaking Change

BootstrapVue provided a number of different props named `html` and `*-html` that passed arbitrary data to Vue's `v-html`.
While a warning was included with each instance of this use, it is not recommended practice to use `v-html` and obscuring
that practice further by passing down other props is ill advised in our opinion. We have instead worked to insure
that you have the ability to access the same functionality via slots. In many cases slots were already available and
took priority over the `[*-]html` props and we've filled in the gaps where there wasn't a direct replacement.
We believe the developer experience in these cases is as good or better than when using props.
Most importantly any use your code makes of `v-html` will be explicit. That means Vue ESLint rules can warn on the exact XSS-sensitive sites, and teams can audit all HTML injection points in one standardized way instead of relying on scattered `html` props. See the [Vue Documentation](https://vuejs.org/guide/best-practices/security.html#html-injection) for their take on the `HTML Injection` attack that use of `v-html` exposes.

| Component                      | Prop                  | Replacement Slot |
| ------------------------------ | --------------------- | ---------------- |
| `BBreadcrumbItem`              | `html`                | `default`        |
| `BCard`                        | `footer-html`         | `footer`         |
| `BCard`                        | `header-html`         | `header`         |
| `BCardFooter`                  | `html`                | `default`        |
| `BCardHeader`                  | `html`                | `default`        |
| `BCarouselSlide`               | `caption-html`        | `caption`        |
| `BCarouselSlide`               | `text-html`           | `default`        |
| `BDropdown`                    | `html`                | `default`        |
| `BInputGroup`                  | `append-html`         | `append`         |
| `BInputGroup`                  | `prepend-html`        | `prepend`        |
| `BModal`                       | `cancel-title-html`   | `cancel`         |
| `BModal`                       | `ok-title`            | `ok`             |
| `BModal`                       | `title-html`          | `title`          |
| `BNavItemDropdown`             | `html`                | `default`        |
| `BPopover` [\*](#popover-html-note) | `html`                | `default`        |
| `BProgressBar`                 | `label-html`          | `default`        |
| `BTable`                       | `empty-filtered-html` | `empty-filtered` |
| `BTable`                       | `empty-html`          | `empty`          |
| `BTable`                       | `caption-html`        | `table-caption`  |
| `BTableSimple`                 | `caption-html`        | `table-caption`  |

<a id="popover-html-note"></a>
Note: BootstrapVue `b-popover` didn't have an `html` attribute, but alpha versions of BootstrapVueNext did.

`BFormCheckboxGroup` and `BFormRadioGroup` implement a scoped slot `option` which takes a `Record<string, unknown>` parameter. You can add
arbitrary fields to elements of the options array that you pass in and they will be accessible to the slot. The example
below uses the data on the options object to create the html inline in the slot.

<<< DEMO ../../demo/CheckboxGroupMigration.vue

Or you can do a straightforward translation of a `BFormRadioGroup` passing an `HTML` string through to its children.
If you're passing user data, this still opens your code up to <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
<abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first
<a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the
user supplied string, but the BootstrapVueNext library isn't adding an extra layer of abstraction to this vulnerability.

<<< DEMO ../../demo/RadioGroupMigration.vue

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- None

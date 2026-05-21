---
id: component-aliases
title: Component Alias Migration
description: 'BootstrapVue component aliases are not auto-registered in BootstrapVueNext and must be migrated to canonical names or resolver aliases.'
category: patterns
components:
  - BootstrapVueNextResolver
match:
  - b-btn
  - b-button
  - aliases
  - BootstrapVueNextResolver
tags:
  - migration
  - components
  - aliases
safeRewrite: true
migrationType: pattern-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: false
confidence: high
---

# Component Alias Migration

## Summary

BootstrapVue component aliases are not auto-registered in BootstrapVueNext and must be migrated to canonical names or resolver aliases.

## Affected APIs

- BootstrapVueNextResolver

## Breaking Change

BootstrapVue had a number of component aliases — for instance, `<b-btn>` was an alias for `<b-button>`.
BootstrapVueNext does not support these aliases by default, so you must either migrate to the canonical component names or opt into aliases yourself.

To define aliases, you can use the [`BootstrapVueNextResolver`'s `aliases` option](/docs#aliasing). Whether you preserve aliases or rewrite call sites is up to the consuming application.

The table below lists each BootstrapVue alias and its BootstrapVueNext replacement:

| BootstrapVue                                               | BootstrapVueNext      |
| ---------------------------------------------------------- | --------------------- |
| `b-btn`                                                    | `BButton`             |
| `b-btn-group`                                              | `BButtonGroup`        |
| `b-btn-toolbar`                                            | `BButtonToolbar`      |
| `b-dd`                                                     | `BDropdown`           |
| `b-dd-item`                                                | `BDropdownItem`       |
| `b-dropdown-item-btn`, `b-dd-item-button`, `b-dd-item-btn` | `BDropdownItemButton` |
| `b-dd-divider`                                             | `BDropdownDivider`    |
| `b-dd-text`                                                | `BDropdownText`       |
| `b-dd-form`                                                | `BDropdownForm`       |
| `b-dd-group`                                               | `BDropdownGroup`      |
| `b-dd-header`                                              | `BDropdownHeader`     |
| `b-datalist`                                               | `BFormDatalist`       |
| `b-checkbox`, `b-check`                                    | `BFormCheckbox`       |
| `b-datepicker`                                             | `BFormDatepicker`     |
| `b-file`                                                   | `BFormFile`           |
| `b-input`                                                  | `BFormInput`          |
| `b-radio-group`                                            | `BFormRadioGroup`     |
| `b-rating`                                                 | `BFormRating`         |
| `b-select`                                                 | `BFormSelect`         |
| `b-select-option`                                          | `BFormSelectOption`   |
| `b-option-group`                                           | `BFormOptionGroup`    |
| `b-tags`                                                   | `BFormTags`           |
| `b-tag`                                                    | `BFormTag`            |
| `b-textarea`                                               | `BFormTextarea`       |
| `b-timepicker`                                             | `BFormTimepicker`     |
| `b-nav-item-dd`, `b-nav-dropdown`, `b-nav-dd`              | `BNavItemDropdown`    |
| `b-nav-toggle`                                             | `BNavbarToggle`       |

Note: While BootstrapVueNext recommends using Vue 3 naming convention `BButton` it is still possible to use `b-button`.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical and can usually be rewritten automatically when the surrounding code matches the documented patterns.

## Related Migrations

- None

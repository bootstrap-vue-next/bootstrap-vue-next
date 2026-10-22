---
title: Migrating to v100 (Bootstrap 6)
description: 'Breaking changes and old-to-new API mappings for upgrading BootstrapVueNext v1 to v100, which is based on Bootstrap 6.'
---

## Date and time components

Bootstrap 6 ships exactly one date component, the [Datepicker](https://getbootstrap.com/docs/6.0/forms/datepicker/). It has no time picker, date field, or standalone calendar. BootstrapVueNext v100 follows that and replaces every date/time component with a single `BDatepicker`.

### Removed components

| v1 component        | v100 replacement                                         |
| ------------------- | -------------------------------------------------------- |
| `BDatePicker`       | `BDatepicker`                                            |
| `BDateRangePicker`  | `BDatepicker` with `selection-mode="multiple-ranged"`    |
| `BDateField`        | `BDatepicker`                                            |
| `BDateRangeField`   | `BDatepicker` with `selection-mode="multiple-ranged"`    |
| `BTimeField`        | Removed. Bootstrap 6 has no time input; use `type="time"` on `BFormInput` |
| `BTimeRangeField`   | Removed. Use two `BFormInput type="time"` inputs         |

### Dependencies

- Removed the optional peer dependency `@internationalized/date`.
- Added the optional peer dependency `vanilla-calendar-pro` (required by the Bootstrap 6 Datepicker).
- `reka-ui` is still required by `BAutocomplete` and `BFormOtp`.

### API mapping

| v1                                        | v100                                                          |
| ----------------------------------------- | ------------------------------------------------------------- |
| `v-model` of `DateValue` (`@internationalized/date`) | `v-model` of ISO `string` (`string[]` for `multiple` and `multiple-ranged`) |
| range model `{start, end}`                | `string[]` with `[start, end]`                                |
| `min-value` / `max-value`                 | `date-min` / `date-max`                                       |
| `week-starts-on`                          | `first-weekday`                                               |
| `number-of-months`                        | `display-months-count`                                        |
| `locale`                                  | `locale`                                                      |
| `dir`, `granularity`, `hour-cycle`, `hide-time-zone`, `step` | Removed                                    |
| `is-date-disabled`, `is-date-unavailable`, `fixed-weeks`, `paged-navigation`, `prevent-deselect`, `weekday-format` | Removed; use `vcp-options` |
| `default-value`, `default-placeholder`, `placeholder` (date), `open`, `default-open`, `modal`, `close-on-select` | Removed; use `v-model` and `show()` / `hide()` |
| `update:open`, `update:placeholder`       | `show`, `shown`, `hide`, `hidden`                             |
| `field` / `calendar` slots and segment slots | `default` and `icon` slots (with `trigger="button"`)       |

### Example

<<< FRAGMENT ./demo/MigrationDatepicker.vue#template{vue-html}

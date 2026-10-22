---
title: Datepicker
description: 'A calendar popup or inline calendar for choosing dates, wrapping the Bootstrap 6 Datepicker.'
---

## Overview

`BDatepicker` wraps the official [Bootstrap 6 Datepicker](https://getbootstrap.com/docs/6.0/forms/datepicker/), which is powered by [Vanilla Calendar Pro](https://vanilla-calendar.pro/). It is the only date component in BootstrapVueNext; Bootstrap 6 has no time picker, date field, or standalone calendar.

Install the peer dependency alongside Bootstrap 6:

```bash
pnpm add vanilla-calendar-pro
```

<<< DEMO ./demo/DatepickerOverview.vue

### `v-model` and typing

`BDatepicker` is generic over `selectionMode`. With the default `single` mode the model is a `string | null` (ISO `YYYY-MM-DD`). With `multiple` or `multiple-ranged` the model is a `string[]`.

## Date range

Set `selection-mode="multiple-ranged"` to select a range. The model is `[start, end]`.

<<< DEMO ./demo/DatepickerRange.vue

## Multiple dates

<<< DEMO ./demo/DatepickerMultiple.vue

## Button trigger

Use `trigger="button"` to open the calendar from a button. The default slot sets the button label and the `icon` slot replaces the icon.

<<< DEMO ./demo/DatepickerButton.vue

## Inline

Set `inline` to render the calendar without a popup.

<<< DEMO ./demo/DatepickerInline.vue

## Options

Use `date-min`, `date-max`, `first-weekday`, `locale`, `display-months-count`, `placement` and `datepicker-theme` to configure the calendar. Anything else supported by Vanilla Calendar Pro can be passed through `vcp-options`.

## Exposed methods

`show()`, `hide()`, `toggle()`, `getSelectedDates()`, `setSelectedDates(dates)` and the root `element`.

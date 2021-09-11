---
sidebar: auto
---

# Comparision with BoostrapVue

In this section, you'll see a full list of BootstrapVue components (standard and non-standard) and the coverage status for `properties`, `slots`, `events`, etc. Also, we specify the new features of Bootstrap **v5** in each component that requires it.

For more information, you can visit the Bootstrap v5 [migration guide](https://getbootstrap.com/docs/5.0/migration/).

## Alert

### Properties

| Property        | Status                                                                               | Observations |
| --------------- | ------------------------------------------------------------------------------------ | ------------ |
| `dismiss-label` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             |
| `dismissible`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `fade`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `show`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `variant`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `dismiss` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Event                | Status                                                                               | Observations                                 |
| -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------- |
| `dismiss-count-down` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             |
| `dismissed`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | In Bootstrap v5 this event is named `closed` |
| `input`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             |

### Bootstrap v5 new features

#### Events

| Event    | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `closed` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `close`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Avatar

This is a <Badge type="warning" text="non-standard" /> component.

## Badge

## Breadcrumb

## Button

## Button Group

## Button Toolbar

## Calendar

This is a <Badge type="warning" text="non-standard" /> component.

## Card

## Carousel

## Collapse

## Dropdown

## Embed

This is a <Badge type="warning" text="non-standard" /> component.

## Form

## Form Checkbox

### Properties

| Property          | Status                                                                               | Observations |
| ----------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-label`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-labeledby`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-variant`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `checked`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model  |
| `disabled`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `indeterminate`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `inline`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plain`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `switch`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `unchecked-value` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Checkbox Group

### Properties

| Property         | Status                                                                               | Observations         |
| ---------------- | ------------------------------------------------------------------------------------ | -------------------- |
| `aria-invalid`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `autofocus`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `button-variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `buttons`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `checked`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model          |
| `disabled`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `disabled-field` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `form`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `html-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `id`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `name`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `options`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/50) Completed  | Object not supported |
| `plain`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `required`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                      |
| `size`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `stacked`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `state`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `switches`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `text-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `validated`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `value-field`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property | Status                                                                             | Observations |
| -------- | ---------------------------------------------------------------------------------- | ------------ |
| `change` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `input`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

## Form Datepicker

This is a <Badge type="warning" text="non-standard" /> component.

## Form File

## Form Group

This components was suppresed in Boostrap `v5`.

More information [here](https://getbootstrap.com/docs/5.0/migration/#forms).

## Form Input

## Form Radio

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-label`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-labeledby` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `checked`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model  |
| `disabled`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `inline`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plain`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Radio Group

### Properties

| Property         | Status                                                                               | Observations         |
| ---------------- | ------------------------------------------------------------------------------------ | -------------------- |
| `aria-invalid`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `autofocus`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `button-variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `buttons`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `checked`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model          |
| `disabled`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `disabled-field` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `form`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `html-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `id`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `name`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `options`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/50) Completed  | Object not supported |
| `plain`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `required`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                      |
| `size`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `stacked`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `state`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `text-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `validated`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `value-field`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Rating

This is a <Badge type="warning" text="non-standard" /> component.

## Form Select

## Form Spinbutton

This is a <Badge type="warning" text="non-standard" /> component.

## Form Tags

This is a <Badge type="warning" text="non-standard" /> component.

## Form Textarea

## Form Timepicker

This is a <Badge type="warning" text="non-standard" /> component.

## Image

This is a <Badge type="warning" text="non-standard" /> component.

## Input Group

## Jumbotron

This components was suppresed in Boostrap `v5`.

More information [here](https://getbootstrap.com/docs/5.0/migration/#jumbotron).

## Layout and Grid System

## Link

This is a <Badge type="warning" text="non-standard" /> component.

## List group

## Media

This components was suppresed in Boostrap `v5`.

More information [here](https://getbootstrap.com/docs/5.0/utilities/flex/#media-object).

## Modal

## Nav

## Navbar

## Overlay

This is a <Badge type="warning" text="non-standard" /> component.

## Pagination

## Pagination Nav

## Popover

## Progress

## Sidebar

This component is implemented in Bootstrap v5 as [Offcanvas](https://getbootstrap.com/docs/5.1/components/offcanvas/).

## Skeleton

This is a <Badge type="warning" text="non-standard" /> component.

## Spinner

## Table

## Tabs

## Time

This is a <Badge type="warning" text="non-standard" /> component.

## Toasts

## Tooltip

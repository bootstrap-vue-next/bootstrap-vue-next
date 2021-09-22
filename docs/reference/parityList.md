---
sidebar: auto
---

# Comparision with BoostrapVue

In this section, you'll see a full list of BootstrapVue components (standard and non-standard) and the coverage status for `properties`, `slots`, `events`, etc. Also, we specify the new features of Bootstrap **v5** in each component that requires it.

For more information, you can visit the Bootstrap v5 [migration guide](https://getbootstrap.com/docs/5.0/migration/).

## Alert

### Properties

| Property        | Status                                                                               | Observations                                         |
| --------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `dismiss-label` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `dismissible`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `fade`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `show`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Only boolean. show property is no longer the v-model |
| `variant`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `dismiss` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Event                | Status                                                                               | Observations                                      |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `dismiss-count-down` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)           |
| `dismissed`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | In Bootstrap v5 this event is named `closed`      |
| `input`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)           | In vue3 this event is now named update:modelValue |

### Bootstrap v5 new features

#### Events

| Event    | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `closed` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Avatar

This is a <Badge type="warning" text="non-standard" /> component.

## Badge

## Breadcrumb

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| items    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Breadcrumb-Item

### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| active                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| active-class          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| append                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| aria-current          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| disabled              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| exact                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| exact-active-class    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| href                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| html                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| no-prefetch           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| prefetch              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| rel                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| replace               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| router-component-name | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| target                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| text                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| to                    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| click    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Button

## Button Group

## Button Toolbar

## Calendar

This is a <Badge type="warning" text="non-standard" /> component.

## Card

## Carousel

## Collapse

## Dropdown

### Properties

| Property            | Status                                                                               | Observations                                  |
| ------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------- |
| `auto-close`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/80) Completed  | esc closes the dropdown when auto-close=false |
| `block`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `boundary`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `dark`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | n/a in bootstrap-vue                          |
| `disabled`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `dropleft`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `dropright`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `html`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `id`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `lazy`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `menu-class`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `no-caret`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `no-flip`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `offset`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `popper-opts`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `popper-opts`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `right`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `role`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `size`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-button-type` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-class`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-href`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-to`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `split-variant`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `text`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `toggle-class`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `toggle-tag`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `toggle-text`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `variant`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |

### Slots

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `button-content` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `default`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/40) Completed  | no scope     |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `hidden` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hide`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `show`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `shown`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `toggle` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |

### Sub components

#### DropDownItem

##### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `active`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-class`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `append`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `exact`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `exact-active-class`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `href`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `link-class`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-prefetch`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `prefetch`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `rel`                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `replace`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `router-component-name` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `target`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `to`                    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `variant`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownItemButton

##### Properties

| Property       | Status                                                                               | Observations |
| -------------- | ------------------------------------------------------------------------------------ | ------------ |
| `active`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-class` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-class` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownDivider

##### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `tag`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownForm

##### Properties

| Property | Status                                                                             | Observations |
| -------- | ---------------------------------------------------------------------------------- | ------------ |
| `xxx`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

#### DropDownText

| Property     | Status                                                                             | Observations |
| ------------ | ---------------------------------------------------------------------------------- | ------------ |
| `tag`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `text-class` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `variant`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

#### DropDownGroup

##### Properties

| Property           | Status                                                                               | Observations |
| ------------------ | ------------------------------------------------------------------------------------ | ------------ |
| `aria-describedby` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header-classes`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header-tag`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header-variant`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownHeader

##### Properties

| Property  | Status                                                                             | Observations |
| --------- | ---------------------------------------------------------------------------------- | ------------ |
| `id`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `tag`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

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

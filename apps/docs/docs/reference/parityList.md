---
sidebar: auto
---

# Comparison with BootstrapVue

In this section, you'll see a full list of BootstrapVue components (standard and non-standard) and the coverage status for `properties`, `slots`, `events`, etc. Also, we specify the new features of Bootstrap **v5** in each component that requires it. It is not a full migration guide, but documents the changes between the versions. A migration guide will be finalized upon a v1.0 release

For more information, you can visit the Bootstrap v5 [migration guide](https://getbootstrap.com/docs/5.0/migration/)

## Accordion

**New***

### Properties

| Property        | Status                                                                               | Observations                                         |
| --------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `flush` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `free`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `id`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed   |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)             |

## Accordion Item

**New***

### Properties

| Property        | Status                                                                               | Observations                                         |
| --------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `id`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed   |
| `title` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `visible`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)             |
| `title` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)             |

## Alert

### Properties

| Property        | Status                                                                               | Observations                                         |
| --------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `dismiss-label` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `dismissible`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `fade`          | ![50% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/50) Completed   | Type `Booleanish`. Prop added, but not functional v0.3.5
| `modelValue`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `boolean or number`. Prefer v-model for two way binding. Read more on dedicated Alert page |
| `show`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`. show property is no longer the v-model |
| `variant`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `ColorVariant`

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | --- |
| `dismiss` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)             | Renamed to close |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Event                | Status                                                                               | Observations                                      |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `dismiss-count-down` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)           | Renamed to `close-countdown` |
| `dismissed`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Renamed to `closed`      |
| `input`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Renamed to `update:modelValue` |

### Bootstrap v5 new features

#### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `close` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)             |

#### Events

| Event    | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `close-countdown` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Value type `number` |
| `closed` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `update:modelValue` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Value type `boolean or number` |

## Avatar

### Properties

| Property               | Status                                                                               | Observations           |
| ---------------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| `active-class`         | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `alt`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `append`               | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `aria-label`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge-left`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `badge-offset`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge-top`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `badge-variant`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `ColorVariant`
| `button`               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `button-type`          | ![50% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/50) Completed | Type `ButtonType`. Currently contains bug v0.3.5
| `disabled`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `exact`                | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `exact-active-class`   | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `href`                 | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `icon`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `no-prefetch`          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `prefetch`             | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `rel`                  | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `replace`              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `rounded`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `route-component-name` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `size`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `InputSize or string`
| `square`               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`
| `src`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `target`               | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `text`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `to`                   | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `variant`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `ColorVariant`

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `badge`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Event       | Status                                                                               | Observations |
| ----------- | ------------------------------------------------------------------------------------ | ------------ |
| `click`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Value type `MouseEvent` |
| `img-error` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |  |

### Bootstrap v5 new features

#### Properties

| Property               | Status                                                                               | Observations           |
| ---------------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| `text-variant`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `TextColorVariant` |

#### Events

| Event       | Status                                                                               | Observations |
| ----------- | ------------------------------------------------------------------------------------ | ------------ |
| `click`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Value type `MouseEvent` |

## Avatar-Group

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `overlap` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rounded` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `InputSize or string` |
| `square`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish` |
| `tag`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
|           |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Badge

### Properties 

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `pill` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`|
| `tag` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| `variant` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| `textIndicator` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| `dotIndicator` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Breadcrumb

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| items    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `BreadcrumbItem[]`|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `prepend` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `append` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `prepend` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `append` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Breadcrumb-Item

### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| active                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| active-class          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| append                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| aria-current          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| disabled              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| exact                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| exact-active-class    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| href                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| html                  | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| no-prefetch           | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| prefetch              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| rel                   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| replace               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| router-component-name | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| target                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| text                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| to                    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| click    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Button

### Properties

| Property              | Status                                                                               | Observations                                       |
| --------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------- |
| active                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| active-class          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| append                | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| block                 | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | No longer supported. Use bootstrap utility classes |
| disabled              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| exact                 | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| exact-active-class    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| href                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| no-prefetch           | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| pill                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| prefetch              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| pressed               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | Type `Booleanish`. Vue3 no longer supports `.sync`. Use v-model:pressed   |
| rel                   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| replace               | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| router-component-name | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| size                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `InputSize`|
| squared               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| tag                   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| target                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `LinkTarget`|
| to                    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| type                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ButtonType`|
| variant               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ButtonVariant`|

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| click    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `MouseEvent`|

### Bootstrap v5 new features

#### Properties

| Property              | Status                                                                               | Observations                                       |
| --------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------- |
| loading                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| loadingMode                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `fill | inline`|

#### Slots

| Property | Status |
| -- | -- |
| loading | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) |

#### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| update:pressed    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `boolean`|

## Button Group

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| aria-role | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| size      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `sm or lg`|
| tag       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| vertical  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Button Toolbar

### Properties

| Property  | Status                                                                               | Observations           |
| --------- | ------------------------------------------------------------------------------------ | ---------------------- |
| justify   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| key-nav   | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                        |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

| Property  | Status                                                                               | Observations           |
| --------- | ------------------------------------------------------------------------------------ | ---------------------- |
| role   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | |
| aria-label   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | |

## Close Button

### Renamed from button-close

### Properties

| Property  | Status                                                                               | Observations           |
| --------- | ------------------------------------------------------------------------------------ | ---------------------- |
| disabled   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| aria-label    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| content    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed|
| text-variant    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed|

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| click    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `MouseEvent`|

### Bootstrap v5 new features

#### Slot default is removed

#### Properties 

| Property  | Status                                                                               | Observations           |
| --------- | ------------------------------------------------------------------------------------ | ---------------------- |
| white   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| type   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ButtonType`|

## Calendar

This is a <Badge type="warning" text="non-standard" /> component. As such, it will not be included in a v1.0 release, but will be included in the future

## Card

### Properties

| Property               | Status                                                                               | Observations                           |
| ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------------- |
| align                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Alignment`|
| bg-variant             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`                        |
| body-bg-variant        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`    |
| body-border-variant    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | Removed. Did not work in bootstrap-vue |
| body-class             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ClassValue`|
| body-tag               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-text-variant      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `TextColorVariant`|
| border-variant         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`                 |
| footer                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                   |
| footer-bg-variant      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| footer-border-variant  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`                      |
| footer-class           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ClassValue`                                 |
| footer-html            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-tag             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-text-variant    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `TextColorVariant`|
| header                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-bg-variant      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| header-border-variant  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| header-class           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ClassValue`|
| header-html            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-tag             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-text-variant    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `TextColorVariant`|
| img-alt                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-bottom             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| img-end                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| img-height             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-left               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| img-right              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| img-src                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-start              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| img-top                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| img-width              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| no-body                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| overlay                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| sub-title              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Renamed to subtitle|
| sub-title-tag          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |renamed to subtitle-tag|
| sub-title-text-variant | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |renamed to subtitle-text-variant. Type `TextColorVariant`|
| tag                    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| text-variant           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| title                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| title-tag              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `footer`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `header`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

| Property               | Status                                                                               | Observations                           |
| ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------------- |
| body-text                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||

## Card Body

### Properties

| Property               | Status                                                                               | Observations                           |
| ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------------- |
| body-bg-variant        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| body-border-variant    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | Removed. Did not work in bootstrap-vue |
| body-class             | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed | Removed. Use :class="" instead|
| body-tag               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-text-variant      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `TextColorVariant`|
| overlay                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| sub-title              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Renamed to subtitle|
| sub-title-tag          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Renamed to subtitle-tag|
| sub-title-text-variant | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Renamed to subtitle-text-variant. Type `TextColorVariant`|
| title                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| title-tag              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

| Property               | Status                                                                               | Observations                           |
| ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------------- |
| text | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Footer

### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| footer                | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop text|
| footer-bg-variant     | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |removed use prop bg-variant|
| footer-border-variant | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop border-variant|
| footer-class          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use :class=""|
| footer-html           | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop html|
| footer-tag            | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop tag|
| footer-text-variant   | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop text-variant|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| text                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| bg-variant     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| border-variant | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| html           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| tag            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| text-variant   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `TextColorVariant`|

## Card Group

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| columns  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| deck     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| tag      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Header

### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| header                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Removed use prop text|
| header-bg-variant     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Removed use prop bg-variant|
| header-border-variant | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Removed use prop border-variant|
| header-class          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Removed use :class=""|
| header-html           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Removed use prop html|
| header-tag            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Removed use prop tag|
| header-text-variant   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Removed use prop text-variant|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| text                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| bg-variant     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| border-variant | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `ColorVariant`|
| html           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| tag            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| text-variant   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `TextColorVariant`|

## Card Img

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| alt      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| bottom   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| end      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| height   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| left     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| right    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| src      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| start    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| top      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Type `Booleanish`|
| width    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Bootstrap v5 new features

#### Properties 

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| lazy      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |Takes place of BCardImgLazy|

## Card Img Lazy

### Removed. Use Card Img with prop `lazy`

## Card Subtitle

### Renamed from card-sub-title

### Properties

| Property               | Status                                                                               | Observations |
| ---------------------- | ------------------------------------------------------------------------------------ | ------------ |
| sub-title              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop text|
| sub-title-tag          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop tag|
| sub-title-text-variant | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop textVariant|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

| Property               | Status                                                                               | Observations |
| ---------------------- | ------------------------------------------------------------------------------------ | ------------ |
| text              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| tag          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| text-variant | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||

## Card Text

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| text-tag | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop tag|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| text | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| tag | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||

## Card Title

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| title     | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop text|
| title-tag | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |Removed use prop tag|

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Bootstrap v5 new features

#### Properties

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| text     | ![1000% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||
| tag | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed ||

## Carousel

## Collapse

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| accordion | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| appear    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| id        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| is-nav    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| tag       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| visible   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| bv::collapse::state | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| hidden              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| hide                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| show                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| shown               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| update:modelValue   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Dropdown

### Properties

| Property            | Status                                                                               | Observations                                  |
| ------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------- |
| `auto-close`        | ![80% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/80) Completed  | esc closes the dropdown when auto-close=false |
| `block`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `boundary`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `dark`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | n/a in bootstrap-vue                          |
| `disabled`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `dropleft`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `dropright`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `html`              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `id`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `lazy`              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `menu-class`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `no-caret`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `no-flip`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `offset`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `popper-opts`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `popper-opts`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `right`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `role`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `size`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-button-type` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-class`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-href`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `split-to`          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `split-variant`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `text`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `toggle-class`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `toggle-tag`        | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                               |
| `toggle-text`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |
| `variant`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                               |

### Slots

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `button-content` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `default`        | ![40% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/40) Completed  | no scope     |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `hidden` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hide`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `show`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `shown`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `toggle` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |

### sub-components

#### DropDownItem

##### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `active`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-class`          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `append`                | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `exact`                 | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `exact-active-class`    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `href`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `link-class`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-prefetch`           | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `prefetch`              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `rel`                   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `replace`               | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `router-component-name` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `target`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `to`                    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `variant`               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownItemButton

##### Properties

| Property       | Status                                                                               | Observations |
| -------------- | ------------------------------------------------------------------------------------ | ------------ |
| `active`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-class` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-class` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownDivider

##### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `tag`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownForm

##### Properties

| Property | Status                                                                             | Observations |
| -------- | ---------------------------------------------------------------------------------- | ------------ |
| `xxx`    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

#### DropDownText

| Property     | Status                                                                             | Observations |
| ------------ | ---------------------------------------------------------------------------------- | ------------ |
| `tag`        | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `text-class` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `variant`    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

#### DropDownGroup

##### Properties

| Property           | Status                                                                               | Observations |
| ------------------ | ------------------------------------------------------------------------------------ | ------------ |
| `aria-describedby` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header-classes`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header-tag`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `header-variant`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### DropDownHeader

##### Properties

| Property  | Status                                                                             | Observations |
| --------- | ---------------------------------------------------------------------------------- | ------------ |
| `id`      | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `tag`     | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `variant` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

## Embed

This is a <Badge type="warning" text="non-standard" /> component.

## Form

### Properties

| Property     | Status                                                                               | Observations                 |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------------- |
| `id`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                              |
| `inline`     | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | not supported in Bootstrap 5 |
| `novalidate` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                              |
| `validate`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `submit` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Checkbox

### Properties

| Property          | Status                                                                               | Observations |
| ----------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-label`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-labeledby`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-variant`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `checked`         | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model  |
| `disabled`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `indeterminate`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `inline`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plain`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `switch`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `unchecked-value` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Checkbox Group

### Properties

| Property         | Status                                                                               | Observations         |
| ---------------- | ------------------------------------------------------------------------------------ | -------------------- |
| `aria-invalid`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `autofocus`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `button-variant` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `buttons`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `checked`        | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model          |
| `disabled`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `disabled-field` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `form`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `html-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `id`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `name`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `options`        | ![50% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/50) Completed  | Object not supported |
| `plain`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `required`       | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                      |
| `size`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `stacked`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `state`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `switches`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `text-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `validated`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `value-field`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property | Status                                                                             | Observations |
| -------- | ---------------------------------------------------------------------------------- | ------------ |
| `change` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `input`  | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

## Form Datepicker

This is a <Badge type="warning" text="non-standard" /> component.

## Form File

## Form Group

### Properties

| Property             | Status                                                                               | Observations |
| -------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `content-cols`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-lg`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-md`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-sm`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-xl`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `description`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `feedback-aria-live` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `invalid-feedback`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-lg`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-md`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-sm`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-xl`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-class`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-lg`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-md`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-sm`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-xl`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-for`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-size`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-sr-only`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tooltip`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `valid-feedback`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `validated`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

Bootstrap 5 removed classes form-group and form-row. More information [here](https://getbootstrap.com/docs/5.0/migration/#forms).
In the bootstrap-vue-next implementation, these classes are replaced by mb-1 for form-group and row for form-row.

Bootstrap 5 changed the classes for alignment. Use `start`, `center` and `end` instead of `left`, `center` and `right`

### Slots

| Property           | Status                                                                               | Observations |
| ------------------ | ------------------------------------------------------------------------------------ | ------------ |
| `default`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `description`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `invalid-feedback` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `valid-feedback`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Input

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-label`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autocomplete`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autocfocus`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `debounce`       | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `formatter`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy-formatter` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `list`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `max`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `min`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-wheel`       | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `number`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `placeholder`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plaintext`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `readonly`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `step`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `trim`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `type`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `blur`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `change`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `input`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `update:modelValue` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Invalid Feedback

### Properties

| Property     | Status                                                                               | Observations |
| ------------ | ------------------------------------------------------------------------------------ | ------------ |
| `aria-live`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `force-show` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `role`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tooltip`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Radio

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-label`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-labeledby` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-variant` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `checked`        | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model  |
| `disabled`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `inline`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plain`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Radio Group

### Properties

| Property         | Status                                                                               | Observations         |
| ---------------- | ------------------------------------------------------------------------------------ | -------------------- |
| `aria-invalid`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `autofocus`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `button-variant` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `buttons`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `checked`        | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)             | Use v-model          |
| `disabled`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `disabled-field` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `form`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `html-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `id`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `name`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `options`        | ![50% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/50) Completed  | Object not supported |
| `plain`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `required`       | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                      |
| `size`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `stacked`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `state`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `text-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `validated`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |
| `value-field`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                      |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Select

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-invalid`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled-field` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `html-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-field`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `multiple`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `options`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `options-field`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plain`          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `required`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `select-size`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `text-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value-field`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `change`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `input`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `update:modelValue` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Select Option

### Properties

| Property   | Status                                                                               | Observations |
| ---------- | ------------------------------------------------------------------------------------ | ------------ |
| `disabled` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Select Option Group

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `disabled-field` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `html-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `options`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `text-field`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value-field`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Rating

This is a <Badge type="warning" text="non-standard" /> component.

## Form Spinbutton

This is a <Badge type="warning" text="non-standard" /> component.

## Form Tags

### `<b-form-tags>`

![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) **COMPLETED**

### `<b-form-tag>`

![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) **COMPLETED**

## Form Text

### Properties

| Property       | Status                                                                               | Observations      |
| -------------- | ------------------------------------------------------------------------------------ | ----------------- |
| `id`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                   |
| `inline`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | used `.form-text` |
| `tag`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                   |
| `text-variant` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                   |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Textarea

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-invalid`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autocomplete`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `debounce`       | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `formatter`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`           | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `lazy-formatter` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `max-rows`       | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `modelValue`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-auto-shrink` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `no-resize`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `number`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `placeholder`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plaintext`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `readonly`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rows`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `wrap`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `blur`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `change`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `input`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `update:modelValue` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Timepicker

This is a <Badge type="warning" text="non-standard" /> component.

## Form Valid Feedback

### Properties

| Property     | Status                                                                               | Observations |
| ------------ | ------------------------------------------------------------------------------------ | ------------ |
| `aria-live`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `force-show` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `role`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tooltip`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Icon

### Properties

| Property     | Status                                                                               | Observations                                                      |
| ------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `animation`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `flip-h`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `flip-v`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `font-scale` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `icon`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | icons are imported as svg-sprites. Individual icons not available |
| `rotate`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `scale`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `shift-h`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `shift-v`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `size`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-next                                            |
| `stacked`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `title`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `variant`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |

## IconStack

### Properties

| Property     | Status                                                                               | Observations           |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------- |
| `animation`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `flip-h`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `flip-v`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `font-scale` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `rotate`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `scale`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `shift-h`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `shift-v`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `size`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-next |
| `title`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `variant`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |

## Image

This is a <Badge type="warning" text="non-standard" /> component.

### Properties

| Property      | Status                                                                               | Observations |
| ------------- | ------------------------------------------------------------------------------------ | ------------ |
| `alt`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `blank`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `blank-color` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `block`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `center`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fluid`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fluid-grow`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `height`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `left`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `right`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rounded`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `sizes`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `src`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `srcset`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `thumbnail`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `width`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group

### Properties

| Property       | Status                                                                               | Observations |
| -------------- | ------------------------------------------------------------------------------------ | ------------ |
| `append`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `append-html`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prepend`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prepend-html` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `append`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prepend` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Addon

**Note** added for compatability reasons

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `append`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `is-text` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Append

**Note** added for compatability reasons

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `id`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `is-text` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Prepend

**Note** added for compatability reasons

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `id`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `is-text` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Text

**Note** added for compatability reasons

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `tag`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Jumbotron

This component was removed in Bootstrap `v5`.

More information [here](https://getbootstrap.com/docs/5.0/migration/#jumbotron).

## Layout and Grid System

## Link

This is a <Badge type="warning" text="non-standard" /> component.

## List group

### Properties

| Property     | Status                                                                               | Observations           |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------- |
| `flush`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `horizontal` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `numbered`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-next |
| `tag`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## List group item

### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `action`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-class`          | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `append`                | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `button`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `exact`                 | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `exact-active-class`    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `href`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-prefetch`           | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `prefetch`              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `rel`                   | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `replace`               | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `router-component-name` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `tag`                   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `target`                | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `to`                    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant`               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Media

This component was removed in Bootstrap `v5`.

More information [here](https://getbootstrap.com/docs/5.0/utilities/flex/#media-object).

## Modal

## Nav

## Navbar

## Overlay

This is a <Badge type="warning" text="non-standard" /> component.

### Properties

| Property          | Status                                                                               | Observations |
| ----------------- | ------------------------------------------------------------------------------------ | ------------ |
| `bg-color`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `blur`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fixed`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-center`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-fade`         | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `no-wrap`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `opacity`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `overlay-tag`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rounded`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `show`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `spinner-small`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `spinner-type`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `spinner-variant` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `wrapper-tag`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `z-index`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `overlay` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `click`  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hidden` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `shown`  | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |

## Pagination

### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `align`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-controls`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-label`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `ellipsis-class`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `ellipsis-text`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-class`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-number`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-text`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hide-ellipsis`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hide-goto-end-buttons` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-first-page`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-last-page`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-next-page`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-page`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-prev-page`       | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-class`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-number`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-text`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `limit`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `next-class`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `next-text`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `page-class`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `per-page`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `pills`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prev-class`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prev-text`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `total-rows`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`                 | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | use v-model  |

### Slots

| Property        | Status                                                                               | Observations |
| --------------- | ------------------------------------------------------------------------------------ | ------------ |
| `ellipsis-text` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-text`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-text`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `next-text`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `page`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prev-text`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Event               | Status                                                                               | Observations       |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| `change`            | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                    |
| `input`             | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                    |
| `update:modelValue` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | vue3 v-model event |
| `page-click`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                    |

## Pagination Nav

## Popover

## Progress

## Sidebar

This component is implemented in Bootstrap v5 as [Offcanvas](https://getbootstrap.com/docs/5.1/components/offcanvas/).

## Skeleton

Skeleton is a Bootstrap-vue custom component, and has been replaced with the official Bootstrap v5 recommendation: BPlaceholder [Read more](https://getbootstrap.com/docs/5.3/components/placeholders/)

#### Properties

| Property    | Status                                                                               |
| ----------- | ------------------------------------------------------------------------------------ |
| `animation` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Spinner

## Table

### `<b-table-simple>`

#### Properties

| Property             | Status                                                                             | Observations |
| -------------------- | ---------------------------------------------------------------------------------- | ------------ |
| `fixed`              | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `id`                 | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `no-border-collapse` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `sticky-header`      | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

### `<b-tbody>`

#### Properties

| Property                    | Status                                                                             | Observations |
| --------------------------- | ---------------------------------------------------------------------------------- | ------------ |
| `tbody-transition-handlers` | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `tbody-transition-props`    | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

### `<b-thead>`

![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) **COMPLETED**

### `<b-tfoot>`

![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) **COMPLETED**

### `<b-tr>`

![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) **COMPLETED**

### `<b-td>`

![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) **COMPLETED**

### `<b-th>`

![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) **COMPLETED**

## Tab

### Properties

| Property           | Status                                                                               | Observations |
| ------------------ | ------------------------------------------------------------------------------------ | ------------ |
| `active`           | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-id`        | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-body`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title`            | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title-item-class` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title-link-class` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Event   | Status                                                                               | Observations |
| ------- | ------------------------------------------------------------------------------------ | ------------ |
| `click` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Tabs

### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `active-nav-item-class` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-tab-class`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `align`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `card`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-class`         | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `end`                   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fill`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`                    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `justified`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`                  | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `nav-class`             | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `nav-wrapper-class`     | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-fade`               | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-key-nav`            | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `no-nav-style`          | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `pills`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `small`                 | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`                   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `vertical`              | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property     | Status                                                                               | Observations |
| ------------ | ------------------------------------------------------------------------------------ | ------------ |
| `default`    | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `empty`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tabs-end`   | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tabs-start` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Event               | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `activate-tab`      | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `changed`           | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `input`             | ![0% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `update:modelValue` | ![100% support](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Time

This is a <Badge type="warning" text="non-standard" /> component.

## Toasts

## Tooltip

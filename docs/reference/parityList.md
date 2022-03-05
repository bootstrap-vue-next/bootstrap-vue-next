---
sidebar: auto
---

# Comparison with BoostrapVue

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
| `input`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | In vue3 this event is now named update:modelValue |

### Bootstrap v5 new features

#### Events

| Event    | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `closed` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Avatar

### Properties

| Property               | Status                                                                               | Observations           |
| ---------------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| `active-class`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `alt`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `append`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `aria-label`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge-left`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge-offset`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge-top`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `badge-variant`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `button`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `button-type`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `disabled`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `exact`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `exact-active-class`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `href`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `icon`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `icon-variant`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-3 |
| `no-prefetch`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `prefetch`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `rel`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `replace`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `rounded`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `route-component-name` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `size`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `square`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `src`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `target`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `text`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `to`                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |
| `variant`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `badge`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Event       | Status                                                                               | Observations |
| ----------- | ------------------------------------------------------------------------------------ | ------------ |
| `click`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `img-error` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Avatar-Group

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `overlap` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rounded` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `square`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
|           |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

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
| active-class          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| append                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| aria-current          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| disabled              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| exact                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| exact-active-class    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| href                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| html                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| no-prefetch           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| prefetch              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| rel                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| replace               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| router-component-name | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| target                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| text                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| to                    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| click    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Button

### Properties

| Property              | Status                                                                               | Observations                                       |
| --------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------- |
| active                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| active-class          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| append                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| block                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | No longer supported. Use bootstrap utility classes |
| disabled              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| exact                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| exact-active-class    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| href                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| no-prefetch           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| pill                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| prefetch              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| pressed               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | vue3 no longer support sync. Use v-model:pressed   |
| rel                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| replace               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| router-component-name | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| size                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| squared               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| tag                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| target                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| to                    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                                                    |
| type                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |
| variant               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                    |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| click    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Button Group

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| aria-role | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| size      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| tag       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| vertical  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Button Toolbar

### Properties

| Property  | Status                                                                               | Observations           |
| --------- | ------------------------------------------------------------------------------------ | ---------------------- |
| aria-role | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-3 |
| justify   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| key-nav   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                        |

## Calendar

This is a <Badge type="warning" text="non-standard" /> component.

## Card

### Properties

| Property               | Status                                                                               | Observations                           |
| ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------------- |
| align                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| bg-variant             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-bg-variant        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-border-variant    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | removed. Did not work in bootstrap-vue |
| body-class             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-tag               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-text-variant      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| border-variant         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-bg-variant      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-border-variant  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-class           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-html            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-tag             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| footer-text-variant    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-bg-variant      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-border-variant  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-class           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-html            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-tag             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| header-text-variant    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-alt                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-bottom             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-end                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-height             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-left               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-right              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-src                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-start              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-top                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| img-width              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| no-body                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| overlay                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| sub-title              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| sub-title-tag          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| sub-title-text-variant | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| tag                    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| text-variant           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| title                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| title-tag              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `footer`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `header`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Body

### Properties

| Property               | Status                                                                               | Observations                           |
| ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------------- |
| body-bg-variant        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-border-variant    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | removed. Did not work in bootstrap-vue |
| body-class             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-tag               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| body-text-variant      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| border-variant         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| overlay                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| sub-title              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| sub-title-tag          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| sub-title-text-variant | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| title                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |
| title-tag              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                        |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Header

### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| header                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| header-bg-variant     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| header-border-variant | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| header-class          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| header-html           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| header-tag            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| header-text-variant   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Footer

### Properties

| Property              | Status                                                                               | Observations |
| --------------------- | ------------------------------------------------------------------------------------ | ------------ |
| footer                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| footer-bg-variant     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| footer-border-variant | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| footer-class          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| footer-html           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| footer-tag            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| footer-text-variant   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Title

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| title     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| title-tag | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Sub-Title

### Properties

| Property               | Status                                                                               | Observations |
| ---------------------- | ------------------------------------------------------------------------------------ | ------------ |
| sub-title              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| sub-title-tag          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| sub-title-text-variant | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Img

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| alt      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| bottom   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| end      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| height   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| left     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| right    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| src      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| start    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| top      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| width    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Card Img Lazy

### Properties

| Property     | Status                                                                             | Observations |
| ------------ | ---------------------------------------------------------------------------------- | ------------ |
| blank-height | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| blank-src    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| blank-width  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| bottom       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| end          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| left         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| offset       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| right        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| show         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| start        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| top          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

## Card Text

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| text-tag | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Card Group

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| columns  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| deck     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| tag      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Carousel

## Collapse

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| accordion | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| appear    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| id        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| is-nav    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| tag       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| visible   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| bv::collapse::state | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| hidden              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| hide                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| show                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| shown               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| update:modelValue   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

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

### sub-components

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

### Properties

| Property     | Status                                                                               | Observations                 |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------------- |
| `id`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                              |
| `inline`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | not supported in Bootstrap 5 |
| `novalidate` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                              |
| `validate`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `submit` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

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

### Properties

| Property             | Status                                                                               | Observations |
| -------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `content-cols`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-lg`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-md`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-sm`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-cols-xl`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `description`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `feedback-aria-live` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `invalid-feedback`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-lg`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-md`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-sm`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-align-xl`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-class`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-lg`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-md`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-sm`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-cols-xl`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-for`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-size`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-sr-only`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tooltip`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `valid-feedback`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `validated`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

Bootstrap 5 removed classes form-group and form-row. More information [here](https://getbootstrap.com/docs/5.0/migration/#forms).
In the bootstrap-vue-3 implementation, these classes are replaced by mb-1 for form-group and row for form-row.

Bootstrap 5 changed the classes for alignment. Use `start`, `center` and `end` instead of `left`, `center` and `right`

### Slots

| Property           | Status                                                                               | Observations |
| ------------------ | ------------------------------------------------------------------------------------ | ------------ |
| `default`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `description`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `invalid-feedback` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `valid-feedback`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Input

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-label`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autocomplete`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autocfocus`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `debounce`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `formatter`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy-formatter` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `list`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `max`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `min`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-wheel`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `number`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `placeholder`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plaintext`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `readonly`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `step`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `trim`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `type`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `blur`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `change`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `input`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `update:modelValue` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Invalid Feedback

### Properties

| Property     | Status                                                                               | Observations |
| ------------ | ------------------------------------------------------------------------------------ | ------------ |
| `aria-live`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `force-show` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `role`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tooltip`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

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

## Form Select

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-invalid`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled-field` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `html-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-field`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `multiple`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `options`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `options-field`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plain`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `required`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `select-size`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `text-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value-field`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `change`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `input`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `update:modelValue` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Select Option

### Properties

| Property   | Status                                                                               | Observations |
| ---------- | ------------------------------------------------------------------------------------ | ------------ |
| `disabled` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Select Option Group

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `disabled-field` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `html-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `options`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `text-field`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value-field`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Rating

This is a <Badge type="warning" text="non-standard" /> component.

## Form Spinbutton

This is a <Badge type="warning" text="non-standard" /> component.

## Form Tags

This is a <Badge type="warning" text="non-standard" /> component.

## Form Text

### Properties

| Property       | Status                                                                               | Observations      |
| -------------- | ------------------------------------------------------------------------------------ | ----------------- |
| `id`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                   |
| `inline`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | used `.form-text` |
| `tag`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                   |
| `text-variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                   |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Textarea

### Properties

| Property         | Status                                                                               | Observations |
| ---------------- | ------------------------------------------------------------------------------------ | ------------ |
| `aria-invalid`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autocomplete`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `autofocus`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `debounce`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `disabled`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `form`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `formatter`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `lazy-formatter` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `max-rows`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `modelValue`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `name`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-auto-shrink` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `no-resize`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `number`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `placeholder`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `plaintext`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `readonly`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `required`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rows`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `wrap`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property            | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `blur`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `change`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `input`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `update:modelValue` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Form Timepicker

This is a <Badge type="warning" text="non-standard" /> component.

## Form Valid Feedback

### Properties

| Property     | Status                                                                               | Observations |
| ------------ | ------------------------------------------------------------------------------------ | ------------ |
| `aria-live`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `force-show` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `role`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `state`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tooltip`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Icon

### Properties

| Property     | Status                                                                               | Observations                                                      |
| ------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `animation`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `flip-h`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `flip-v`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `font-scale` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `icon`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | icons are imported as svg-sprites. Individual icons not available |
| `rotate`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `scale`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `shift-h`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `shift-v`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `size`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-3                                            |
| `stacked`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `title`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |
| `variant`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                                                                   |

## IconStack

### Properties

| Property     | Status                                                                               | Observations           |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------- |
| `animation`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `flip-h`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `flip-v`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `font-scale` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `rotate`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `scale`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `shift-h`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `shift-v`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `size`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-3 |
| `title`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `variant`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |

## Image

This is a <Badge type="warning" text="non-standard" /> component.

### Properties

| Property      | Status                                                                               | Observations |
| ------------- | ------------------------------------------------------------------------------------ | ------------ |
| `alt`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `blank`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `blank-color` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `block`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `center`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fluid`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fluid-grow`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `height`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `left`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `right`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rounded`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `sizes`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `src`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `srcset`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `thumbnail`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `width`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group

### Properties

| Property       | Status                                                                               | Observations |
| -------------- | ------------------------------------------------------------------------------------ | ------------ |
| `append`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `append-html`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prepend`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prepend-html` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `append`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prepend` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Addon

**Note** added for compatability reasons

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `append`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `is-text` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Append

**Note** added for compatability reasons

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `id`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `is-text` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Prepend

**Note** added for compatability reasons

### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `id`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `is-text` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Input Group Text

**Note** added for compatability reasons

### Properties

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `tag`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Jumbotron

This component was removed in Boostrap `v5`.

More information [here](https://getbootstrap.com/docs/5.0/migration/#jumbotron).

## Layout and Grid System

## Link

This is a <Badge type="warning" text="non-standard" /> component.

## List group

### Properties

| Property     | Status                                                                               | Observations           |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------- |
| `flush`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `horizontal` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |
| `numbered`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | new in bootstrap-vue-3 |
| `tag`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                        |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## List group item

### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `action`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-class`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `append`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `button`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `exact`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `exact-active-class`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `href`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-prefetch`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `prefetch`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `rel`                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `replace`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `router-component-name` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `tag`                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `target`                | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `to`                    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `variant`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Media

This component was removed in Boostrap `v5`.

More information [here](https://getbootstrap.com/docs/5.0/utilities/flex/#media-object).

## Modal

## Nav

## Navbar

## Overlay

This is a <Badge type="warning" text="non-standard" /> component.

### Properties

| Property          | Status                                                                               | Observations |
| ----------------- | ------------------------------------------------------------------------------------ | ------------ |
| `bg-color`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `blur`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fixed`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-center`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-fade`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `no-wrap`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `opacity`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `overlay-tag`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rounded`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `show`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `spinner-small`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `spinner-type`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `spinner-variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `wrapper-tag`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `z-index`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `overlay` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Property | Status                                                                               | Observations |
| -------- | ------------------------------------------------------------------------------------ | ------------ |
| `click`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hidden` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `shown`  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |

## Pagination

### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `align`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-controls`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `aria-label`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `ellipsis-class`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `ellipsis-text`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-class`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-number`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-text`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hide-ellipsis`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `hide-goto-end-buttons` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-first-page`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-last-page`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-next-page`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-page`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `label-prev-page`       | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-class`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-number`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-text`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `limit`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `next-class`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `next-text`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `page-class`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `per-page`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `pills`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prev-class`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prev-text`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `size`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `total-rows`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `value`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   | use v-model  |

### Slots

| Property        | Status                                                                               | Observations |
| --------------- | ------------------------------------------------------------------------------------ | ------------ |
| `ellipsis-text` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `first-text`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `last-text`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `next-text`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `page`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `prev-text`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Event               | Status                                                                               | Observations       |
| ------------------- | ------------------------------------------------------------------------------------ | ------------------ |
| `change`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                    |
| `input`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |                    |
| `update:modelValue` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed | vue3 v-model event |
| `page-click`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |                    |

## Pagination Nav

## Popover

## Progress

## Sidebar

This component is implemented in Bootstrap v5 as [Offcanvas](https://getbootstrap.com/docs/5.1/components/offcanvas/).

## Skeleton

This is a <Badge type="warning" text="non-standard" /> component.

### `<b-skeleton>`

#### Properties

| Property    | Status                                                                               |
| ----------- | ------------------------------------------------------------------------------------ |
| `animation` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `height`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `size`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `type`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `variant`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `width`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-skeleton-wrapper>`

#### Properties

| Property  | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `loading` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `loading` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-skeleton-table>`

#### Properties

| Property      | Status                                                                               |
| ------------- | ------------------------------------------------------------------------------------ |
| `animation`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `columns`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `hide-header` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `rows`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `show-footer` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |
| `table-props` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-skeleton-img>`

Not implemented yet.

### `<b-skeleton-icon>`

Since we do not implement Bootstrap icons or any related icon package. This component is slighly different from the BootstrapVue component, it was refactoring as a SVG wrapper.

#### Properties

| Property    | Status                                                                               |
| ----------- | ------------------------------------------------------------------------------------ |
| `animation` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Spinner

## Table

### `<b-table-simple>`

#### Properties

| Property             | Status                                                                               | Observations |
| -------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `bordered`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `borderless`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `caption-top`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `dark`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fixed`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `hover`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `no-border-collapse` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `outlined`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `responsive`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `small`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `stacked`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `sticky-header`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `striped`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `table-class`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `table-variant`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-tbody>`

#### Properties

| Property                    | Status                                                                             | Observations |
| --------------------------- | ---------------------------------------------------------------------------------- | ------------ |
| `tbody-transition-handlers` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |
| `tbody-transition-props`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed |              |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-thead>`

#### Properties

| Property       | Status                                                                               | Observations |
| -------------- | ------------------------------------------------------------------------------------ | ------------ |
| `head-variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### Slots

| Name      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-tfoot>`

#### Properties

| Property       | Status                                                                               | Observations |
| -------------- | ------------------------------------------------------------------------------------ | ------------ |
| `foot-variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-tr>`

#### Properties

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `variant` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-td>`

#### Properties

| Property          | Status                                                                               | Observations |
| ----------------- | ------------------------------------------------------------------------------------ | ------------ |
| `colspan`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rowspan`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `stacked-heading` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `sticky-column`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

### `<b-th>`

#### Properties

| Property          | Status                                                                               | Observations |
| ----------------- | ------------------------------------------------------------------------------------ | ------------ |
| `colspan`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `rowspan`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `stacked-heading` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `sticky-column`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `variant`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

#### Slots

| Name      | Status                                                                               |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |

## Tab

### Properties

| Property           | Status                                                                               | Observations |
| ------------------ | ------------------------------------------------------------------------------------ | ------------ |
| `active`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `button-id`        | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `disabled`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-body`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title-item-class` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title-link-class` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property  | Status                                                                               | Observations |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `default` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `title`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Event   | Status                                                                               | Observations |
| ------- | ------------------------------------------------------------------------------------ | ------------ |
| `click` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Tabs

### Properties

| Property                | Status                                                                               | Observations |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `active-nav-item-class` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `active-tab-class`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `align`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `card`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `content-class`         | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `end`                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `fill`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `id`                    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `justified`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `lazy`                  | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `nav-class`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `nav-wrapper-class`     | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-fade`               | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `no-key-nav`            | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `no-nav-style`          | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `pills`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `small`                 | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tag`                   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `vertical`              | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Slots

| Property     | Status                                                                               | Observations |
| ------------ | ------------------------------------------------------------------------------------ | ------------ |
| `default`    | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `empty`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tabs-end`   | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `tabs-start` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

### Events

| Event               | Status                                                                               | Observations |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ |
| `activate-tab`      | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |
| `changed`           | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `input`             | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) Completed   |              |
| `update:modelValue` | ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100) Completed |              |

## Time

This is a <Badge type="warning" text="non-standard" /> component.

## Toasts

## Tooltip

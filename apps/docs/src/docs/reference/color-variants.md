# Color variants and CSS class mapping

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Below are the variants available when using the default Bootstrap v5 CSS. When using BootstrapVueNext components, the variants are referred to by their variant name, rather than by the underlying CSS classname.

</div>

## Base variants

<BCard class="bg-body-tertiary">

<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning bg-dark">.text-warning</p>
<p class="text-info bg-dark">.text-info</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark bg-white">.text-dark</p>

</BCard>

The base variants will translate to various Bootstrap v5 contextual class names based on the component (and variant purpose) where they are used. See the sections below for details.

## Background and border variants

<BCard class="bg-body-tertiary">

  <div class="gap-2">
    <span class="border border-primary" />
    <span class="border border-primary-subtle" />
    <span class="border border-secondary" />
    <span class="border border-secondary-subtle" />
    <span class="border border-success" />
    <span class="border border-success-subtle" />
    <span class="border border-danger" />
    <span class="border border-danger-subtle" />
    <span class="border border-warning" />
    <span class="border border-warning-subtle" />
    <span class="border border-info" />
    <span class="border border-info-subtle" />
    <span class="border border-light" />
    <span class="border border-light-subtle" />
    <span class="border border-dark" />
    <span class="border border-dark-subtle" />
    <span class="border border-black" />
    <span class="border border-white" />
  </div>

</BCard>

All the base variants plus:

- `white`
- `transparent`

These translate to class names `bg-{variant}` for backgrounds and `border-{variant}` for borders.

These variants are used by components (such as `<BCard>`, `<BModal>`, etc.) that provide `bg-variant`, `_-bg-variant`, `border-variant` and `_-border-variant` props.

## Text variants

All the base variants plus:

- `muted`
- `white`
- `black`

<BCard class="bg-body-tertiary">

<p class="text-primary">.text-primary</p>
<p class="text-primary-emphasis">.text-primary-emphasis</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-secondary-emphasis">.text-secondary-emphasis</p>
<p class="text-success">.text-success</p>
<p class="text-success-emphasis">.text-success-emphasis</p>
<p class="text-danger">.text-danger</p>
<p class="text-danger-emphasis">.text-danger-emphasis</p>
<p class="text-warning bg-dark">.text-warning</p>
<p class="text-warning-emphasis">.text-warning-emphasis</p>
<p class="text-info bg-dark">.text-info</p>
<p class="text-info-emphasis">.text-info-emphasis</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-light-emphasis">.text-light-emphasis</p>
<p class="text-dark bg-white">.text-dark</p>
<p class="text-dark-emphasis">.text-dark-emphasis</p>

<p class="text-body">.text-body</p>
<p class="text-body-emphasis">.text-body-emphasis</p>
<p class="text-body-secondary">.text-body-secondary</p>
<p class="text-body-tertiary">.text-body-tertiary</p>

<p class="text-black bg-white">.text-black</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50 bg-white">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>

</BCard>

These translate to class names `text-{variant}`

These variants are used by components (such as `<BCard>`, `<BModal>`, etc.) that provide `text-variant` and `*-text-variant` props.

## Component specific variants

Some Bootstrap v5 components require additional CSS styling, or additional pseudo selector styling (i.e buttons), and hence have their own underlying variant CSS classes.

### Alert variants

All the base variants

These translate to class names `alert-{variant}`.

### Badge variants

All the base variants

These translate to class names `badge-{variant}`.

### Button variants

All the base variants plus:

- `outline-{base variant}` which generates an outline button version of the base variant
- `link` which renders the button with the look of a link but retains button padding and margins

These translate to class names `btn-{variant}` and `btn-outline-{variant}`.

Note the `link` variant does not have an outline version.

### Table variants

All the base variants plus:

- `active`

These variants translate to class names `table-{variant}`.

When the table has the `dark` prop set, the variants translate to the `bg-{variant}` classes.

Note that the `active` variant is only applicable to `<tr>` elements within the `<tbody>`, and can not be applied to individual table cells or used as the `table-variant`.

### Popover variants

All the base variants

These translate to BootstrapVueNext custom class names `b-popover-{variant}`.

### Tooltip variants

All the base variants

These translate to BootstrapVueNext custom class names `b-tooltip-{variant}`.

### Toast variants

All the base variants

These translate to BootstrapVueNext custom class names `b-toast-{variant}`.

## Using variant classes

You may also use the underlying class names directly on elements (and some components) via the standard HTML `class="..."` attribute.

## Creating custom variants

When creating custom variants, follow the Bootstrap v4 variant CSS class naming scheme and they will become available to the various components that use that scheme (i.e. create a custom CSS class `btn-purple` and `purple` becomes a valid variant to use on `<BButton>`).

Alternatively, you can create new variant theme colors by supplying custom Bootstrap SCSS theme color maps. The default theme color map is (from `bootstrap/scss/\_variables.scss`):

<HighlightCard>
  Base grayscale colors definitions
  <template #html>

```scss
$white: #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black: #000;
```

  </template>
</HighlightCard>

<HighlightCard>
  Base colors definitions
  <template #html>

```scss
$blue: #0d6efd;
$indigo: #6610f2;
$purple: #6f42c1;
$pink: #d63384;
$red: #dc3545;
$orange: #fd7e14;
$yellow: #ffc107;
$green: #198754;
$teal: #20c997;
$cyan: #0dcaf0;
```

  </template>
</HighlightCard>

<HighlightCard>
  Theme color default definitions
  <template #html>

```scss
$primary: $blue;
$secondary: $gray-600;
$success: $green;
$info: $cyan;
$warning: $yellow;
$danger: $red;
$light: $gray-100;
$dark: $gray-900;
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BCard} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
</script>

<style lang="scss">
.bg-body-tertiary [class^="border"] {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  margin: .25rem;
}
</style>

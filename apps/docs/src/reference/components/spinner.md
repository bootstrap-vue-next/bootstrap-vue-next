# Spinners

<div class="lead mb-5">

Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

</div>

## About

Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

## Border spinner

Use the border spinners for a lightweight loading indicator.

<HighlightCard>
  <b-spinner></b-spinner>
  <template #html>

```vue-html
<b-spinner></b-spinner>
```

  </template>
</HighlightCard>

### Colors

The border spinner uses currentColor for its border-color, meaning you can customize the color with text color utilities. You can use any of our text color utilities on the standard spinner.

<HighlightCard>
  <b-spinner variant="primary" class="me-2"></b-spinner>
  <b-spinner variant="secondary" class="me-2"></b-spinner>
  <b-spinner variant="success" class="me-2"></b-spinner>
  <b-spinner variant="danger" class="me-2"></b-spinner>
  <b-spinner variant="warning" class="me-2"></b-spinner>
  <b-spinner variant="info" class="me-2"></b-spinner>
  <b-spinner variant="light" class="me-2"></b-spinner>
  <b-spinner variant="dark"></b-spinner>
  <template #html>

```vue-html
<b-spinner variant="primary"></b-spinner>
<b-spinner variant="secondary"></b-spinner>
<b-spinner variant="success"></b-spinner>
<b-spinner variant="danger"></b-spinner>
<b-spinner variant="warning"></b-spinner>
<b-spinner variant="info"></b-spinner>
<b-spinner variant="light"></b-spinner>
<b-spinner variant="dark"></b-spinner>
```

  </template>
</HighlightCard>

## Growing spinner

If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!

<HighlightCard>
  <b-spinner type="grow"></b-spinner>
  <template #html>

```vue-html
<b-spinner type="grow"></b-spinner>
```

  </template>
</HighlightCard>

<HighlightCard>
  <b-spinner type="grow" variant="primary" class="me-2"></b-spinner>
  <b-spinner type="grow" variant="secondary" class="me-2"></b-spinner>
  <b-spinner type="grow" variant="success" class="me-2"></b-spinner>
  <b-spinner type="grow" variant="danger" class="me-2"></b-spinner>
  <b-spinner type="grow" variant="warning" class="me-2"></b-spinner>
  <b-spinner type="grow" variant="info" class="me-2"></b-spinner>
  <b-spinner type="grow" variant="light" class="me-2"></b-spinner>
  <b-spinner type="grow" variant="dark" class="me-2"></b-spinner>
  <template #html>

```vue-html
<b-spinner type="grow" variant="primary"></b-spinner>
<b-spinner type="grow" variant="secondary"></b-spinner>
<b-spinner type="grow" variant="success"></b-spinner>
<b-spinner type="grow" variant="danger"></b-spinner>
<b-spinner type="grow" variant="warning"></b-spinner>
<b-spinner type="grow" variant="info"></b-spinner>
<b-spinner type="grow" variant="light"></b-spinner>
<b-spinner type="grow" variant="dark"></b-spinner>
```

  </template>
</HighlightCard>

## Alignment

Spinners in Bootstrap are built with `rem`s, currentColor, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities](https://getbootstrap.com/docs/5.0/utilities/spacing/) like `.m-5` for easy spacing.

<HighlightCard>
  <b-spinner class="m-5"></b-spinner>
  <template #html>

```vue-html
<b-spinner class="m-5"></b-spinner>
```

  </template>
</HighlightCard>

### Placement

Use [flexbox utilities](https://getbootstrap.com/docs/5.0/utilities/flex/), [float utilities](https://getbootstrap.com/docs/5.0/utilities/float/), or [text alignment](https://getbootstrap.com/docs/5.0/utilities/text/) utilities to place spinners exactly where you need them in any situation.

#### Flex

<HighlightCard class="mt-2">
  <div class="d-flex justify-content-center">
    <b-spinner></b-spinner>
  </div>
  <template #html>

```vue-html
<div class="d-flex justify-content-center">
  <b-spinner></b-spinner>
</div>
```

  </template>
</HighlightCard>

<HighlightCard>
  <div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <b-spinner class="ms-auto"></b-spinner>
  </div>
  <template #html>

```vue-html
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <b-spinner class="ms-auto"></b-spinner>
</div>
```

  </template>
</HighlightCard>

#### Floats

<HighlightCard class="mt-2">
  <div class="clearfix">
    <b-spinner class="float-end"></b-spinner>
  </div>
  <template #html>

```vue-html
<div class="clearfix">
  <b-spinner class="float-end"></b-spinner>
</div>
```

  </template>
</HighlightCard>

#### Text align

<HighlightCard class="mt-2">
  <div class="text-center">
    <b-spinner></b-spinner>
  </div>
  <template #html>

```vue-html
<div class="text-center">
  <b-spinner></b-spinner>
</div>
```

  </template>
</HighlightCard>

## Size

Set the prop `small` to `true` to make a smaller spinner that can quickly be used within other components.

<HighlightCard>
  <b-spinner small class="me-2"></b-spinner>
  <b-spinner small type="grow"></b-spinner>
  <template #html>

```vue-html
<b-spinner small label="Small spinner"></b-spinner>
<b-spinner small label="Small spinner" type="grow"></b-spinner>
```

  </template>
</HighlightCard>

Or, use custom CSS or inline styles to change the dimensions as needed.

<HighlightCard>
  <b-spinner style="width: 3rem; height: 3rem;" class="me-2" label="Large Spinner"></b-spinner>
  <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
  <template #html>

```vue-html
<b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
<b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
```

  </template>
</HighlightCard>

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

<HighlightCard>
  <b-button variant="primary" disabled class="me-2">
    <b-spinner small></b-spinner>
    <span class="visually-hidden">Loading...</span>
  </b-button>
  <b-button variant="primary" disabled>
    <b-spinner small></b-spinner>
    Loading...
  </b-button>
  <template #html>

```vue-html
<b-button variant="primary" disabled>
  <b-spinner small></b-spinner>
  <span class="visually-hidden">Loading...</span>
</b-button>

<b-button variant="primary" disabled>
  <b-spinner small></b-spinner>
  Loading...
</b-button>
```

  </template>
</HighlightCard>

<HighlightCard>
  <b-button variant="primary" disabled class="me-2">
    <b-spinner small type="grow"></b-spinner>
    <span class="visually-hidden">Loading...</span>
  </b-button>
  <b-button variant="primary" disabled>
    <b-spinner small type="grow"></b-spinner>
    Loading...
  </b-button>
  <template #html>

```vue-html
<b-button variant="primary" disabled>
  <b-spinner small type="grow"></b-spinner>
  <span class="visually-hidden">Loading...</span>
</b-button>

<b-button variant="primary" disabled>
  <b-spinner small type="grow"></b-spinner>
  Loading...
</b-button>
```

  </template>
</HighlightCard>

## Spinner accessibility

Place a hidden label text inside the spinner for screen reader users, via the `label` prop or `label` slot. The content will be placed inside the spinner wrapped in a `<span>` element that has the class `visually-hidden`, which will make the label available to screen reader users.

For accessibility purposes, each spinner will automatically have a `role="status"` attribute when a label is provided. You can easily customize the role if required via prop `role`. The specified `role` will not be applied when no label is provided.

As well, when no label is provided, the spinner will automatically have the attribute `aria-hidden="true"` to hide the spinner from screen reader users.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/spinner.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BButton, BSpinner} from 'bootstrap-vue-next'
</script>

# Spinners

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

</div>

## About

Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

## Border spinner

Use the border spinners for a lightweight loading indicator.

<HighlightCard>
  <BSpinner></BSpinner>
  <template #html>

```vue-html
<BSpinner></BSpinner>
```

  </template>
</HighlightCard>

### Colors

The border spinner uses currentColor for its border-color, meaning you can customize the color with text color utilities. You can use any of our text color utilities on the standard spinner.

<HighlightCard>
  <BSpinner variant="primary" class="me-2"></BSpinner>
  <BSpinner variant="secondary" class="me-2"></BSpinner>
  <BSpinner variant="success" class="me-2"></BSpinner>
  <BSpinner variant="danger" class="me-2"></BSpinner>
  <BSpinner variant="warning" class="me-2"></BSpinner>
  <BSpinner variant="info" class="me-2"></BSpinner>
  <BSpinner variant="light" class="me-2"></BSpinner>
  <BSpinner variant="dark"></BSpinner>
  <template #html>

```vue-html
<BSpinner variant="primary"></BSpinner>
<BSpinner variant="secondary"></BSpinner>
<BSpinner variant="success"></BSpinner>
<BSpinner variant="danger"></BSpinner>
<BSpinner variant="warning"></BSpinner>
<BSpinner variant="info"></BSpinner>
<BSpinner variant="light"></BSpinner>
<BSpinner variant="dark"></BSpinner>
```

  </template>
</HighlightCard>

## Growing spinner

If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!

<HighlightCard>
  <BSpinner type="grow"></BSpinner>
  <template #html>

```vue-html
<BSpinner type="grow"></BSpinner>
```

  </template>
</HighlightCard>

<HighlightCard>
  <BSpinner type="grow" variant="primary" class="me-2"></BSpinner>
  <BSpinner type="grow" variant="secondary" class="me-2"></BSpinner>
  <BSpinner type="grow" variant="success" class="me-2"></BSpinner>
  <BSpinner type="grow" variant="danger" class="me-2"></BSpinner>
  <BSpinner type="grow" variant="warning" class="me-2"></BSpinner>
  <BSpinner type="grow" variant="info" class="me-2"></BSpinner>
  <BSpinner type="grow" variant="light" class="me-2"></BSpinner>
  <BSpinner type="grow" variant="dark" class="me-2"></BSpinner>
  <template #html>

```vue-html
<BSpinner type="grow" variant="primary"></BSpinner>
<BSpinner type="grow" variant="secondary"></BSpinner>
<BSpinner type="grow" variant="success"></BSpinner>
<BSpinner type="grow" variant="danger"></BSpinner>
<BSpinner type="grow" variant="warning"></BSpinner>
<BSpinner type="grow" variant="info"></BSpinner>
<BSpinner type="grow" variant="light"></BSpinner>
<BSpinner type="grow" variant="dark"></BSpinner>
```

  </template>
</HighlightCard>

## Alignment

Spinners in Bootstrap are built with `rem`s, currentColor, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities](https://getbootstrap.com/docs/5.3/utilities/spacing/) like `.m-5` for easy spacing.

<HighlightCard>
  <BSpinner class="m-5"></BSpinner>
  <template #html>

```vue-html
<BSpinner class="m-5"></BSpinner>
```

  </template>
</HighlightCard>

### Placement

Use [flexbox utilities](https://getbootstrap.com/docs/5.3/utilities/flex/), [float utilities](https://getbootstrap.com/docs/5.3/utilities/float/), or [text alignment](https://getbootstrap.com/docs/5.3/utilities/text/) utilities to place spinners exactly where you need them in any situation.

#### Flex

<HighlightCard class="mt-2">
  <div class="d-flex justify-content-center">
    <BSpinner></BSpinner>
  </div>
  <template #html>

```vue-html
<div class="d-flex justify-content-center">
  <BSpinner></BSpinner>
</div>
```

  </template>
</HighlightCard>

<HighlightCard>
  <div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <BSpinner class="ms-auto"></BSpinner>
  </div>
  <template #html>

```vue-html
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <BSpinner class="ms-auto"></BSpinner>
</div>
```

  </template>
</HighlightCard>

#### Floats

<HighlightCard class="mt-2">
  <div class="clearfix">
    <BSpinner class="float-end"></BSpinner>
  </div>
  <template #html>

```vue-html
<div class="clearfix">
  <BSpinner class="float-end"></BSpinner>
</div>
```

  </template>
</HighlightCard>

#### Text align

<HighlightCard class="mt-2">
  <div class="text-center">
    <BSpinner></BSpinner>
  </div>
  <template #html>

```vue-html
<div class="text-center">
  <BSpinner></BSpinner>
</div>
```

  </template>
</HighlightCard>

## Size

Set the prop `small` to `true` to make a smaller spinner that can quickly be used within other components.

<HighlightCard>
  <BSpinner small class="me-2"></BSpinner>
  <BSpinner small type="grow"></BSpinner>
  <template #html>

```vue-html
<BSpinner small label="Small spinner"></BSpinner>
<BSpinner small label="Small spinner" type="grow"></BSpinner>
```

  </template>
</HighlightCard>

Or, use custom CSS or inline styles to change the dimensions as needed.

<HighlightCard>
  <BSpinner style="width: 3rem; height: 3rem;" class="me-2" label="Large Spinner"></BSpinner>
  <BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></BSpinner>
  <template #html>

```vue-html
<BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner"></BSpinner>
<BSpinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></BSpinner>
```

  </template>
</HighlightCard>

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

<HighlightCard>
  <BButton variant="primary" disabled class="me-2">
    <BSpinner small></BSpinner>
    <span class="visually-hidden">Loading...</span>
  </BButton>
  <BButton variant="primary" disabled>
    <BSpinner small></BSpinner>
    Loading...
  </BButton>
  <template #html>

```vue-html
<BButton variant="primary" disabled>
  <BSpinner small></BSpinner>
  <span class="visually-hidden">Loading...</span>
</BButton>

<BButton variant="primary" disabled>
  <BSpinner small></BSpinner>
  Loading...
</BButton>
```

  </template>
</HighlightCard>

<HighlightCard>
  <BButton variant="primary" disabled class="me-2">
    <BSpinner small type="grow"></BSpinner>
    <span class="visually-hidden">Loading...</span>
  </BButton>
  <BButton variant="primary" disabled>
    <BSpinner small type="grow"></BSpinner>
    Loading...
  </BButton>
  <template #html>

```vue-html
<BButton variant="primary" disabled>
  <BSpinner small type="grow"></BSpinner>
  <span class="visually-hidden">Loading...</span>
</BButton>

<BButton variant="primary" disabled>
  <BSpinner small type="grow"></BSpinner>
  Loading...
</BButton>
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

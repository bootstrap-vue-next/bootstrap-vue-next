# Spinners

Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

## About

Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

## Border spinner

Use the border spinners for a lightweight loading indicator.

<b-card>
  <b-spinner variant="dark" />
</b-card>

```html
<b-spinner></b-spinner>
```

### Colors

The border spinner uses currentColor for its border-color, meaning you can customize the color with text color utilities. You can use any of our text color utilities on the standard spinner.

<b-card>
  <b-spinner variant="primary"></b-spinner>&nbsp;
  <b-spinner variant="secondary"></b-spinner>&nbsp;
  <b-spinner variant="success"></b-spinner>&nbsp;
  <b-spinner variant="danger"></b-spinner>&nbsp;
  <b-spinner variant="warning"></b-spinner>&nbsp;
  <b-spinner variant="info"></b-spinner>&nbsp;
  <b-spinner variant="light"></b-spinner>&nbsp;
  <b-spinner variant="dark"></b-spinner>
</b-card>

```html
<b-spinner variant="primary"></b-spinner>
<b-spinner variant="secondary"></b-spinner>
<b-spinner variant="success"></b-spinner>
<b-spinner variant="danger"></b-spinner>
<b-spinner variant="warning"></b-spinner>
<b-spinner variant="info"></b-spinner>
<b-spinner variant="light"></b-spinner>
<b-spinner variant="dark"></b-spinner>
```

## Growing spinner

If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!

<b-card>
  <b-spinner type="grow" variant="dark" />
</b-card>

```html
<b-spinner type="grow"></b-spinner>
```

<b-card>
  <b-spinner type="grow" variant="primary"></b-spinner>&nbsp;
  <b-spinner type="grow" variant="secondary"></b-spinner>&nbsp;
  <b-spinner type="grow" variant="success"></b-spinner>&nbsp;
  <b-spinner type="grow" variant="danger"></b-spinner>&nbsp;
  <b-spinner type="grow" variant="warning"></b-spinner>&nbsp;
  <b-spinner type="grow" variant="info"></b-spinner>&nbsp;
  <b-spinner type="grow" variant="light"></b-spinner>&nbsp;
  <b-spinner type="grow" variant="dark"></b-spinner>
</b-card>

```html
<b-spinner type="grow" variant="primary"></b-spinner>
<b-spinner type="grow" variant="secondary"></b-spinner>
<b-spinner type="grow" variant="success"></b-spinner>
<b-spinner type="grow" variant="danger"></b-spinner>
<b-spinner type="grow" variant="warning"></b-spinner>
<b-spinner type="grow" variant="info"></b-spinner>
<b-spinner type="grow" variant="light"></b-spinner>
<b-spinner type="grow" variant="dark"></b-spinner>
```

## Alignment

Spinners in Bootstrap are built with `rem`s, currentColor, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities](https://getbootstrap.com/docs/5.0/utilities/spacing/) like `.m-5` for easy spacing.

<b-card>
  <b-spinner class="m-5" variant="dark" />
</b-card>

```html
<b-spinner class="m-5"></b-spinner>
```

### Placement

Use [flexbox utilities](https://getbootstrap.com/docs/5.0/utilities/flex/), [float utilities](https://getbootstrap.com/docs/5.0/utilities/float/), or [text alignment](https://getbootstrap.com/docs/5.0/utilities/text/) utilities to place spinners exactly where you need them in any situation.

#### Flex

<b-card class="mt-2">
  <div class="d-flex justify-content-center">
    <b-spinner variant="dark" />
  </div>
</b-card>

```html
<div class="d-flex justify-content-center">
  <b-spinner></b-spinner>
</div>
```

<b-card>
  <div class="d-flex align-items-center text-dark">
    <strong>Loading...</strong>
    <b-spinner class="ms-auto" variant="dark" />
  </div>
</b-card>

```html
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <b-spinner class="ms-auto"></b-spinner>
</div>
```

#### Floats

<b-card class="mt-2">
  <div class="clearfix">
    <b-spinner class="float-end" variant="dark" />
  </div>
</b-card>

```html
<div class="clearfix">
  <b-spinner class="float-end"></b-spinner>
</div>
```

#### Text align

<b-card class="mt-2">
  <div class="text-center">
    <b-spinner variant="dark" />
  </div>
</b-card>

```html
<div class="text-center">
  <b-spinner></b-spinner>
</div>
```

## Size

Set the prop `small` to `true` to make a smaller spinner that can quickly be used within other components.

<b-card class="text-dark">
  <b-spinner small></b-spinner>
  &nbsp;
  <b-spinner small type="grow"></b-spinner>
</b-card>

```html
<b-spinner small label="Small spinner"></b-spinner>
<b-spinner small label="Small spinner" type="grow"></b-spinner>
```

Or, use custom CSS or inline styles to change the dimensions as needed.

<b-card class="text-dark">
  <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
  &nbsp;
  <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
</b-card>

```html
<b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
<b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
```

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

<b-card>
  <b-button variant="primary" disabled>
    <b-spinner small></b-spinner>
    <span class="visually-hidden">Loading...</span>
  </b-button>
  &nbsp;
  <b-button variant="primary" disabled>
    <b-spinner small></b-spinner>
    Loading...
  </b-button>
</b-card>

```html
<b-button variant="primary" disabled>
  <b-spinner small></b-spinner>
  <span class="visually-hidden">Loading...</span>
</b-button>

<b-button variant="primary" disabled>
  <b-spinner small></b-spinner>
  Loading...
</b-button>
```

<b-card>
  <b-button variant="primary" disabled>
    <b-spinner small type="grow"></b-spinner>
    <span class="visually-hidden">Loading...</span>
  </b-button>
  &nbsp;
  <b-button variant="primary" disabled>
    <b-spinner small type="grow"></b-spinner>
    Loading...
  </b-button>
</b-card>

```html
<b-button variant="primary" disabled>
  <b-spinner small type="grow"></b-spinner>
  <span class="visually-hidden">Loading...</span>
</b-button>

<b-button variant="primary" disabled>
  <b-spinner small type="grow"></b-spinner>
  Loading...
</b-button>
```

## Spinner accessibility

Place a hidden label text inside the spinner for screen reader users, via the `label` prop or `label` slot. The content will be placed inside the spinner wrapped in a `<span>` element that has the class `visually-hidden`, which will make the label available to screen reader users.

For accessibility purposes, each spinner will automatically have a `role="status"` attribute when a label is provided. You can easily customize the role if required via prop `role`. The specified `role` will not be applied when no label is provided.

As well, when no label is provided, the spinner will automatically have the attribute `aria-hidden="true"` to hide the spinner from screen reader users.

<ComponentReference></ComponentReference>

<script setup lang="ts">
import ComponentReference from '../../components/ComponentReference.vue'
import {BCard, BButton, BSpinner} from 'bootstrap-vue-next'
</script>

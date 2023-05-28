# Button

<div class="lead mb-5">

Use Bootstrap's custom `b-button` component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

</div>

## Overview

BootstrapVueNext's `<b-button>` component generates either a `<button>` element, `<a>` element, or `<router-link>` component with the styling of a button.

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
  <template #html>

```vue-html
<b-button>Button</b-button>
<b-button variant="danger">Button</b-button>
<b-button variant="success">Button</b-button>
<b-button variant="outline-primary">Button</b-button>
```

  </template>
</HighlightCard>

## Element type

The `<b-button>` component generally renders a `<button>` element. However, you can also render an
`<a>` element by providing an `href` prop value. You may also generate `vue-router` `<router-link>`
when providing a value for the `to` prop (`vue-router` is required).

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button>I am a Button</b-button>
    <b-button href="#">I am a Link</b-button>
  </div>
  <template #html>

```vue-html
<div>
  <b-button>I am a Button</b-button>
  <b-button href="#">I am a Link</b-button>
</div>
```

  </template>
</HighlightCard>

## Type

You can specify the button's type by setting the prop `type` to `'button'`, `'submit'` or `'reset'`.
The default type is `'button'`.

Note the `type` prop has no effect when either `href` or `to` props are set.

## Sizing

Fancy larger or smaller buttons? Specify `lg` or `sm` via the `size` prop.

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button size="sm" class="mx-1">Small Button</b-button>
    <b-button class="mx-1">Default Button</b-button>
    <b-button size="lg" class="mx-1">Large Button</b-button>
  </div>
  <template #html>

```vue-html
<b-button size="sm">Small Button</b-button>
<b-button>Default Button</b-button>
<b-button size="lg">Large Button</b-button>
```

  </template>
</HighlightCard>

## Contextual variants

Use the `variant` prop to generate the various Bootstrap contextual button variants.

By default, `<b-button>` will render with the `secondary` variant.

The `variant` prop adds the Bootstrap v4.3 class `.btn-<variant>` on the rendered button.

### Solid color variants

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` and `dark`.

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button variant="primary">Primary</b-button>
    <b-button variant="secondary">Secondary</b-button>
    <b-button variant="success">Success</b-button>
    <b-button variant="danger">Danger</b-button>
    <b-button variant="warning">Warning</b-button>
    <b-button variant="info">Info</b-button>
    <b-button variant="light">Light</b-button>
    <b-button variant="dark">Dark</b-button>
  </div>
  <template #html>

```vue-html
<b-button variant="primary">Primary</b-button>
<b-button variant="secondary">Secondary</b-button>
<b-button variant="success">Success</b-button>
<b-button variant="danger">Danger</b-button>
<b-button variant="warning">Warning</b-button>
<b-button variant="info">Info</b-button>
<b-button variant="light">Light</b-button>
<b-button variant="dark">Dark</b-button>
```

  </template>
</HighlightCard>

### Outline color variants

In need of a button, but not the hefty background colors they bring? Use the `outline-*` variants to
remove all background images and colors on any `<b-button>`:

`outline-primary`, `outline-secondary`, `outline-success`, `outline-danger`, `outline-warning`,
`outline-info`, `outline-light` and `outline-dark`.

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button variant="outline-primary">Primary</b-button>
    <b-button variant="outline-secondary">Secondary</b-button>
    <b-button variant="outline-success">Success</b-button>
    <b-button variant="outline-danger">Danger</b-button>
    <b-button variant="outline-warning">Warning</b-button>
    <b-button variant="outline-info">Info</b-button>
    <b-button variant="outline-light">Light</b-button>
    <b-button variant="outline-dark">Dark</b-button>
  </div>
  <template #html>

```vue-html
<b-button variant="outline-primary">Primary</b-button>
<b-button variant="outline-secondary">Secondary</b-button>
<b-button variant="outline-success">Success</b-button>
<b-button variant="outline-danger">Danger</b-button>
<b-button variant="outline-warning">Warning</b-button>
<b-button variant="outline-info">Info</b-button>
<b-button variant="outline-light">Light</b-button>
<b-button variant="outline-dark">Dark</b-button>
```

  </template>
</HighlightCard>

### Link variant

Variant `link` will render a button with the appearance of a link while maintaining the default
padding and size of a button.

<HighlightCard>
  <b-button variant="link">Link</b-button>
  <template #html>

```vue-html
<b-button variant="link">Link</b-button>
```

  </template>
</HighlightCard>

**Tip:** remove the hover underline from a link variant button by adding the Bootstrap v4.3 utility
class `text-decoration-none` to `<b-button>`.

## Block level buttons

Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

<HighlightCard>
  <div class="d-grid gap-2">
    <b-button block variant="primary">Block Level Button</b-button>
    <b-button block variant="primary">Block Level Button</b-button>
  </div>
  <template #html>

```vue-html
  <b-button block variant="primary">Block Level Button</b-button>
  <b-button block variant="primary">Block Level Button</b-button>
```

  </template>
</HighlightCard>

**Note:** Bootstrap 5 no long supports the `.btn-block` class, so it's removed. Use bootstrap 5's utility classes to get the same effect. [See](https://getbootstrap.com/docs/5.0/components/buttons/#block-buttons)

## Pill style

Prefer buttons with a more rounded-pill style? Just set the prop `pill` to true.

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button pill>Button</b-button>
    <b-button pill variant="primary">Button</b-button>
    <b-button pill variant="outline-secondary">Button</b-button>
    <b-button pill variant="success">Button</b-button>
    <b-button pill variant="outline-danger">Button</b-button>
    <b-button pill variant="info">Button</b-button>
  </div>
  <template #html>

```vue-html
<b-button pill>Button</b-button>
<b-button pill variant="primary">Button</b-button>
<b-button pill variant="outline-secondary">Button</b-button>
<b-button pill variant="success">Button</b-button>
<b-button pill variant="outline-danger">Button</b-button>
<b-button pill variant="info">Button</b-button>
```

  </template>
</HighlightCard>

This prop adds the Bootstrap v5 utility class `.rounded-pill` on the rendered button.

## Squared style

Prefer buttons with a more square corner style? Just set the prop `squared` to true.

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button squared>Button</b-button>
    <b-button squared variant="primary">Button</b-button>
    <b-button squared variant="outline-secondary">Button</b-button>
    <b-button squared variant="success">Button</b-button>
    <b-button squared variant="outline-danger">Button</b-button>
    <b-button squared variant="info">Button</b-button>
  </div>
  <template #html>

```vue-html
<b-button squared>Button</b-button>
<b-button squared variant="primary">Button</b-button>
<b-button squared variant="outline-secondary">Button</b-button>
<b-button squared variant="success">Button</b-button>
<b-button squared variant="outline-danger">Button</b-button>
<b-button squared variant="info">Button</b-button>
```

  </template>
</HighlightCard>

The `squared` prop adds the Bootstrap v5 utility class `.rounded-0` on the rendered button. The
`pill` prop takes precedence over the `squared` prop.

## Disabled state

Set the `disabled` prop to disable button default functionality. `disabled` also works with buttons
rendered as `<a>` elements and `<router-link>` (i.e. with the `href` or `to` prop set).

<HighlightCard>
  <div class="d-flex gap-2">
    <b-button disabled size="lg" variant="primary">Disabled</b-button>
    <b-button disabled size="lg">Also Disabled</b-button>
  </div>
  <template #html>

```vue-html
<b-button disabled size="lg" variant="primary">Disabled</b-button>
<b-button disabled size="lg">Also Disabled</b-button>
```

  </template>
</HighlightCard>

## Pressed state and toggling

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when the
prop `pressed` is set to `true`.

The `pressed` prop can be set to one of three values:

- `true`: Sets the `.active` class and adds the attribute `aria-pressed="true"`.
- `false`: Clears the `.active` class and adds the attribute `aria-pressed="false"`.
- `null`: (default) Neither the class `.active` nor the attribute `aria-pressed` will be set.

To create a button that can be toggled between active and non-active states, use the `v-model` (available in Vue 3.0+) on the `pressed` property by specifying `v-model:pressed`

<HighlightCard>
  <h5>Pressed and un-pressed state</h5>
  <div class="d-flex gap-2">
    <b-button :pressed="true" variant="success">Always Pressed</b-button>
    <b-button :pressed="false" variant="success">Not Pressed</b-button>
  </div>
  <h5 class="mt-3">Toggleable Button</h5>
  <b-button v-model:pressed="buttonToggle" variant="primary">Toggle Me</b-button>
  <p>Pressed State: <strong>{{ buttonToggle }}</strong></p>
  <h5>In a button group</h5>
  <b-button-group size="sm">
    <b-button
      v-for="(btn, idx) in buttons"
      :key="idx"
      v-model:pressed="btn.state"
      variant="primary"
    >
      {{ btn.caption }}
    </b-button>
  </b-button-group>
  <p>Pressed States: <strong>{{ btnStates }}</strong></p>
  <template #html>

```vue-html
<template>
  <h5>Pressed and un-pressed state</h5>
  <div class="d-flex gap-2">
    <b-button :pressed="true" variant="success">Always Pressed</b-button>
    <b-button :pressed="false" variant="success">Not Pressed</b-button>
  </div>
  <h5 class="mt-3">Toggleable Button</h5>
  <b-button v-model:pressed="buttonToggle" variant="primary">Toggle Me</b-button>
  <p>Pressed State: <strong>{{ buttonToggle }}</strong></p>
  <h5>In a button group</h5>
  <b-button-group size="sm">
    <b-button
      v-for="(btn, idx) in buttons"
      :key="idx"
      v-model:pressed="btn.state"
      variant="primary"
    >
      {{ btn.caption }}
    </b-button>
  </b-button-group>
  <p>Pressed States: <strong>{{ btnStates }}</strong></p>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const buttonToggle = ref(false)
const buttons = ref([
  {caption: 'Toggle 1', state: true},
  {caption: 'Toggle 2', state: false},
  {caption: 'Toggle 3', state: true},
  {caption: 'Toggle 4', state: false},
])

const btnStates = computed(() => buttons.value.map((b) => b.state))
</script>
```

  </template>
</HighlightCard>

If using toggle button style for a radio or checkbox style interface, it is best to use the built-in
`button` style support of [`<b-form-radio-group>`](/docs/components/form-radio) and
[`<b-form-checkbox-group>`](/docs/components/form-checkbox).

## Router link support

Refer to the [`Router support`](/docs/reference/router-links) reference docs for the various
supported `<router-link>` related props.

## Accessibility

When the `href` prop is set to `'#'`, `<b-button>` will render a link (`<a>`) element with attribute
`role="button"` set and appropriate keydown listeners (<kbd>Enter</kbd> and <kbd>Space</kbd>) so
that the link acts like a native HTML `<button>` for screen reader and keyboard-only users. When
disabled, the `aria-disabled="true"` attribute will be set on the `<a>` element.

When the `href` is set to any other value (~~or the `to` prop is used~~), `role="button"` will not be
added, nor will the keyboard event listeners be enabled.

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/button.data'
import {ref, computed} from 'vue'
import {BButtonGroup, BButton} from 'bootstrap-vue-next'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'

const buttonToggle = ref(false);
const buttons = ref([
  {caption: 'Toggle 1', state: true},
  {caption: 'Toggle 2', state: false},
  {caption: 'Toggle 3', state: true},
  {caption: 'Toggle 4', state: false},
])

const btnStates = computed(() => buttons.value.map(b => b.state))
</script>

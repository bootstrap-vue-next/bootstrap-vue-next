# Button

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Use Bootstrap's custom `b-button` component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

</div>

## Overview

BootstrapVueNext's `<BButton>` component generates either a `<button>` element, `<a>` element, or `<RouterLink>` component with the styling of a button.

<HighlightCard>
  <div class="d-flex gap-2">
    <BButton>Button</BButton>
    <BButton variant="danger">Button</BButton>
    <BButton variant="success">Button</BButton>
    <BButton variant="outline-primary">Button</BButton>
  </div>
  <template #html>

```vue-html
<BButton>Button</BButton>
<BButton variant="danger">Button</BButton>
<BButton variant="success">Button</BButton>
<BButton variant="outline-primary">Button</BButton>
```

  </template>
</HighlightCard>

## Element type

The `<BButton>` component generally renders a `<button>` element. However, you can also render an
`<a>` element by providing an `href` prop value. You may also generate `vue-router` `<RouterLink>`
when providing a value for the `to` prop (`vue-router` is required).

<HighlightCard>
  <div class="d-flex gap-2">
    <BButton>I am a Button</BButton>
    <BButton href="#">I am a Link</BButton>
  </div>
  <template #html>

```vue-html
<div>
  <BButton>I am a Button</BButton>
  <BButton href="#">I am a Link</BButton>
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
    <BButton size="sm" class="mx-1">Small Button</BButton>
    <BButton class="mx-1">Default Button</BButton>
    <BButton size="lg" class="mx-1">Large Button</BButton>
  </div>
  <template #html>

```vue-html
<BButton size="sm">Small Button</BButton>
<BButton>Default Button</BButton>
<BButton size="lg">Large Button</BButton>
```

  </template>
</HighlightCard>

## Contextual variants

Use the `variant` prop to generate the various Bootstrap contextual button variants.

By default, `<BButton>` will render with the `secondary` variant.

The `variant` prop adds the Bootstrap v4.3 class `.btn-<variant>` on the rendered button.

### Solid color variants

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` and `dark`.

<HighlightCard>
  <div class="d-flex gap-2">
    <BButton variant="primary">Primary</BButton>
    <BButton variant="secondary">Secondary</BButton>
    <BButton variant="success">Success</BButton>
    <BButton variant="danger">Danger</BButton>
    <BButton variant="warning">Warning</BButton>
    <BButton variant="info">Info</BButton>
    <BButton variant="light">Light</BButton>
    <BButton variant="dark">Dark</BButton>
  </div>
  <template #html>

```vue-html
<BButton variant="primary">Primary</BButton>
<BButton variant="secondary">Secondary</BButton>
<BButton variant="success">Success</BButton>
<BButton variant="danger">Danger</BButton>
<BButton variant="warning">Warning</BButton>
<BButton variant="info">Info</BButton>
<BButton variant="light">Light</BButton>
<BButton variant="dark">Dark</BButton>
```

  </template>
</HighlightCard>

### Outline color variants

In need of a button, but not the hefty background colors they bring? Use the `outline-*` variants to
remove all background images and colors on any `<BButton>`:

`outline-primary`, `outline-secondary`, `outline-success`, `outline-danger`, `outline-warning`,
`outline-info`, `outline-light` and `outline-dark`.

<HighlightCard>
  <div class="d-flex gap-2">
    <BButton variant="outline-primary">Primary</BButton>
    <BButton variant="outline-secondary">Secondary</BButton>
    <BButton variant="outline-success">Success</BButton>
    <BButton variant="outline-danger">Danger</BButton>
    <BButton variant="outline-warning">Warning</BButton>
    <BButton variant="outline-info">Info</BButton>
    <BButton variant="outline-light">Light</BButton>
    <BButton variant="outline-dark">Dark</BButton>
  </div>
  <template #html>

```vue-html
<BButton variant="outline-primary">Primary</BButton>
<BButton variant="outline-secondary">Secondary</BButton>
<BButton variant="outline-success">Success</BButton>
<BButton variant="outline-danger">Danger</BButton>
<BButton variant="outline-warning">Warning</BButton>
<BButton variant="outline-info">Info</BButton>
<BButton variant="outline-light">Light</BButton>
<BButton variant="outline-dark">Dark</BButton>
```

  </template>
</HighlightCard>

### Link variant

Variant `link` will render a button with the appearance of a link while maintaining the default
padding and size of a button.

<HighlightCard>
  <BButton variant="link">Link</BButton>
  <template #html>

```vue-html
<BButton variant="link">Link</BButton>
```

  </template>
</HighlightCard>

**Tip:** remove the hover underline from a link variant button by adding the Bootstrap v4.3 utility
class `text-decoration-none` to `<BButton>`.

## Block level buttons

Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

<HighlightCard>
  <div class="d-grid gap-2">
    <BButton block variant="primary">Block Level Button</BButton>
    <BButton block variant="primary">Block Level Button</BButton>
  </div>
  <template #html>

```vue-html
  <BButton block variant="primary">Block Level Button</BButton>
  <BButton block variant="primary">Block Level Button</BButton>
```

  </template>
</HighlightCard>

**Note:** Bootstrap 5 no long supports the `.btn-block` class, so it's removed. Use bootstrap 5's utility classes to get the same effect. [See](https://getbootstrap.com/docs/5.0/components/buttons/#block-buttons).

## Pill style

Prefer buttons with a more rounded-pill style? Just set the prop `pill` to true.

<HighlightCard>
  <div class="d-flex gap-2">
    <BButton pill>Button</BButton>
    <BButton pill variant="primary">Button</BButton>
    <BButton pill variant="outline-secondary">Button</BButton>
    <BButton pill variant="success">Button</BButton>
    <BButton pill variant="outline-danger">Button</BButton>
    <BButton pill variant="info">Button</BButton>
  </div>
  <template #html>

```vue-html
<BButton pill>Button</BButton>
<BButton pill variant="primary">Button</BButton>
<BButton pill variant="outline-secondary">Button</BButton>
<BButton pill variant="success">Button</BButton>
<BButton pill variant="outline-danger">Button</BButton>
<BButton pill variant="info">Button</BButton>
```

  </template>
</HighlightCard>

This prop adds the Bootstrap v5 utility class `.rounded-pill` on the rendered button.

## Squared style

Prefer buttons with a more square corner style? Just set the prop `squared` to true.

<HighlightCard>
  <div class="d-flex gap-2">
    <BButton squared>Button</BButton>
    <BButton squared variant="primary">Button</BButton>
    <BButton squared variant="outline-secondary">Button</BButton>
    <BButton squared variant="success">Button</BButton>
    <BButton squared variant="outline-danger">Button</BButton>
    <BButton squared variant="info">Button</BButton>
  </div>
  <template #html>

```vue-html
<BButton squared>Button</BButton>
<BButton squared variant="primary">Button</BButton>
<BButton squared variant="outline-secondary">Button</BButton>
<BButton squared variant="success">Button</BButton>
<BButton squared variant="outline-danger">Button</BButton>
<BButton squared variant="info">Button</BButton>
```

  </template>
</HighlightCard>

The `squared` prop adds the Bootstrap v5 utility class `.rounded-0` on the rendered button. The
`pill` prop takes precedence over the `squared` prop.

## Disabled state

Set the `disabled` prop to disable button default functionality. `disabled` also works with buttons
rendered as `<a>` elements and `<RouterLink>` (i.e. with the `href` or `to` prop set).

<HighlightCard>
  <div class="d-flex gap-2">
    <BButton disabled size="lg" variant="primary">Disabled</BButton>
    <BButton disabled size="lg">Also Disabled</BButton>
  </div>
  <template #html>

```vue-html
<BButton disabled size="lg" variant="primary">Disabled</BButton>
<BButton disabled size="lg">Also Disabled</BButton>
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

To create a button that can be toggled between active and non-active states, use the `v-model` (available in Vue 3.0+) on the `pressed` property by specifying `v-model:pressed`.

<HighlightCard>
  <h5>Pressed and un-pressed state</h5>
  <div class="d-flex gap-2">
    <BButton :pressed="true" variant="success">Always Pressed</BButton>
    <BButton :pressed="false" variant="success">Not Pressed</BButton>
  </div>
  <h5 class="mt-3">Toggleable Button</h5>
  <BButton v-model:pressed="buttonToggle" variant="primary">Toggle Me</BButton>
  <p>Pressed State: <strong>{{ buttonToggle }}</strong></p>
  <h5>In a button group</h5>
  <BButtonGroup size="sm">
    <BButton
      v-for="(btn, idx) in buttons"
      :key="idx"
      v-model:pressed="btn.state"
      variant="primary"
    >
      {{ btn.caption }}
    </BButton>
  </BButtonGroup>
  <p>Pressed States: <strong>{{ btnStates }}</strong></p>
  <template #html>

```vue
<template>
  <h5>Pressed and un-pressed state</h5>
  <div class="d-flex gap-2">
    <BButton :pressed="true" variant="success">Always Pressed</BButton>
    <BButton :pressed="false" variant="success">Not Pressed</BButton>
  </div>
  <h5 class="mt-3">Toggleable Button</h5>
  <BButton v-model:pressed="buttonToggle" variant="primary">Toggle Me</BButton>
  <p>
    Pressed State: <strong>{{ buttonToggle }}</strong>
  </p>
  <h5>In a button group</h5>
  <BButtonGroup size="sm">
    <BButton
      v-for="(btn, idx) in buttons"
      :key="idx"
      v-model:pressed="btn.state"
      variant="primary"
    >
      {{ btn.caption }}
    </BButton>
  </BButtonGroup>
  <p>
    Pressed States: <strong>{{ btnStates }}</strong>
  </p>
</template>

<script setup lang="ts">
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
`button` style support of [`<BFormRadioGroup>`](/docs/components/form-radio) and
[`<BFormCheckboxGroup>`](/docs/components/form-checkbox).

## Router link support

Refer to the [`Router support`](/docs/reference/router-links) reference docs for the various
supported `<RouterLink>` related props.

## Accessibility

When the `href` prop is set to `'#'`, `<BButton>` will render a link (`<a>`) element with attribute
`role="button"` set and appropriate keydown listeners (<kbd>Enter</kbd> and <kbd>Space</kbd>) so
that the link acts like a native HTML `<button>` for screen reader and keyboard-only users. When
disabled, the `aria-disabled="true"` attribute will be set on the `<a>` element.

When the `href` is set to any other value (~~or the `to` prop is used~~), `role="button"` will not be
added, nor will the keyboard event listeners be enabled.

<ComponentReference :data="data" />

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

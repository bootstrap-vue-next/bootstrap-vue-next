# Button

<PageHeader>

Use Bootstrap's custom `BButton` component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.

</PageHeader>

## Overview

BootstrapVueNext's `BButton` component generates either a `<button>` element, `<a>` element, or `RouterLink` component with the styling of a button.

<<< DEMO ./demo/ButtonOverview.vue#template{vue-html}

## Element type

The `BButton` component generally renders a `<button>` element. However, you can also render an
`<a>` element by providing an `href` prop value. You may also generate `vue-router` `RouterLink`
when providing a value for the `to` prop (`vue-router` is required).

<<< DEMO ./demo/ButtonElementType.vue#template{vue-html}

## Type

You can specify the button's type by setting the prop `type` to `'button'`, `'submit'` or `'reset'`.
The default type is `'button'`.

Note the `type` prop has no effect when either `href` or `to` props are set.

## Sizing

Fancy larger or smaller buttons? Specify `lg` or `sm` via the `size` prop.

<<< DEMO ./demo/ButtonSizing.vue#template{vue-html}

## Contextual variants

Use the `variant` prop to generate the various Bootstrap contextual button variants.

By default, `BButton` will render with the `secondary` variant.

The `variant` prop adds the Bootstrap class `.btn-<variant>` on the rendered button.
See the [Color Variants](/docs/reference/color-variants) page for details.

### Solid color variants

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` and `dark`.

<<< DEMO ./demo/ButtonContextualVariants.vue#template{vue-html}

### Outline color variants

In need of a button, but not the hefty background colors they bring? Use the `outline-*` variants to
remove all background images and colors on any `BButton`:

`outline-primary`, `outline-secondary`, `outline-success`, `outline-danger`, `outline-warning`,
`outline-info`, `outline-light` and `outline-dark`.

<<< DEMO ./demo/ButtonOutlineVariants.vue#template{vue-html}

### Link variant

Variant `link` will render a button with the appearance of a link while maintaining the default
padding and size of a button.

<<< DEMO ./demo/ButtonLinkVariant.vue#template{vue-html}

**Tip:** remove the hover underline from a link variant button by setting `underline-opacity="0"`.

## Block level buttons

Create responsive stacks of full-width, “block buttons” by wrapping the button(s) in a div and specifying
`d-grid` and `gap-*`. By using CSS utilities instead a boolean property on the button, we have much greater
control over spacing, alignment, and responsive behaviors. See the
[Bootstrap 5](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons)
documentation for details

<<< DEMO ./demo/ButtonBlockLevel.vue#template{vue-html}

## Pill style

Prefer buttons with a more rounded-pill style? Just set the prop `pill` to true.

<<< DEMO ./demo/ButtonPillStyle.vue#template{vue-html}

This prop adds the Bootstrap v5 utility class `.rounded-pill` on the rendered button.

## Squared style

Prefer buttons with a more square corner style? Just set the prop `squared` to true.

<<< DEMO ./demo/ButtonSquaredStyle.vue#template{vue-html}

The `squared` prop adds the Bootstrap v5 utility class `.rounded-0` on the rendered button. The
`pill` prop takes precedence over the `squared` prop.

## Disabled state

Set the `disabled` prop to disable button default functionality. `disabled` also works with buttons
rendered as `<a>` elements and `RouterLink` (i.e. with the `href` or `to` prop set).

<<< DEMO ./demo/ButtonDisabledState.vue#template{vue-html}

## Pressed state and toggling

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when the
prop `pressed` is set to `true`.

The `pressed` prop can be set to one of three values:

- `true`: Sets the `.active` class and adds the attribute `aria-pressed="true"`.
- `false`: Clears the `.active` class and adds the attribute `aria-pressed="false"`.
- `null`: (default) Neither the class `.active` nor the attribute `aria-pressed` will be set.

To create a button that can be toggled between active and non-active states, use the `v-model` (available in Vue 3.0+) on the `pressed` property by specifying `v-model:pressed`.

<<< DEMO ./demo/ButtonPressedState.vue#template{vue-html}

If using toggle button style for a radio or checkbox style interface, it is best to use the built-in
`button` style support of [`BFormRadioGroup`](/docs/components/form-radio) and
[`BFormCheckboxGroup`](/docs/components/form-checkbox).

## Loading

`BButton` supports several properties to indicate a loading state. When `loading` is true, the
loading state is active, otherwise the normal button is displayed. When loading is active, `loading-text`
is shown along with a spinner. If `loading-fill` is true, the button shows only the spinner and the
`loading-text` is ignored. You can also override the spinner with an arbitrary component by
using the `loading-spinner` slot or the entire content of the button with the `loading` slot.

<<< DEMO ./demo/ButtonLoading.vue#template{vue-html}

## Router link support

Refer to the [`Router support`](/docs/reference/router-links) reference docs for the various
supported `RouterLink` related props.

## Accessibility

When the `href` prop is set to `'#'`, `BButton` will render a link (`<a>`) element with attribute
`role="button"` set and appropriate keydown listeners (<kbd>Enter</kbd> and <kbd>Space</kbd>) so
that the link acts like a native HTML `<button>` for screen reader and keyboard-only users. When
disabled, the `aria-disabled="true"` attribute will be set on the `<a>` element.

When the `href` is set to any other value (~~or the `to` prop is used~~), `role="button"` will not be
added, nor will the keyboard event listeners be enabled.

<NotYetImplemented>The `role="button"` behavior is partially implemented, but the keyboard listen are not</NotYetImplemented>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/button.data'
</script>

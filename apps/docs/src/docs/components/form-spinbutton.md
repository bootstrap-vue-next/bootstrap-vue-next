# Form Spinbutton

<PageHeader>

The Form SpinButton allows the user to adjusting a numeric range with finite control

</PageHeader>

## Overview

The component `BFormSpinbutton` is
[WAI-ARIA compliant](https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton), allowing for [keyboard control](#accessibility), and supports both horizontal (default) and vertical layout

Similar to range type inputs, BootstrapVue's `BFormSpinbutton` does not allow the user to type in a value

<<< DEMO ./demo/FormSpinbuttonOverview.vue

The <kbd>ArrowUp</kbd> and <kbd>ArrowDown</kbd> keys can be used to increment or decrement the value

To be submitted via native browser form submits, the spinbutton must have a name set via the `name` prop. This will create a hidden input containing the current value of the spinbutton. If the spinbutton does not have a value, the hidden input's value will be an empty string

## `v-model` value

The `v-model` always returns the value as a number. The `v-model` can be `null` if no initial value is set

If the initial value is `null` no value will be displayed in the spinbutton. Use the `placeholder` prop to show a string when the spinbutton has no value

## Min, max, and step

Spinbuttons have a default range from `1` to `100`, which can be changed by setting the `min` and `max` props. The default step increment is `1`, and can be changed via the `step` prop (decimal values allowed)

<<< DEMO ./demo/FormSpinbuttonStep.vue#template{vue-html}

## Number wrapping

By default, when the value is increased to the `max` value, it pressing the increment button will have no effect. Similarly when the value is as the `min` value, pressing the decrement button will have no effect

To allow the spin button to wrap from max to min when incrementing (or min to max when decrementing), set the `wrap` prop to true

<<< DEMO ./demo/FormSpinbuttonWrapping.vue#template{vue-html}

## Styling

### Sizing

As with other form controls, `BFormSpinbutton` supports small and large sizing via setting the size prop to either 'sm' or 'lg', respectively

<<< DEMO ./demo/FormSpinbuttonSizing.vue#template{vue-html}

### Inline

<<< DEMO ./demo/FormSpinbuttonInline.vue#template{vue-html}

The `Spinbutton` will automatically adjust it's width to fit the displayed value. See the [Width](#width) section below for details on controlling or setting the width

### Vertical

`Spinbuttons` can be oriented in vertical mode:

<<< DEMO ./demo/FormSpinbuttonVertical.vue#template{vue-html}

Vertical spin buttons can also be sized using the `size` prop. When in vertical mode, the spin button is rendered as an inline element

The spin button will automatically adjust its width to fit the displayed value. See the [Width section](#width) below for details on controlling or setting the width.

### Width

The control (when not `vertical` or `inline`) will expand to the maximum width of the parent container You can control width via utility classes such as `w-25`, `w-50`, `w-75`, or use styles to set the width

When either `vertical` or `inline` is set, the control will adjust its width based on the displayed value. You can use css style to control the overall width of the control (i.e. `style="width: 10rem`)

### Number formatting and locale

By default `BFormSpinbutton` will format the displayed number in the users browser default locale. You can change the localized formatting by specifying a locale (or array of locales) via the `locale` prop. Number format localization is performed via Intl.NumberFormat. The locales available will be dependent on the browser implementation. Localization only controls the presentation of the value to the user, and does not affect the `v-model`

<<< DEMO ./demo/FormSpinbuttonFormatting.vue

Alternatively, you can provide your own number formatter function to format the value displayed. This is useful for displaying text instead of a number, or if you want to implement different features of `Intl.NumberFormat`

To provide a formatter function, set the prop `formatter-fn` to a method reference. The formatter is passed a single argument which is the current value. Note the formatter only affects the value displayed to the user and does not affect the v-model

### Custom Formatter

<<< DEMO ./demo/FormSpinbuttonCustomFormatting.vue

## Disabled and readonly states

<<< DEMO ./demo/FormSpinbuttonReadonly.vue

## Validation states

When you default to a null value, and the user has not selected a value, you can use the state prop to apply one of the contextual validation styles to the component

- `true` applies the valid styling to the component
- `false` applies the invalid styling to the component
- `null` applies no contextual styling (the default)

## Required prop

Note that the `required` prop only generates the `aria-required="true"` attribute on the component, and does not perform any validation on form submit. You must validate the `v-model` in your application logic

Note that if the prop `required` is set, and the `v-model` is `null`, the attribute `aria-invalid="true"` will be rendered on the component

## Events

The `update:model-value` event is used to update the `v-model` and is emitted any time the value changes

The `change` event is emitted once the user releases the mouse button (when pressing the increment or decrement buttons) or when the user releases the <kbd>ArrowDown</kbd> or <kbd>ArrowUp</kbd> key. This can be handy when you need to debounce the input

The following example illustrates the difference between the `update:model-value` and `change` events. Click and hold the increment or decrement button (or use the up/down arrow keys)

<<< DEMO ./demo/FormSpinbuttonEvents.vue

## Accessibility

The following keyboard controls are available when the spin button is focused:

- <kbd>Home</kbd> Sets the value to the `min` value
- <kbd>End</kbd> Sets the value to the `max` value
- <kbd>ArrowUp</kbd> Increases the value by the step amount
- <kbd>ArrowDown</kbd> Decreases the value by the step amount
- <kbd>PageUp</kbd> Increases the value by the step amount times the `repeat-step-multiplier` amount
- <kbd>PageDown</kbd> Decreases the value by the step amount times the `repeat-step-multiplier` amount

Note the the `repeat-delay`, `repeat-threshold` and `repeat-interval` only applies to the <kbd>ArrowUp</kbd> or <kbd>ArrowDown</kbd> keys

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formSpinbutton.data'
</script>

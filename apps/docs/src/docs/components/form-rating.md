---
description: 'Custom star rating component for entering or displaying rating values. Fully WAI-ARIA accessible with keyboard control, supporting both interactive and readonly modes with customizable styling and icons.'
---

## Overview

Rating values range from 1 to the number of stars allowed (default stars is `5`, minimum stars is `3`). Since `BFormRating` uses the Bootstrap class `form-control`, it can easily be placed inside [input groups](/docs/components/input-group.html).

There are two main modes for `BFormRating`: interactive and readonly.

Interactive mode allows the user to choose a rating from 1 to the number of stars (default 5) in whole number increments.

**Interactive rating (input mode):**

<<< DEMO ./demo/RatingInteractive.vue

Readonly mode is used for displaying an aggregated rating, and supports `half` stars.

**Readonly (non-interactive) rating:**

<<< DEMO ./demo/RatingNonInteractive.vue

## Styling

### Variant and color

Easily apply one of the Bootstrap theme color variants to the rating icon via the `variant` prop.
The default is to use the default form control text color.

<<< DEMO ./demo/RatingVariant.vue

To apply a _custom color_, use the `color` prop which accepts a standard CSS color name, HEX color
value (`#...`) or RGB/RGBA (`rgb(...)`/`rgba(...)`) color value:

<<< DEMO ./demo/RatingCustomColor.vue

**Notes:**

- The prop `color` takes precedence over the `variant` prop
- Variants translate to the `text-{variant}` utility class on the icon

### Number of stars

By default, `<BFormRating>` defaults to `5` stars. You can change the number of stars via the
`stars` prop. The minimum allowed stars is `3`.

<<< DEMO ./demo/RatingStars.vue

### Show value

By default, `<BFormRating>` does not display the current numerical value. To show the current value
simply set the `show-value` prop to `true`. To control the precision (number of digits after the
decimal) simply set the `precision` prop to the number of digits after the decimal to show. The
`precision` setting is useful when showing an aggregated or average rating value in `readonly` mode.

<<< DEMO ./demo/RatingValue.vue

**With precision set:**

<<< DEMO ./demo/RatingPrecision.vue

#### Show maximum value

Optionally, show the maximum rating possible by also setting the prop `show-value-max` to `true`:

<<< DEMO ./demo/RatingValueMax.vue

### Control sizing

Fancy a small or large rating control? Simply set the prop `size` to either `'sm'` or `'lg'`
respectively.

<<< DEMO ./demo/RatingSizing.vue

### Inline mode

By default, `<BFormRating>` occupies 100% width of the parent container. In some situations, you
may prefer the custom input to occupy only the space required for its contents. Simply set the
`inline` prop to `true` to render the component in inline mode:

<<< DEMO ./demo/RatingInline.vue

### Borderless

By default, `BFormRating` has standard Bootstrap form-control styling. To disable the default form-control border, simply set the no-border prop to true.

<<< DEMO ./demo/RatingBorder.vue

### Disabled

If you require additional information before a user can chose a ratings value, simply set the `disabled` prop to `true` to disable any user interactivity on the component:

<<< DEMO ./demo/RatingDisabled.vue

### Readonly

Readonly ratings remain focusable, but are not interactive. This state is useful for displaying an
aggregated or average ratings value. Fractional values are allowed and will result in the displaying
of _half icons_ when the `value` is not a whole number (the half icon threshold is `0.5`).

<<< DEMO ./demo/RatingReadOnly.vue

### Clear button

Optionally show a clear icon via the `show-clear` prop. The value will be set to `null` when the clear icon is clicked.

<<< DEMO ./demo/RatingClear.vue

**Notes:**

- The clear icon will not be shown when the props `readonly` or `disabled` are set.

#### Custom clear icon

You can replace the default clear icon using the `#icon-clear` slot.
This slot is **not scoped** — you can insert any content you like.

<<< DEMO ./demo/RatingCustomClear.vue

### Icons

By default, `BFormRating` uses built-in star SVG icons:

- Empty star: outlined star
- Half star: half-filled star
- Full star: filled star
- Clear button: x icon

#### Default icons styling

When using the default icons, you can style them with the `variant`, `color`, and `size` props. These props apply Bootstrap classes and styles to the built-in SVG icons.

#### Custom icons

To use completely custom icons, use the default scoped slot which provides access to `starIndex`, `isFilled`, and `isHalf` properties:

<<< DEMO ./demo/RatingCustomIcon.vue

**Important notes for custom icons:**

- The `variant`, `color`, and `size` props **do not apply** to custom icons provided via scoped slots
- You must handle all styling (colors, sizes, hover effects) yourself in your custom CSS
- You're responsible for implementing click handlers if needed: `@click="rating = starIndex"`
- Custom icons completely replace the default star rendering

#### Icon props (Advanced)

The `icon-empty`, `icon-half`, `icon-full`, and `icon-clear` props are available for specifying alternate Bootstrap Icon names, but require the corresponding Bootstrap Icon components to be registered. Most users should use the scoped slot approach shown above for custom icons.

## Form submission

If you intend to submit the rating value via standard form submission, set the `name` prop to the
desired form field name. A hidden input will be generated with the current value (or an empty string
if there is no value).

<NotYetImplemented />

## Using in input groups

The following is an example of placing `<BFormRating>` in an input group:

<NotYetImplemented />

## Internationalization

When a `locale` is specified, the displayed value (when the `show-value` prop is `true`) will be in
the browser's default locale. To change the locale, simple set the `locale` prop to the preferred
locale, or an array of preferred locales (most preferred locale first). This will affect the
optional displayed value and the left-to-right or right-to-left orientation of the component.

<NotYetImplemented />

## Implementation notes

The ratings control uses the Bootstrap v5 `form-control*`, `d-*` (display), and
`text-{variant}` classes, as well as BootstrapVue's custom CSS for proper styling.

<NotYetImplemented/>The root element of the control is an `<output>` element, which allows a `<label>` element to be
associated with it.

## Accessibility

To screen reader users `<BFormRating>` appears as a _slider_ type input input.

Keyboard navigation is employed to select the rating value, and mimics the keyboard controls of
`range` inputs:

- <kbd>Left</kbd> or <kbd>Down</kbd> will decrement the rating value by `1`
- <kbd>Right</kbd> or <kbd>Up</kbd> will increment the rating value by `1`
- When the [`locale`](#internationalization) resolves to a right-to-left language, the
  <kbd>Left</kbd> and <kbd>Right</kbd> behaviour is reversed.

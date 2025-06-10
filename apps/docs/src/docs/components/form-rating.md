# Form Rating

<PageHeader>

BootstrapVue's custom star rating component, `BFormRating`, is for entering or displaying a rating value. The component is fully WAI-ARIA accessible and supports keyboard control.

</PageHeader>

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

By default `<BFormRating>` does not display the current numerical value. To show the current value
simply set the `show-value` prop to `true`. To control the precision (number of digits after the
decimal) simply set the `precision` prop to the number of digits after the decimal to show. The
`precision` setting is useful when showing an aggregated or average rating value in `readonly` mode.

<<< DEMO ./demo/RatingValue.vue

**With precision set:**

<<< DEMO ./demo/RatingPrecision.vue

#### Show maximum value

Optionally show the maximum rating possible by also setting the prop `show-value-max` to `true`:

<<< DEMO ./demo/RatingValueMax.vue

### Control sizing

Fancy a small or large rating control? Simply set the prop `size` to either `'sm'` or `'lg'`
respectively.

<<< DEMO ./demo/RatingSizing.vue

### Inline mode

By default, `<BFormRating>` occupies 100% width of the parent container. In some situations you
may prefer the custom input to occupy only the space required for its contents. Simply set the
`inline` prop to `true` to render the component in inline mode:

### Readonly

Readonly ratings remain focusable, but are not interactive. This state is useful for displaying an
aggregated or average ratings value. Fractional values are allowed and will result in the displaying
of _half icons_ when the `value` is not a whole number (the half icon threshold is `0.5`).

<<< DEMO ./demo/RatingReadOnly.vue

<ComponentReference :data="data" />

<script lang="ts">
import {data} from '../../data/components/FormRating.data'

export default {
setup() {
return {data}
}
}
</script>

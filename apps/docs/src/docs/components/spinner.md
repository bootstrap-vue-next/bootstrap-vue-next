# Spinners

<PageHeader>

The `<BSpinner>` component can be used to show the loading state in your projects. They're
rendered only with basic HTML and CSS as a lightweight Vue component. Their appearance,
alignment, and sizing can be easily customized with a few built-in props and/or Bootstrap v5
utility classes.

</PageHeader>

Spinners can be placed just about anywhere, including inside buttons, alerts, and even `<BTable>`'s
busy slot.

<<< DEMO ./demo/SpinnerOverview.vue#template{vue-html}

## Spinner types

### Border spinner

Use the default `border` type spinners for a lightweight loading indicator.

<<< DEMO ./demo/SpinnerBorder.vue#template{vue-html}

### Growing spinner

If you don't fancy a `border` spinner, switch to the `grow` spinner by setting the prop `type` to
`'grow'`. While it doesn't technically spin, it does repeatedly grow!

<<< DEMO ./demo/SpinnerGrowing.vue#template{vue-html}

## Spinner color variants

Spinners use `currentColor` for their color, meaning it inherits the current font color. You can
customize the color using the standard text color variants using the `variant` prop, or place
classes or styles on the component to change its color.

The `variant` prop translates the variant name to the Bootstrap v4 class `.text-{variant}`, so if
you have custom defined text color variants, feel free to use them via the `variant` prop.

<<< DEMO ./demo/SpinnerColors.vue#template{vue-html}

::: info
**Why not use `border-color` utilities?** Each `border` spinner specifies a `transparent` border for
at least one side, so `.border-{color}` utilities would override that.
:::

## Size

Set the prop `small` to `true` to make a smaller spinner that can quickly be used within other components.

<<< DEMO ./demo/SpinnerSmall.vue#template{vue-html}

Or, use custom CSS or inline styles to change the dimensions as needed.

<<< DEMO ./demo/SpinnerSize.vue#template{vue-html}

## Alignment

Spinners in Bootstrap are built with `rem`s, currentColor, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities](https://getbootstrap.com/docs/5.3/utilities/spacing/) like `.m-5` for easy spacing.

<<< DEMO ./demo/SpinnerMargin.vue#template{vue-html}

### Placement

Use [flexbox utilities](https://getbootstrap.com/docs/5.3/utilities/flex/), [float utilities](https://getbootstrap.com/docs/5.3/utilities/float/), or [text alignment](https://getbootstrap.com/docs/5.3/utilities/text/) utilities to place spinners exactly where you need them in any situation.

#### Flex

Using flex utility classes:

<<< DEMO ./demo/SpinnerFlex.vue#template{vue-html}

#### Floats

Using float utility classes:

<<< DEMO ./demo/SpinnerFloats.vue#template{vue-html}

#### Text align

Using text alignment utility classes:

<<< DEMO ./demo/SpinnerTextAlign.vue#template{vue-html}

## Spinners in buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

<<< DEMO ./demo/SpinnerButtons.vue#template{vue-html}
<<< DEMO ./demo/SpinnerGrowButtons.vue#template{vue-html}

## Spinner accessibility

Place a hidden label text inside the spinner for screen reader users, via the `label` prop or `label` slot. The content will be placed _inside_ the spinner wrapped in a `<span>` element that has the class `visually-hidden`, which will make the label available to screen reader users.

For accessibility purposes, each spinner will automatically have a `role="status"` attribute when a label is provided. You can easily customize the role if required via prop `role`. The specified `role` will not be applied when no label is provided.

As well, when no label is provided, the spinner will automatically have the attribute `aria-hidden="true"` to hide the spinner from screen reader users.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/spinner.data'
</script>

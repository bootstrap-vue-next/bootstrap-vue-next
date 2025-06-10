# Progress

<PageHeader>

Use our custom progress component for displaying simple or complex progress bars, featuring
support for horizontally stacked bars, animated backgrounds, and text labels.

</PageHeader>

## Basic Usage

<<< DEMO ./demo/ProgressBasic.vue

## Value

Set the maximum value with the `max` prop (default is `100`), and the current value via the `value` prop (default `0`).

When creating multiple bars in a single process, place the value prop on the individual `BProgressBar` sub-components (see the [Multiple Bars](#multiple-bars) section below for more details)

## Labels

Add labels to your progress bars by either enabling `show-progress` (percentage of max) or `show-value` for the current absolute value. You may also set the precision (number of digits after the decimal) via the `precision` prop (default is `0` digits after the decimal).

<<< DEMO ./demo/ProgressLabels.vue

### Custom progress label

Need more control over the label? Provide your own label by using the default slot within a `BProgressBar` sub-component, or by using the `label` property on `BProgressBar`:

<<< DEMO ./demo/ProgressCustomLabels.vue

## Width

`<BProgress>` will always expand to the maximum with of its parent container. To change the width,
place `<BProgress>` in a standard Bootstrap column or apply one of the standard Bootstrap width
classes.

<<< DEMO ./demo/ProgressWidth.vue

## Height

The height of the progress bar can be controlled with the height prop. The height value should be a standard CSS dimension (px, rem, em, etc.). The default height is 1rem.

<<< DEMO ./demo/ProgressHeight.vue

## Backgrounds

Use background variants to change the appearance of individual progress bars. The default variant is `primary`.

<<< DEMO ./demo/ProgressBackgrounds.vue

## Striped Background

Set `striped` to apply a stripe via CSS gradient over the progress bar's background variant.

<<< DEMO ./demo/ProgressStriped.vue

## Animated Background

The striped gradient can also be animated by setting the `animated` prop.

<<< DEMO ./demo/ProgressAnimated.vue

::: info NOTE
If `animated` is true, `striped` will automatically be enabled.
:::

## Multiple bars

Include multiple `BProgressBar` sub-components in a `BProgress` component to build a horizontally stacked set of progress bars.

<<< DEMO ./demo/ProgressMultipleBars.vue

::: info NOTE

- height, if specified, should always set on the `<BProgress>` component.
- `<BProgressBar>` will not inherit value from `<BProgress>`.

:::

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/progress.data'
</script>

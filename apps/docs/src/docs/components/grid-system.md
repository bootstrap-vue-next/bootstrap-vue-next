# Grid System

<PageHeader>

Use the powerful mobile-first flexbox grid (via the `<BContainer>`, `<BRow>` and
`<BCol>` components) to build layouts of all shapes and sizes thanks to a twelve column system,
five default responsive tiers, CSS Sass variables and mixins, and dozens of predefined classes.

</PageHeader>

## Overview

Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

<<< DEMO ./demo/GridOverview.vue#template{vue-html}

The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent `<BContainer>`.

::: tip
New to or unfamiliar with flexbox? [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.
:::

## How it works

Breaking it down, here's how it works:

- Containers provide a means to center and horizontally pad your site's contents. Use
  `<BContainer>` for a responsive pixel width, `<BContainer fluid>` for `width: 100%` across all
  viewport and device sizes or set `fluid` to a [`Breakpoint`](/docs/types#breakpoint) value for a
  responsive container (e.g. `<BContainer fluid='md'`).
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for
  controlling the space between them. This `padding` is then counteracted on the rows with negative
  margins. This way, all the content in your columns is visually aligned down the left side.
- In a grid layout, content must be placed within columns and only columns may be immediate children
  of rows.
- Thanks to flexbox, grid columns without a set width will automatically layout with equal widths.
  For example, four instances of `<BCol sm="auto">` will each automatically be 25% wide for small
  breakpoints.
- Column prop `cols` indicates the number of columns you'd like to use out of the possible 12 per
  row regardless of breakpoint (starting at breakpoint `xs`). So, if you want three equal-width
  columns at any breakpoint, you can use `<BCol cols="4">`.
- Column props `sm`, `md`, `lg`, `xl`, `xxl` indicate the number of columns you'd like to use out of the
  possible 12 per row, at the various breakpoints. So, if you want three equal-width columns at
  breakpoint `sm`, you can use `<BCol sm="4">`. the special value `auto` can be used to take up the
  remaining available column space in a row.
- Column `width`s are set in percentages, so they're always fluid and sized relative to their parent
  element.
- Columns have horizontal `padding` to create the gutters between individual columns, however, you
  can remove the `margin` from `<BRow>` and `padding` from `<BCol>` by setting the `no-gutters`
  prop on `<BRow>`.
- To make the grid responsive, there are six grid breakpoints, one for each responsive breakpoint:
  all breakpoints (extra small), small, medium, large, extra large, and xxl.
- Grid breakpoints are based on minimum width media queries, meaning **they apply to that one
  breakpoint and all those above it** (e.g., `<BCol sm="4">` applies to small, medium, large, and
  extra large devices, but not the first `xs` breakpoint).
- You can use predefined grid classes or Sass mixins for more semantic markup. See the [Bootstrap 5 docs](https://getbootstrap.com/docs/5.3/layout/grid/#sass-variables) for details

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs),
like the
[inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).

## Containers

`<BContainer>` is the most basic layout element in Bootstrap. Choose from a
responsive, fixed-width container (meaning its `max-width` changes at each breakpoint) by default,
fluid-width (meaning it's 100% wide all the time) by setting 'fluid' prop, or responsive
containers where the container is fluid up until a specific breakpoint.

While containers can be nested, most layouts do not require a nested container.

The default breakpoint widths can be configured using Bootstrap V5.x SCSS variables. See the
[Grid options](#grid-options) section below.

### Default container

The default `<BContainer>` is a responsive, fixed-width container, meaning its `max-width` changes
at each viewport width breakpoint.

<<< FRAGMENT ./demo/ContainerDefault.vue#template{vue-html}

### Fluid width container

Using the `fluid` prop on `<BContainer>` will render a container that is always 100% width,
regardless of viewport breakpoint.

<<< FRAGMENT ./demo/ContainerFluid.vue#template{vue-html}

Setting the `fluid` prop to true (or an empty string) is equivalent to the Bootstrap
`.container-fluid` class.

### Responsive fluid containers

Responsive containers allow you to specify a container that is 100%
wide (fluid) until particular breakpoint is reached at which point a `max-width` is applied. For
example, setting prop `fluid` to `'md'` will render a container that is 100% wide to start until the
`'md'` breakpoint is reached, at which point it will become a standard non-fluid container.

<<< FRAGMENT ./demo/ContainerResponsive.vue#template{vue-html}

Setting the fluid prop to a breakpoint name translates to the Bootstrap class
`.container-{breakpoint}`.

Refer to the [Grid options section](#grid-options) table below for the default container width
values.

## Rows

Rows are wrappers for [columns](#columns). Each column has horizontal padding (called a
gutter) for controlling the space between them. This padding is then counteracted on the rows with
negative margins. This way, all the content in your columns is visually aligned down the left side.

You can remove the margin from `<BRow>` and padding from `<BCol>` by setting the `no-gutters` prop
on `<BRow>`.

::: info
`<BFormRow>` is deprecated, see our [migration guide](/docs/migration-guide#bform) for details.
:::

## Columns

`<BCol>` Must be placed inside a `<BRow>` component, or an element (such as a `<div>`) that has
the class `row` applied to it.

## Grid options

While Bootstrap uses `em` or `rem` units for defining most sizes, `px`s are used for grid
breakpoints and container widths. This is because the viewport width is in pixels and does not
change with the [font size](https://drafts.csswg.org/mediaqueries-3/#units).

See how aspects of the Bootstrap grid system work across multiple devices with a handy table.

<div class="table-responsive-sm">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th></th>
        <th>
          <strong>Extra small</strong> (xs)<br>
          <code>&lt;576px</code>
        </th>
        <th>
          <strong>Small</strong> (sm)<br>
          <code>≥576px</code>
        </th>
        <th>
          <strong>Medium</strong> (md)<br>
          <code>≥768px</code>
        </th>
        <th>
          <strong>Large</strong> (lg)<br>
          <code>≥992px</code>
        </th>
        <th>
          <strong>Extra large</strong> (xl)<br>
          <code>≥1200px</code>
        </th>
        <th>
          <strong>Extra extra large</strong> (xl)<br>
          <code>≥1400px</code>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-left">Max container width</th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
        <td>13200px</td>
      </tr>
      <tr>
        <th class="text-left">Prop</th>
        <td><code>cols="*"</code></td>
        <td><code>sm="*"</code></td>
        <td><code>md="*"</code></td>
        <td><code>lg="*"</code></td>
        <td><code>xl="*"</code></td>
        <td><code>xxl="*"</code></td>
      </tr>
      <tr>
        <th class="text-left"># of columns</th>
        <td colspan="6">12</td>
      </tr>
      <tr>
        <th class="text-left">Gutter width</th>
        <td colspan="6">30px (15px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-left">Nestable</th>
        <td colspan="6">Yes</td>
      </tr>
      <tr>
        <th class="text-left">Offset</th>
        <td><code>offset="*"</code></td>
        <td><code>offset-sm="*"</code></td>
        <td><code>offset-md="*"</code></td>
        <td><code>offset-lg="*"</code></td>
        <td><code>offset-xl="*"</code></td>
        <td><code>offset-xxl="*"</code></td>
      </tr>
      <tr>
        <th class="text-left">Order</th>
        <td><code>order="*"</code></td>
        <td><code>order-sm="*"</code></td>
        <td><code>order-md="*"</code></td>
        <td><code>order-lg="*"</code></td>
        <td><code>order-xl="*"</code></td>
        <td><code>order-xxl="*"</code></td>
      </tr>
    </tbody>
  </table>
</div>

**Notes:**

- There is no `xs` prop. The `cols` prop refers to the `xs` (smallest) breakpoint.
- The above breakpoint values are Bootstrap defaults. They can be customized via
  [SCSS variables](<[/docs/reference/theming](https://getbootstrap.com/docs/5.3/layout/grid/#customizing-the-grid)>).

### Container sizes

The following table outlines the default container maximum widths at the various breakpoints. These
may vary if you are using custom themed Bootstrap v4 SCSS/CSS.

| Container type | Extra small `<576px` | Small `≥576px` | Medium `≥768px` | Large `≥992px` | Extra large `≥1200px` | Extra extra large `≥1200px` |
| -------------- | -------------------- | -------------- | --------------- | -------------- | --------------------- | --------------------------- |
| _default_      | `100%`               | `540px`        | `720px`         | `960px`        | `1140px`              | `1140px`                    |
| `fluid`        | `100%`               | `100%`         | `100%`          | `100%`         | `100%`                | `100%`                      |
| `fluid="sm"`   | `100%`               | `540px`        | `720px`         | `960px`        | `1140px`              | `1320px`                    |
| `fluid="md"`   | `100%`               | `100%`         | `720px`         | `960px`        | `1140px`              | `1320px`                    |
| `fluid="lg"`   | `100%`               | `100%`         | `100%`          | `960px`        | `1140px`              | `1320px`                    |
| `fluid="xl"`   | `100%`               | `100%`         | `100%`          | `100%`         | `100%`                | `1320px`                    |
| `fluid="xxl"`  | `100%`               | `100%`         | `100%`          | `100%`         | `1140px`              | `1320px`                    |

Refer to the [Containers section](#containers) section above for additional information

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered prop
like `<BCol sm="6">`.

### Equal-width columns

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xl`.
Add any number of unit-less classes for each breakpoint you need and every column will be the same
width.

<<< DEMO ./demo/ColEqualWidth.vue#template{vue-html}

### Equal-width multi-line

Create equal-width columns that span multiple lines by inserting a `.w-100` where you want the
columns to break to a new line. Make the breaks responsive by mixing `.w-100` with some
[responsive display utilities](https://getbootstrap.com/docs/4.5/utilities/display/).

There was a [Safari flexbox bug](https://github.com/philipwalton/flexbugs#flexbug-11) that prevented
this from working without an explicit `flex-basis` or `border`. There are workarounds for older
browser versions, but they shouldn't be necessary if your target browsers don't fall into the buggy
versions.

<<< DEMO ./demo/ColEqualMultiline.vue#template{vue-html}

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the
sibling columns automatically resize around it. You may use predefined grid classes (as shown
below), grid mixins, or inline widths. Note that the other columns will resize no matter the width
of the center column.

<<< DEMO ./demo/ColOneWidth.vue#template{vue-html}

### Variable width content

Use `{breakpoint}="auto"` props to size columns based on the natural width of their content.

<<< DEMO ./demo/ColVariableWidth.vue#template{vue-html}

## Responsive classes

Bootstrap's grid includes six tiers of predefined classes for building complex responsive layouts.
Customize the size of your columns on extra small, small, medium, large, extra large, or extra extra large
devices however you see fit.

### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `col` and
`cols="*"` props. Specify a number of `cols` when you need a particularly sized column; otherwise,
feel free to stick to `col` (which is applied automatically if no `cols` are specified).

<<< DEMO ./demo/ColBreakpoints.vue#template{vue-html}

### Stacked to horizontal

Using a single set of `sm="*"` or `sm` (boolean for equal width @sm) props, you can create a basic
grid system that starts out stacked on extra small devices before becoming horizontal on desktop
(medium) devices.

<<< DEMO ./demo/ColStackedToHorizontal.vue#template{vue-html}

### Mix and match

Don't want your columns to simply stack in some grid tiers? Use a combination of different props for
each tier as needed. See the example below for a better idea of how it all works.

<<< DEMO ./demo/ColMixed.vue#template{vue-html}

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

**Note:** Internet Explorer 11 does not support vertical alignment of flex items when the flex
container has a `min-height` as shown below.
[See Flexbugs #3 for more details](https://github.com/philipwalton/flexbugs#flexbug-3).

### Vertical alignment

For vertical alignment of all grid cells in a row, use the `align-v` prop on `<BRow>`. Possible
values are `'start'`, `'center'`, `'end'`, `'fill`, `'baseline'`, and `'stretch'` from
[`AlignmentVertical`](/docs/migration-guide#alignment):

<<< DEMO ./demo/ContainerVerticalAlignment.vue#template{vue-html}

For individual grid cell vertical alignment, use the `align-self` prop on `<BCol>`. Possible values
are the values [`AlignmentVertical`](/docs/migration-guide#alignment) and `auto`:

<<< DEMO ./demo/ContainerCellAlignment.vue#template{vue-html}

### Horizontal alignment

To horizontally align grid cells within a row, use the `align-h` prop on `<BRow>`. Possible values
are: `'start'`, `'center'`, `'end'`, `'around'`, `'between'` and `'evenly'` from
[`AlignmentJustifyContent`](/docs/migration-guide#alignment):

<<< DEMO ./demo/ContainerHorizontalAlignment.vue#template{vue-html}

## Reordering

### Ordering columns

Use `order-*` props for controlling the visual order of your content. These props are responsive, so
you can set the order by breakpoint (e.g., `order="1" order-md="2"`). Includes support for 1 through
5 across all six grid tiers. `<BCol>` defaults to an order value of `0`.

<<< DEMO ./demo/ColOrder.vue#template{vue-html}

Ordering is controlled by flexbox's CSS style `order`.

### Offsetting columns

You can offset grid columns in two ways: our responsive `offset-*` props or the
[spacing](<[/docs/reference/spacing-classes](https://getbootstrap.com/docs/5.3/utilities/spacing/)>)
utility classes. Grid `offset-*` props are sized to match columns while margins utility classes are
more useful for quick layouts where the width of the offset is variable.

<<< DEMO ./demo/ColOffset.vue#template{vue-html}

In addition to column clearing at responsive breakpoints, you may need to reset offsets by setting
the offset to `0` at a larger breakpoint:

<<< DEMO ./demo/ColOffsetClear.vue#template{vue-html}

### Margin utilities on columns

You can use [margin and spacing](https://getbootstrap.com/docs/5.3/utilities/spacing/) utility classes
like `.mr-auto` to force sibling columns away from one another.

<<< DEMO ./demo/ColSpacing.vue#template{vue-html}

## Nesting grids

To nest your content with the default grid, add a new `<BRow>` and set of `<BCol>` components
within an existing `<BCol>` component. Nested rows should include a set of columns that add up to
12 or fewer (it is not required that you use all 12 available columns).

<<< DEMO ./demo/ColNesting.vue#template{vue-html}

## Row columns

<span class="badge badge-info small">Requires Bootstrap v4.4+ CSS</span>

Use the responsive `cols-*` props in `<BRow>` to quickly set the number of columns that best render
your content and layout. Whereas normal column widths are apply to the individual `<BCol>` columns
(e.g., `<BCol md="4">`), the row columns `col-*` props are set on the parent `<BRow>` as a
shortcut.

Use these row columns to quickly create basic grid layouts or to control your card layouts. The
default maximum number of row columns in Bootstrap v4.4 is `6` (unlike the regular columns which
have a default maximum of `12` columns)

The value specified in the `<BRow>` prop(s) is the number of columns to create per row (whereas the
props on `<BCol>` refer to the number of columns to occupy).

<<< DEMO ./demo/RowCol.vue#template{vue-html}

You can control the number of columns at each breakpoint level via the following `<BRow>` props:

- `cols` for `xs` and up screens
- `cols-sm` for `sm` and up screens
- `cols-md` for `md` and up screens
- `cols-lg` for `lg` and up screens
- `cols-xl` for `xl` and up screens
- `cols-xxl` for `xxl` and up screens

<<< DEMO ./demo/RowColResponsive.vue#template{vue-html}

## Utilities for layout

For faster mobile-friendly and responsive development, Bootstrap includes dozens of
[utility classes](/docs/reference/utility-classes) for showing, hiding, aligning, and spacing
content.

### Changing `display`

Use Bootstrap's [display utilities](<[/docs/reference/utility-classes](https://getbootstrap.com/docs/5.3/utilities/display/)>)
for responsively toggling common values of the `display` property. Mix it with the grid system,
content, or components to show or hide them across specific viewports.

### Flexbox options

Bootstrap 5 is built with flexbox, but not every element’s `display` has been changed to
`display: flex` as this would add many unnecessary overrides and unexpectedly change key browser
behaviors. Most of the components are built with flexbox enabled.

Should you need to add `display: flex` to an element, do so with `.d-flex` or one of the responsive
variants (e.g., `.d-sm-flex`). You’ll need this class or `display` value to allow the use of the
extra [flexbox utilities](<[/docs/reference/utility-classes](https://getbootstrap.com/docs/5.3/utilities/flex/)>)
for sizing, alignment, spacing, and more.

### Margin and padding

Use the `margin` and `padding` [spacing utilities](<[/docs/reference/utility-classes](https://getbootstrap.com/docs/5.3/utilities/spacing/)>)
o control how elements and components are spaced and sized. Bootstrap 5 includes a six-level scale for spacing
utilities, based on a `1rem` value default SASS `$spacer` variable. Choose values for all viewports
(e.g., `.me-3` for `margin-right: 1rem` in LTR), or pick responsive variants to target specific viewports
(e.g., `.me-md-3` for `margin-right: 1rem` —in LTR— starting at the `md` breakpoint).

### Toggle `visibility`

When toggling `display` isn’t needed, you can toggle the `visibility` of an element with the
[visibility utility classes](<[/docs/reference/utility-classes](https://getbootstrap.com/docs/5.3/utilities/visibility/)>).
Invisible elements will still affect the layout of the page, but are visually hidden from visitors.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/gridSystem.data'
</script>

<style lang="scss">
  .bv-example-row {
  .row {
    + .row {
      margin-top: 1rem;
    }

    > .col:not(.header),
    > [class^="col-"] {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      background-color: rgba(86, 61, 124, 0.15);
      border: 1px solid rgba(86, 61, 124, 0.2);
    }
  }
}

.bv-example-row-flex-cols {
  .row {
    min-height: 10rem;
    background-color: rgba(255, 0, 0, 0.1);
  }
}
</style>

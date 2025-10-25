---
description: "Placeholders are components that allows you to display a loading state for
several component types while your data is being fetched or computed."
---

# Placeholder

<PageHeader />

## Basic Usage

At the placeholder core, you have the `BPlaceholder` component:

<<< DEMO ./demo/PlaceholderBasic.vue#template{vue-html}

## Width

You can adjust the width using props `width` and `cols`. Cols is a number value 1-12, whereas width is a percentage. Width takes priority over cols.

<<< DEMO ./demo/PlaceholderWidth.vue#template{vue-html}

## Placeholder Animations

Bootstrap supports two types of animations, `wave` and `glow`.

::: info NOTE
When using `BPlaceholderCard`, the image does not inherit an animation
:::

<<< DEMO ./demo/PlaceholderAnimation.vue#template{vue-html}

## Sizing

You can adjust the sizing of a placeholder by using the `size` prop. Acceptable values are 'xs', 'sm', or 'lg'.

<<< DEMO ./demo/PlaceholderSizing.vue#template{vue-html}

## Helper Components

`BPlaceholder` has several wrapper components to quickly create larger component sets, such as `BPlaceholderCard`, `BPlaceholderTable`, and `BPlaceholderButton`.

### Placeholder Wrapper

The `BPlaceholderWrapper` is a renderless component that picks between a 'loading' component, and a 'finished' component. It is useful when you have to wait for loading to finish, before rendering the actual content. Depending on the use case, you may prefer to use [Suspense](https://vuejs.org/guide/built-ins/suspense.html) instead.

<<< DEMO ./demo/PlaceholderWrapper.vue

### Placeholder Buttons

You can easily render a placeholder that has the button styling by using `BPlaceholderButton`.

<<< DEMO ./demo/PlaceholderButton.vue#template{vue-html}

### Placeholder Cards

Placeholders have built-in support for rendering a placeholder card with `BPlaceholderCard`.

<<< DEMO ./demo/PlaceholderCard.vue#template{vue-html}

### Placeholder Tables

You can also render a full placeholder table with `BPlaceholderTable`.

<<< DEMO ./demo/PlaceholderTable.vue#template{vue-html}

### Advanced Helper Component Usage

#### Advanced Cards

Cards expose various props and slots to make them more personalized.

You can adjust the image using various props, such as `imgBlankColor`, and `imgBottom`, or you can optionally use `imgSrc` to place a real image, rather than a blank.

Each section of the `BPlaceholderCard` exposes its slot elements, so you can easily override the defaults. Available slots are: `img`, `header`, `default`, and `footer`.

The footer also exposes some props that you can use to adjust the behavior of a button. Most notably prop `noButton`. If set to true, it will convert it to a basic placeholder appearance. Alternatively, you can use the `noFooter` prop to remove it altogether.

<<< DEMO ./demo/PlaceholderCardAdvanced.vue#template{vue-html}

#### Advanced Tables

`BPlaceholderTable` comes with various props to adjust the number of rows, columns, header/footer, and their stylings.

You can adjust the number of columns and rows using props `columns` and `rows` respectively. You can use `showFooter` to show the footer, or `noHeader` to hide the header. Both the footer and header have cellWidth, size, animation, and variant adjustments by prepending the type with the styling, eg: `headerCellWidth`, `headerSize`, `footerAnimation`, `footerVariant`.

Optionally, you can manually adjust any scope of the table using slots. The following slots are available: `thead`, `default`, and `tfoot`. Do note that the slots wrap the **entire** table scope, slot `thead` is the entire thead, and slot `default` is the entire tbody, so you will likely need to manually wrap your slot usages in these elements if you plan on using them.

<<< DEMO ./demo/PlaceholderTableAdvanced.vue#template{vue-html}

## Styling and customization

The `<BPlaceholder>` component and helper components utilize Bootstrap SCSS variables, as much as
possible to best match the styling and sizing of the native components. This means if you've
customized Bootstrap SCSS, the skeleton components should adapt to fit your custom theming.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/placeholder.data'
</script>

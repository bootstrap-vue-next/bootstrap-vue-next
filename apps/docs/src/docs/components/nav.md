# Nav

<PageHeader>

Navigation available in Bootstrap share general markup and styles, from the base `<BNav>` class
to the `active` and `disabled` states. Swap modifier props to switch between each style.

</PageHeader>

<<< DEMO ./demo/NavOverview.vue#template{vue-html}

## Overview

The base `<BNav>` component is built with flexbox and provides a strong foundation for building all
types of navigation components. It includes some style overrides (for working with lists), some link
padding for larger hit areas, and basic disabled styling. No active states are included in the base
nav.

`<BNav>` supports the following child components:

- `<BNavItem>` for actionable links (or router-links)
- `<BNavItemDropdown>` for dropdowns
- `<BNavText>` for plain text content
- `<BNavForm>` for inline forms

## Link appearance

Two style variations are supported: `tabs` and `pills`, which support `active` state styling. These
variants are mutually exclusive - use only one style or the other.

### Tab style

Make the nav look like tabs by setting the `tabs` prop.

<<< DEMO ./demo/NavTab.vue#template{vue-html}

### Pill style

Use the pill style by setting the `pills` prop.

<<< DEMO ./demo/NavPill.vue#template{vue-html}

### Small

Make the nav smaller by setting the `small` prop.

<<< DEMO ./demo/NavSmall.vue#template{vue-html}

## Fill and justify

Force your `<BNav>` content to extend the full available width.

### Fill

To proportionately fill all available space with your `<BNavItem>` components, set the `fill`
prop. Notice that all horizontal space is occupied, but not every nav item has the same width.

<<< DEMO ./demo/NavFill.vue#template{vue-html}

### Justified

For equal-width elements, set the `justified` prop instead. All horizontal space will be occupied by
nav links, but unlike `fill` above, every `<BNavItem>` will be the same width.

<<< DEMO ./demo/NavJustified.vue#template{vue-html}

## Alignment

To align your `<BNavItem>` components, use the `align` prop. Available values are those from
[`AlignmentJustifyContent`](/docs/types/alignment): `start`, `center`, `end`, `between`, `around`, and `evenly`.

<<< DEMO ./demo/NavAlignment.vue#template{vue-html}

## Vertical variation

By default `<BNav>` appear on a horizontal line. Stack your navigation by setting the `vertical`
prop.

<<< DEMO ./demo/NavVertical.vue#template{vue-html}

## Dropdown support

Use `<BNavItemDropdown>` to place dropdown items within your nav.

<<< DEMO ./demo/NavDropdown.vue#template{vue-html}

Sometimes you want to add your own class names to the generated dropdown toggle button, that by
default have the classes `nav-link` and `dropdown-toggle`. Use the `toggle-class` prop to add them
(like above) which will render HTML similar to:

<<< FRAGMENT ./demo/NavDropdown.html#template

Refer to [`<BDropdown>`](/docs/components/dropdown) for a list of supported sub-components.

### Optionally scoped default slot

The dropdown default slot is optionally scoped with the following scope available:

| Property or Method | Description                             |
| ------------------ | --------------------------------------- |
| `hide()`           | Can be used to close the dropdown menu. |
| `show()`           | Can be used to show the dropdown menu.  |

### Lazy dropdown

By default, `<BNavItemDropdown>` renders the menu contents in the DOM even when the menu is not
shown. When there are a large number of dropdowns rendered on the same page, performance could be
impacted due to larger overall memory utilization. You can instruct `<BNavItemDropdown>` to
render the menu contents only when it is shown by setting the `lazy` prop to true.

### Dropdown placement

Use the `start`, `end`, `center`, `placement`, `no-flip`, and `offset` to control the positioning of
`<BNavItemDropdown>`.

Refer to the [`<BDropdown>` positioning section](/docs/components/dropdown#positioning) for details
on the effects and usage of these props.

### Dropdown implementation note

Note that the toggle button is actually rendered as a link `<a>` tag with `role="button"` for
styling purposes, and typically has the `href` set to `#` unless an ID is provided via the `id`
prop.

The toggle will prevent scroll-top-top behaviour (via JavaScript) when clicking the toggle link. In
some cases when using SSR, and the user clicks the toggle button _before_ Vue has had a chance to
hydrate the component, the page will scroll to top. In these cases, simply providing a unique ID via
the `id` prop will prevent the unwanted scroll-to-top behaviour.

### Dropdown Exposed Methods

`<BNavItemDropdown>` exposes the same methods as `<BDropdown>`, see the
[dropdown documentation](/docs/components/dropdown#exposed-methods) for details.

## Nav text content

Use the `<BNavText>` child component to place plain text content into the nav:

<<< DEMO ./demo/NavText.vue#template{vue-html}

## Nav inline forms

Use the `<BNavForm>` child component to place an _inline_ form into the nav:

<<< DEMO ./demo/NavInlineForm.vue

Refer to the [`<BForm>` inline](/docs/components/form#inline-form) documentation for additional
details on placing form controls.

## Tabbed local content support

See the [`<BTabs>`](/docs/components/tabs) component for creating tabbable panes of local content
(not suited for navigation).

## Card integration

Use a `<BNav>` in a [`<BCard>`](/docs/components/card) header, by enabling the `card-header` prop
on `<BNav>` and setting either the `pills` or `tabs` props:

**Tabs style:**

<<< DEMO ./demo/NavTabCard.vue#template{vue-html}

**Pill style:**

<<< DEMO ./demo/NavPillCard.vue#template{vue-html}

**Plain style:**

The `card-header` prop is only needed when you are applying `tabs` or `pills` style. Note that
Bootstrap v5 SCSS does not have special styling for `active` state plain style nav items.

<<< DEMO ./demo/NavPlainCard.vue#template{vue-html}

The `card-header` prop has no styling effect if the `<BNav>` is in `vertical` mode.

### Using with Vue Router

Have your card `<BNav>` control vue router nested routes via `<router-view>` or `<nuxt-child>`
components, to created tabbed content that changes with route URL:

<<< FRAGMENT ./demo/NavRouter.vue#template{vue-html}

::: info
Vue Router does not support defining active routes with hashes (`#`), which is why you must
define the "tab" content as child routes.
:::

**Example router config for above:**

<!-- eslint-disable no-unused-vars, no-undef -->

<<< FRAGMENT ./demo/NavRouter.js

One can also use Vue Router
[named routes](https://router.vuejs.org/guide/essentials/named-routes.html#named-routes) and/or
route params instead of path based routes.

For more details see:

- [Vue Router `<router-view>`](https://router.vuejs.org/api/#router-view)
- [Nuxt.JS `<nuxt-child>`](https://nuxtjs.org/api/components-nuxt-child)

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/nav.data'
</script>

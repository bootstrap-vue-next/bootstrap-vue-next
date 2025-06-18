# Navbar

<PageHeader>

The component `BNavbar` is a wrapper that positions branding, navigation, and other elements into a concise header. It is easily extensible and thanks to the `BCollapse` component, it can easily integrate responsive behaviors.

</PageHeader>

<<< DEMO ./demo/NavbarOverview.vue#template{vue-html}

## Color schemes

`BNavbar` supports the standard Bootstrap v5 available background color variants. Set the `variant` prop to one of the
following values to change the background color: `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `dark`, `light`, or any of the \*-subtle variants.

If the `variant` prop is set, it may be necessary to control the text color so that it contrasts with the variant
irrespective of the theme. This can be done by using the `v-b-color-mode` directive or `useColorMode` composable

The example below uses `v-b-colorMode`. For more information see the [BColorMode directive](/docs/directives/BColorMode).

<<< DEMO ./demo/NavbarColorMode.vue#template{vue-html}

`BNavbar` will conform to the current color theme if the `variant` prop is not set.

## Placement

Control the placement of the navbar by setting one of two props:

| prop     | type                                    | default     | description                                                                                                                              |
| -------- | --------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `fixed`  | `Extract<Placement, 'top' \| 'bottom'>` | `undefined` | Set to `top` for fixed to the top of the viewport, or `bottom` for fixed to the `bottom` of the viewport.                                |
| `sticky` | `Extract<Placement, 'top' \| 'bottom'>` | `undefined` | Set to `true` to make the navbar stick to the top of the viewport (or parent container that has `position: relative` set) when scrolled. |

Notes:

- Fixed positioning uses CSS `position: fixed`. You may need to adjust your document top/bottom padding or margin.
- CSS `position: sticky` (used for `sticky`) is not fully supported in every browser. For browsers that do not support `position: sticky`, it will fallback natively to `position: relative`.

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `BNavbarBrand` for your company, product, or project name.
- `BNavbarToggle` for use with the `<BCollapse is-nav>` component.
- `<BCollapse is-nav>` for grouping and hiding navbar contents by a parent breakpoint.
- `BNavbarNav` for a full-height and lightweight navigation (including support for dropdowns). The following sub-components inside `BNavbarNav` are supported:
  - `BNavItem` for link (and router-link) action items
  - `BNavItemDropdown` for nav dropdown menus
  - `BNavText` for adding vertically centered strings of text.
  - `BNavForm` for any form controls and actions.

### `BNavbarBrand`

The `BNavbarBrand` generates a link if `href` is provided, or a `RouterLink` if `to` is provided. If neither is given it renders as a `<div>` tag. You can override the tag type by setting the tag prop to the element you would like rendered:

<<< DEMO ./demo/NavbarBrandLink.vue#template{vue-html}

<<< DEMO ./demo/NavbarBrandHeading.vue#template{vue-html}

Adding images to the `BNavbarBrand` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate:

<<< DEMO ./demo/NavbarBrandImage.vue#template{vue-html}

<<< DEMO ./demo/NavbarBrandImageText.vue#template{vue-html}

### `BNavbarNav`

Navbar navigation links build on the `BNavbarNav` parent component and requires the use of `<BCollapse is-nav>` and `<-toggle>` toggler for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.

`BNavbarNav` supports the following child components:

- `BNavItem` for link (and router-link) action items
- `BNavText` for adding vertically centered strings of text.
- `BNavItemDropdown` for navbar dropdown menus
- `BNavForm` for adding simple forms to the navbar.

### `BNavItem`

`BNavItem` is the primary link (and `RouterLink`) component. Providing a to prop value will generate a `RouterLink` while providing an href prop value will generate a standard link.

Set the `BNavItem` active prop will highlight the item as being the active page, Disable a `BNavItem` by setting the prop disabled to true.

Handle click events by specifying a handler for the `@click` event on `BNavItem`.

### `BNavText`

Navbars may contain bits of text with the help of `BNavText`. This component adjusts vertical alignment and horizontal spacing for strings of text.

<<< DEMO ./demo/NavbarText.vue#template{vue-html}

### `BNavItemDropdown`

For `BNavItemDropdown` usage, see the [`BDropdown`](./dropdown.md) docs. Note split dropdowns are not supported in `BNavbar` and `BNavbarNav`.

<<< DEMO ./demo/NavbarItemDropdown.vue#template{vue-html}

### `BNavForm`

Use `BNavForm` to place inline form controls into your navbar. See [`BNavForm`](./nav#nav-inline-forms) docs for details.

<<< DEMO ./demo/NavbarForm.vue#template{vue-html}

Input Groups work as well:

<<< DEMO ./demo/NavbarInlineGroup.vue#template{vue-html}

## `BNavbarToggle` and `<BCollapse is-nav>`

Navbars are not responsive by default, but you can easily modify them to change that. Responsive behavior depends on our `BCollapse` component.

Wrap `BNavbarNav` components in a `<BCollapse is-nav>` (remember to set the is-nav prop!) to specify content that will collapse based on a particular breakpoint. Assign a document unique id value on the `BCollapse`.

Use the `BNavbarToggle` component to control the collapse component, and set the target prop of `BNavbarToggle` to the id of `BCollapse`.

Set the toggleable prop on `BNavbar` to the desired breakpoint you would like content to automatically expand at. Possible toggleable values are sm, md, lg and xl. Setting toggleable to true (or an empty string) will set the navbar to be always collapsed, while setting it to false (the default) will disable collapsing (always expanded).

`BNavbarToggle` components are left-aligned by default, but should they follow a sibling element like `BNavbarBrand`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler.

See the first example on this page for reference, and also refer to `BCollapse` for details on the collapse component.

Besides being used to control a collapse, the `BNavbarToggle` can also be used to toggle visibility of the `BSidebar` component. Just specify the ID of the `BSidebar` via the target prop.

Internally, `BNavbarToggle` uses the v-b-toggle directive.

### Custom navbar toggle

`BNavbarToggle` renders the default Bootstrap v5 hamburger (which is a background SVG image). You can supply your own content (such as an icon) via the optionally scoped default slot. The default slot scope contains the property expanded, which will be true when the collapse is expanded, or false when the collapse is collapsed.

Note that the expanded scope property only works when supplying the target prop as a string, and not an array.

<<< DEMO ./demo/NavbarToggle.vue

### Offcanvas

Transform your expanding and collapsing navbar into an offcanvas drawer with the [`BOffoffcanvas`](./offcanvas) component.

In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, set `toggleable='true'`.

<<< DEMO ./demo/NavbarOffcanvas.vue

### Scrolling

Add `.navbar-nav-scroll` to the `Navbar` (or other navbar sub-component) to enable vertical scrolling within the toggleable
contents of a collapsed navbar. By default, scrolling kicks in at 75vh (or 75% of the viewport height), see the
[bootstrap documentation](https://getbootstrap.com/docs/5.3/components/navbar/#scrolling) for details on overriding.

<<< DEMO ./demo/NavbarScroll.vue

### Auto close behavior

By default, the collapsible component is closed when clicking inside or outside the dropdown menu. You can use the `auto-close` property to change this behavior of the collapsible component.

The `auto-close`property has 4 options.

- `true` : the collapsible component will be closed by clicking outside or inside the collapsible component
- `false` : the collapsible component will be closed by clicking the toggle button and manually calling the hide method. (Also will not be closed by pressing <kbd>esc</kbd> key)
- `inside` : the collapsible component will be closed (only) by clicking inside the collapsible component menu
- `outside` : the collapsible component will be closed (only) by clicking outside the dropdown menu

## Printing

Navbars are hidden by default when printing. Force them to be printed by setting the print prop.

## See also

- `BCollapse` component
- `BSidebar` component
- v-b-toggle directive
- `BNav` documentation for additional components and sub-component aliases
  Refer to the Router support reference page for router-link specific props.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/navbar.data'
</script>

# Navbar

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

The component `<b-navbar>` is a wrapper that positions branding, navigation, and other elements into a concise header. It's easily extensible and thanks to the `<b-collapse>` component, it can easily integrate responsive behaviors.

</div>

<HighlightCard>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="me-auto mb-2 mb-lg-0">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-nav-form class="d-flex">
        <b-form-input class="me-2" placeholder="Search"></b-form-input>
        <b-button type="submit" variant="outline-success">Search</b-button>
      </b-nav-form>
    </b-collapse>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="me-auto mb-2 mb-lg-0">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-nav-form class="d-flex">
        <b-form-input class="me-2" placeholder="Search"></b-form-input>
        <b-button type="submit" variant="outline-success">Search</b-button>
      </b-nav-form>
    </b-collapse>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

## Color schemes

`<b-navbar>` supports the standard Bootstrap v4 available background color variants. Set the variant prop to one of the following values to change the background color: primary, success, info, warning, danger, dark, or light.

Control the text color by setting `type` prop to `light` for use with light background color variants, or dark for dark background color variants.

## Placement

Control the placement of the navbar by setting one of two props:

Notes:

- Fixed positioning uses CSS `position: fixed`. You may need to adjust your document top/bottom padding or margin.
- CSS `position: sticky` (used for `sticky`) is not fully supported in every browser. For browsers that do not support `position: sticky`, it will fallback natively to `position: relative`.

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<b-navbar-brand>` for your company, product, or project name.
- `<b-navbar-toggle>` for use with the `<b-collapse is-nav>` component.
- `<b-collapse is-nav>` for grouping and hiding navbar contents by a parent breakpoint.
- `<b-navbar-nav>` for a full-height and lightweight navigation (including support for dropdowns). The following sub-components inside `<b-navbar-nav>` are supported:
  -- `<b-nav-item>` for link (and router-link) action items
  -- `<b-nav-item-dropdown>` for nav dropdown menus
  -- `<b-nav-text>` for adding vertically centered strings of text.
  -- `<b-nav-form>` for any form controls and actions.

## `<b-navbar-brand>`

The `<b-navbar-brand>` generates a link if href is provided, or a `<router-link>` if to is provided. If neither is given it renders as a `<div>` tag. You can override the tag type by setting the tag prop to the element you would like rendered:

<HighlightCard>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">BootstrapVueNext</b-navbar-brand>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <!-- As a link -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">BootstrapVueNext</b-navbar-brand>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

<HighlightCard>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand tag="h1" class="mb-0">BootstrapVue</b-navbar-brand>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <!-- As a heading -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand tag="h1" class="mb-0">BootstrapVue</b-navbar-brand>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

Adding images to the `<b-navbar-brand>` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate:

<HighlightCard>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" alt="Kitten">
    </b-navbar-brand>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <!-- Just an image -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" alt="Kitten">
    </b-navbar-brand>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

<HighlightCard>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
      BootstrapVue
    </b-navbar-brand>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <!-- Image and text -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
      BootstrapVue
    </b-navbar-brand>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

## `<b-navbar-nav>`

Navbar navigation links build on the `<b-navbar-nav>` parent component and requires the use of `<b-collapse is-nav>` and `<b-nav-toggle>` toggler for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.

`<b-navbar-nav>` supports the following child components:

- `<b-nav-item>` for link (and router-link) action items
- `<b-nav-text>` for adding vertically centered strings of text.
- `<b-nav-item-dropdown>` for navbar dropdown menus
- `<b-nav-form>` for adding simple forms to the navbar.

## `<b-nav-item>`

`<b-nav-item>` is the primary link (and `<router-link>`) component. Providing a to prop value will generate a `<router-link>` while providing an href prop value will generate a standard link.

Set the `<b-nav-item>` active prop will highlight the item as being the active page, Disable a `<b-nav-item>` by setting the prop disabled to true.

Handle click events by specifying a handler for the @click event on `<b-nav-item>`.

## `<b-nav-text>`

Navbars may contain bits of text with the help of `<b-nav-text>`. This component adjusts vertical alignment and horizontal spacing for strings of text.

<HighlightCard>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand>BootstrapVue</b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>BootstrapVue</b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

## `<b-nav-item-dropdown>`

For `<b-nav-item-dropdown>` usage, see the `<b-dropdown>` docs. Note split dropdowns are not supported in `<b-navbar>` and `<b-navbar-nav>`.

<HighlightCard>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

## `<b-nav-form>`

Use `<b-nav-form>` to place inline form controls into your navbar

<HighlightCard>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-form-input class="me-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-form-input class="me-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

Input Groups work as well:

<HighlightCard>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-input-group prepend="@">
        <b-form-input placeholder="Username"></b-form-input>
      </b-input-group>
    </b-nav-form>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-input-group prepend="@">
        <b-form-input placeholder="Username"></b-form-input>
      </b-input-group>
    </b-nav-form>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

## `<b-navbar-toggle>` and `<b-collapse is-nav>`

Navbars are not responsive by default, but you can easily modify them to change that. Responsive behavior depends on our `<b-collapse>` component.

Wrap `<b-navbar-nav>` components in a `<b-collapse is-nav>` (remember to set the is-nav prop!) to specify content that will collapse based on a particular breakpoint. Assign a document unique id value on the `<b-collapse>`.

Use the `<b-navbar-toggle>` component to control the collapse component, and set the target prop of `<b-navbar-toggle>` to the id of `<b-collapse>`.

Set the toggleable prop on `<b-navbar>` to the desired breakpoint you would like content to automatically expand at. Possible toggleable values are sm, md, lg and xl. Setting toggleable to true (or an empty string) will set the navbar to be always collapsed, while setting it to false (the default) will disable collapsing (always expanded).

`<b-navbar-toggle>` components are left-aligned by default, but should they follow a sibling element like `<b-navbar-brand>`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler.

See the first example on this page for reference, and also refer to `<b-collapse>` for details on the collapse component.

Besides being used to control a collapse, the `<b-navbar-toggle>` can also be used to toggle visibility of the `<b-sidebar>` component. Just specify the ID of the `<b-sidebar>` via the target prop.

Internally, `<b-navbar-toggle>` uses the v-b-toggle directive.

### Custom navbar toggle

`<b-navbar-toggle>` renders the default Bootstrap v4 hamburger (which is a background SVG image). You can supply your own content (such as an icon) via the optionally scoped default slot. The default slot scope contains the property expanded, which will be true when the collapse is expanded, or false when the collapse is collapsed.

Note that the expanded scope property only works when supplying the target prop as a string, and not an array.

<HighlightCard>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <template #html>

```vue-html
<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
```

  </template>
</HighlightCard>

## Printing

Navbars are hidden by default when printing. Force them to be printed by setting the print prop.

## See also

- `<b-collapse>` component
- `<b-sidebar>` component
- v-b-toggle directive
- `<b-nav>` documentation for additional components and sub-component aliases
  Refer to the Router support reference page for router-link specific props.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/navbar.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavForm, BNavItem, BFormInput, BNavbarItem, BNavItemDropdown, BDropdownItem, BButton} from 'bootstrap-vue-next'
</script>

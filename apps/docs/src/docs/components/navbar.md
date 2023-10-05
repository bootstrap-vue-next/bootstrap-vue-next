# Navbar

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

The component `BNavbar` is a wrapper that positions branding, navigation, and other elements into a concise header. It is easily extensible and thanks to the `BCollapse` component, it can easily integrate responsive behaviors.

</div>

<HighlightCard>
  <BNavbar toggleable="lg" data-bs-theme="dark" variant="dark">
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="#">Link</BNavItem>
        <BNavItem href="#" disabled>Disabled</BNavItem>
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="me-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="Lang" right>
          <BDropdownItem href="#">EN</BDropdownItem>
          <BDropdownItem href="#">ES</BDropdownItem>
          <BDropdownItem href="#">RU</BDropdownItem>
          <BDropdownItem href="#">FA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <BDropdownItem href="#">Profile</BDropdownItem>
          <BDropdownItem href="#">Sign Out</BDropdownItem>
        </BNavItemDropdown>
      </BNavbarNav>
      <BNavForm class="d-flex">
        <BFormInput class="me-2" placeholder="Search" />
        <BButton type="submit" variant="outline-success">Search</BButton>
      </BNavForm>
    </BCollapse>
  </BNavbar>
  <template #html>

```vue-html
<BNavbar toggleable="lg" data-bs-theme="dark" variant="dark">
  <BNavbarBrand href="#">NavBar</BNavbarBrand>
  <BNavbarToggle target="nav-collapse" />
  <BCollapse id="nav-collapse" is-nav>
    <BNavbarNav>
      <BNavItem href="#">Link</BNavItem>
      <BNavItem href="#" disabled>Disabled</BNavItem>
    </BNavbarNav>
    <!-- Right aligned nav items -->
    <BNavbarNav class="me-auto mb-2 mb-lg-0">
      <BNavItemDropdown text="Lang" right>
        <BDropdownItem href="#">EN</BDropdownItem>
        <BDropdownItem href="#">ES</BDropdownItem>
        <BDropdownItem href="#">RU</BDropdownItem>
        <BDropdownItem href="#">FA</BDropdownItem>
      </BNavItemDropdown>
      <BNavItemDropdown right>
        <!-- Using 'button-content' slot -->
        <template #button-content>
          <em>User</em>
        </template>
        <BDropdownItem href="#">Profile</BDropdownItem>
        <BDropdownItem href="#">Sign Out</BDropdownItem>
      </BNavItemDropdown>
    </BNavbarNav>
    <BNavForm class="d-flex">
      <BFormInput class="me-2" placeholder="Search" />
      <BButton type="submit" variant="outline-success">Search</BButton>
    </BNavForm>
  </BCollapse>
</BNavbar>
```

  </template>
</HighlightCard>

## Color schemes

`BNavbar` supports the standard Bootstrap v5 available background color variants. Set the variant prop to one of the following values to change the background color: primary, secondary, success, info, warning, danger, dark, light, or any of the \*-subtle variants.

Control the text color by setting `data-bs-theme` prop to `dark` for use with dark background color variants, or `light` for light background color variants.

## Placement

Control the placement of the navbar by setting one of two props:

Notes:

- Fixed positioning uses CSS `position: fixed`. You may need to adjust your document top/bottom padding or margin.
- CSS `position: sticky` (used for `sticky`) is not fully supported in every browser. For browsers that do not support `position: sticky`, it will fallback natively to `position: relative`.

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `BNavbarBrand` for your company, product, or project name.
- `BNavbarToggle` for use with the `<BCollapse is-nav>` component.
- `<BCollapse is-nav>` for grouping and hiding navbar contents by a parent breakpoint.
- `BNavbarNav` for a full-height and lightweight navigation (including support for dropdowns). The following sub-components inside `BNavbarNav` are supported:
  -- `BNavItem` for link (and router-link) action items
  -- `BNavItemDropdown` for nav dropdown menus
  -- `BNavText` for adding vertically centered strings of text.
  -- `BNavForm` for any form controls and actions.

## `BNavbarBrand`

The `BNavbarBrand` generates a link if href is provided, or a `RouterLink` if to is provided. If neither is given it renders as a `<div>` tag. You can override the tag type by setting the tag prop to the element you would like rendered:

<HighlightCard>
  <BNavbar variant="faded" data-bs-theme="light">
    <BNavbarBrand href="#">BootstrapVueNext</BNavbarBrand>
  </BNavbar>
  <template #html>

```vue-html
<!-- As a link -->
<BNavbar variant="faded" data-bs-theme="light">
  <BNavbarBrand href="#">BootstrapVueNext</BNavbarBrand>
</BNavbar>
```

  </template>
</HighlightCard>

<HighlightCard>
  <BNavbar variant="faded" data-bs-theme="light">
    <BNavbarBrand tag="h1" class="mb-0">BootstrapVue</BNavbarBrand>
  </BNavbar>
  <template #html>

```vue-html
<!-- As a heading -->
<BNavbar variant="faded" data-bs-theme="light">
  <BNavbarBrand tag="h1" class="mb-0">BootstrapVue</BNavbarBrand>
</BNavbar>
```

  </template>
</HighlightCard>

Adding images to the `BNavbarBrand` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate:

<HighlightCard>
  <BNavbar variant="faded" data-bs-theme="light">
    <BNavbarBrand href="#">
      <img src="https://placekitten.com/g/30/30" alt="Kitten">
    </BNavbarBrand>
  </BNavbar>
  <template #html>

```vue-html
<!-- Just an image -->
<BNavbar variant="faded" data-bs-theme="light">
  <BNavbarBrand href="#">
    <img src="https://placekitten.com/g/30/30" alt="Kitten">
  </BNavbarBrand>
</BNavbar>
```

  </template>
</HighlightCard>

<HighlightCard>
  <BNavbar variant="faded" data-bs-theme="light">
    <BNavbarBrand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
      BootstrapVue
    </BNavbarBrand>
  </BNavbar>
  <template #html>

```vue-html
<!-- Image and text -->
<BNavbar variant="faded" data-bs-theme="light">
  <BNavbarBrand href="#">
    <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
    BootstrapVue
  </BNavbarBrand>
</BNavbar>
```

  </template>
</HighlightCard>

## `BNavbarNav`

Navbar navigation links build on the `BNavbarNav` parent component and requires the use of `<BCollapse is-nav>` and `<-toggle>` toggler for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.

`BNavbarNav` supports the following child components:

- `BNavItem` for link (and router-link) action items
- `BNavText` for adding vertically centered strings of text.
- `BNavItemDropdown` for navbar dropdown menus
- `BNavForm` for adding simple forms to the navbar.

## `BNavItem`

`BNavItem` is the primary link (and `RouterLink`) component. Providing a to prop value will generate a `RouterLink` while providing an href prop value will generate a standard link.

Set the `BNavItem` active prop will highlight the item as being the active page, Disable a `BNavItem` by setting the prop disabled to true.

Handle click events by specifying a handler for the @click event on `BNavItem`.

## `BNavText`

Navbars may contain bits of text with the help of `BNavText`. This component adjusts vertical alignment and horizontal spacing for strings of text.

<HighlightCard>
  <BNavbar toggleable="sm" data-bs-theme="light" variant="light">
    <BNavbarToggle target="nav-text-collapse" />
    <BNavbarBrand>BootstrapVue</BNavbarBrand>
    <BCollapse id="nav-text-collapse" is-nav>
      <BNavbarNav>
        <BNavText>Navbar text</BNavText>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
  <template #html>

```vue-html
<BNavbar toggleable="sm" data-bs-theme="light" variant="light">
  <BNavbarToggle target="nav-text-collapse" />

  <BNavbarBrand>BootstrapVue</BNavbarBrand>

  <BCollapse id="nav-text-collapse" is-nav>
    <BNavbarNav>
      <BNavText>Navbar text</BNavText>
    </BNavbarNav>
  </BCollapse>
</BNavbar>
```

  </template>
</HighlightCard>

## `BNavItemDropdown`

For `BNavItemDropdown` usage, see the `BDropdown` docs. Note split dropdowns are not supported in `BNavbar` and `BNavbarNav`.

<HighlightCard>
  <BNavbar data-bs-theme="dark" variant="dark">
    <BNavbarNav>
      <BNavItem href="#">Home</BNavItem>
      <BNavItemDropdown text="Lang" right>
        <BDropdownItem href="#">EN</BDropdownItem>
        <BDropdownItem href="#">ES</BDropdownItem>
        <BDropdownItem href="#">RU</BDropdownItem>
        <BDropdownItem href="#">FA</BDropdownItem>
      </BNavItemDropdown>
      <BNavItemDropdown text="User" right>
        <BDropdownItem href="#">Account</BDropdownItem>
        <BDropdownItem href="#">Settings</BDropdownItem>
      </BNavItemDropdown>
    </BNavbarNav>
  </BNavbar>
  <template #html>

```vue-html
<BNavbar data-bs-theme="dark" variant="dark">
  <BNavbarNav>
    <BNavItem href="#">Home</BNavItem>

    <!-- Navbar dropdowns -->
    <BNavItemDropdown text="Lang" right>
      <BDropdownItem href="#">EN</BDropdownItem>
      <BDropdownItem href="#">ES</BDropdownItem>
      <BDropdownItem href="#">RU</BDropdownItem>
      <BDropdownItem href="#">FA</BDropdownItem>
    </BNavItemDropdown>

    <BNavItemDropdown text="User" right>
      <BDropdownItem href="#">Account</BDropdownItem>
      <BDropdownItem href="#">Settings</BDropdownItem>
    </BNavItemDropdown>
  </BNavbarNav>
</BNavbar>
```

  </template>
</HighlightCard>

## `BNavForm`

Use `BNavForm` to place inline form controls into your navbar

<HighlightCard>
  <BNavbar data-bs-theme="light" variant="light">
    <BNavForm>
      <BFormInput class="me-sm-2" placeholder="Search" />
      <BButton variant="outline-success" class="my-2 my-sm-0" type="submit">Search</BButton>
    </BNavForm>
  </BNavbar>
  <template #html>

```vue-html
<BNavbar data-bs-theme="light" variant="light">
  <BNavForm>
    <BFormInput class="me-sm-2" placeholder="Search" />
    <BButton variant="outline-success" class="my-2 my-sm-0" type="submit">Search</BButton>
  </BNavForm>
</BNavbar>
```

  </template>
</HighlightCard>

Input Groups work as well:

<HighlightCard>
  <BNavbar data-bs-theme="light" variant="light">
    <BNavForm>
      <BInputGroup prepend="@">
        <BFormInput placeholder="Username" />
      </BInputGroup>
    </BNavForm>
  </BNavbar>
  <template #html>

```vue-html
<BNavbar data-bs-theme="light" variant="light">
  <BNavForm>
    <BInputGroup prepend="@">
      <BFormInput placeholder="Username" />
    </BInputGroup>
  </BNavForm>
</BNavbar>
```

  </template>
</HighlightCard>

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

<HighlightCard>
  <BNavbar toggleable data-bs-theme="dark" variant="dark">
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNavbarToggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <ChevronBarUpIcon v-if="expanded" />
        <ChevronBarDownIcon v-else icon="chevron-bar-down" />
      </template>
    </BNavbarToggle>
    <BCollapse id="navbar-toggle-collapse" is-nav>
      <BNavbarNav class="ml-auto">
        <BNavItem href="#">Link 1</BNavItem>
        <BNavItem href="#">Link 2</BNavItem>
        <BNavItem href="#" disabled>Disabled</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
  <template #html>

```vue-html
<BNavbar toggleable data-bs-theme="dark" variant="dark">
  <BNavbarBrand href="#">NavBar</BNavbarBrand>

  <BNavbarToggle target="navbar-toggle-collapse">
    <template #default="{ expanded }">
      <ChevronBarUpIcon v-if="expanded" />
      <ChevronBarDownIcon v-else icon="chevron-bar-down" />
    </template>
  </BNavbarToggle>

  <BCollapse id="navbar-toggle-collapse" is-nav>
    <BNavbarNav class="ml-auto">
      <BNavItem href="#">Link 1</BNavItem>
      <BNavItem href="#">Link 2</BNavItem>
      <BNavItem href="#" disabled>Disabled</BNavItem>
    </BNavbarNav>
  </BCollapse>
</BNavbar>
```

  </template>
</HighlightCard>

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
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BNavText, BInputGroup, BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavForm, BNavItem, BFormInput, BNavbarItem, BNavItemDropdown, BDropdownItem, BButton} from 'bootstrap-vue-next'
import ChevronBarUpIcon from '~icons/bi/chevron-bar-up'
import ChevronBarDownIcon from '~icons/bi/chevron-bar-down'
</script>

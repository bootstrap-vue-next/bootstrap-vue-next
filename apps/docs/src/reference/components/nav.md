# Nav

<div class="lead mb-5">

Bootstrap's vue nav component is a simple wrapper for building navigation components.

</div>

<b-card no-body class="mb-5">
  <b-card-body>
    <b-nav>
      <b-nav-item>Home</b-nav-item>
      <b-nav-item>About</b-nav-item>
      <b-nav-item>New</b-nav-item>
      <b-nav-item disabled>Home</b-nav-item>
    </b-nav>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-nav>
  <b-nav-item>Home</b-nav-item>
  <b-nav-item>About</b-nav-item>
  <b-nav-item>New</b-nav-item>
  <b-nav-item disabled>Home</b-nav-item>
</b-nav>
```

  </b-card-body>

</b-card>

## Dropdown

Dropdowns can be added like so

<b-card no-body class="mb-5">
  <b-card-body>
    <b-nav pills>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item-dropdown
        v-model="dropdownShow"
        id="my-nav-dropdown"
        text="Dropdown"
        toggle-class="nav-link-custom"
        end
      >
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Three</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<template>
  <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item-dropdown
      v-model="dropdownShow"
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      end
    >
      <b-dropdown-item>One</b-dropdown-item>
      <b-dropdown-item>Two</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Three</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const dropdownShow = ref(false)
</script>
```

  </b-card-body>

</b-card>

`<b-nav-item-dropdown>` has many props in common with `<b-dropdown` so you can easily integrate custom options

## Styles

You can make nav item styles in various ways

### Tab Style

<b-card no-body class="mb-5">
  <b-card-body>
    <b-nav tabs>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
 <b-nav tabs>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>
```

  </b-card-body>

</b-card>

### Pills Style

<b-card no-body class="mb-5">
  <b-card-body>
    <b-nav pills>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-nav pills>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>
```

  </b-card-body>

</b-card>

## Vertical Orientation

By default `<b-nav>` appear on a horizontal line. Stack your navigation by setting the vertical prop

<b-card no-body class="mb-5">
  <b-card-body>
    <b-nav vertical class="w-25">
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-nav vertical class="w-25">
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>
```

  </b-card-body>

</b-card>

## Nav Text

Use the `<b-nav-text>` child component to place plain text content into the nav:

<b-card no-body class="mb-5">
  <b-card-body>
    <b-nav>
      <b-nav-item href="#1">Link 1</b-nav-item>
      <b-nav-item href="#2">Link 2</b-nav-item>
      <b-nav-text>Plain text</b-nav-text>
    </b-nav>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-nav>
  <b-nav-item href="#1">Link 1</b-nav-item>
  <b-nav-item href="#2">Link 2</b-nav-item>
  <b-nav-text>Plain text</b-nav-text>
</b-nav>
```

  </b-card-body>

</b-card>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/nav.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {
  BNav,
  BNavText,
  BNavItemDropdown,
  BDropdownItem,
  BDropdown,
  BNavItem,
  BCard,
  BCardBody,
  BDropdownDivider,
} from 'bootstrap-vue-next'
import {ref} from 'vue'

const dropdownShow = ref(false)
</script>

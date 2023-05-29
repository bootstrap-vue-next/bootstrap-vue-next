# Nav

<div class="lead mb-5">

Bootstrap's vue nav component is a simple wrapper for building navigation components.

</div>

<HighlightCard>
  <b-nav>
    <b-nav-item>Home</b-nav-item>
    <b-nav-item>About</b-nav-item>
    <b-nav-item>New</b-nav-item>
    <b-nav-item disabled>Home</b-nav-item>
  </b-nav>
  <template #html>

```vue-html
<b-nav>
  <b-nav-item>Home</b-nav-item>
  <b-nav-item>About</b-nav-item>
  <b-nav-item>New</b-nav-item>
  <b-nav-item disabled>Home</b-nav-item>
</b-nav>
```

  </template>
</HighlightCard>

## Dropdown

Dropdowns can be added like so

<HighlightCard>
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
      <b-dropdown-divider />
      <b-dropdown-item>Three</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
  <template #html>

```vue
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
      <b-dropdown-divider />
      <b-dropdown-item>Three</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script setup lang="ts">
const dropdownShow = ref(false)
</script>
```

  </template>
</HighlightCard>

`<b-nav-item-dropdown>` has many props in common with `<b-dropdown` so you can easily integrate custom options

## Styles

You can make nav item styles in various ways

### Tab Style

<HighlightCard>
  <b-nav tabs>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
  <template #html>

```vue-html
 <b-nav tabs>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>
```

  </template>
</HighlightCard>

### Pills Style

<HighlightCard>
  <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
  <template #html>

```vue-html
<b-nav pills>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>
```

  </template>
</HighlightCard>

## Vertical Orientation

By default `<b-nav>` appear on a horizontal line. Stack your navigation by setting the vertical prop

<HighlightCard>
  <b-nav vertical class="w-25">
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
  <template #html>

```vue-html
<b-nav vertical class="w-25">
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>
```

  </template>
</HighlightCard>

## Nav Text

Use the `<b-nav-text>` child component to place plain text content into the nav:

<HighlightCard>
  <b-nav>
    <b-nav-item href="#1">Link 1</b-nav-item>
    <b-nav-item href="#2">Link 2</b-nav-item>
    <b-nav-text>Plain text</b-nav-text>
  </b-nav>
  <template #html>

```vue-html
<b-nav>
  <b-nav-item href="#1">Link 1</b-nav-item>
  <b-nav-item href="#2">Link 2</b-nav-item>
  <b-nav-text>Plain text</b-nav-text>
</b-nav>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/nav.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
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

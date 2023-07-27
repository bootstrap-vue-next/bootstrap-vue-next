# Nav

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Bootstrap's vue nav component is a simple wrapper for building navigation components.

</div>

<HighlightCard>
  <BNav>
    <BNavItem>Home</BNavItem>
    <BNavItem>About</BNavItem>
    <BNavItem>New</BNavItem>
    <BNavItem disabled>Home</BNavItem>
  </BNav>
  <template #html>

```vue-html
<BNav>
  <BNavItem>Home</BNavItem>
  <BNavItem>About</BNavItem>
  <BNavItem>New</BNavItem>
  <BNavItem disabled>Home</BNavItem>
</BNav>
```

  </template>
</HighlightCard>

## Dropdown

Dropdowns can be added like so

<HighlightCard>
  <BNav pills>
    <BNavItem active>Active</BNavItem>
    <BNavItem>Link</BNavItem>
    <BNavItemDropdown
      v-model="dropdownShow"
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      end
    >
      <BDropdownItem>One</BDropdownItem>
      <BDropdownItem>Two</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem>Three</BDropdownItem>
    </BNavItemDropdown>
  </BNav>
  <template #html>

```vue
<template>
  <BNav pills>
    <BNavItem active>Active</BNavItem>
    <BNavItem>Link</BNavItem>
    <BNavItemDropdown
      v-model="dropdownShow"
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      end
    >
      <BDropdownItem>One</BDropdownItem>
      <BDropdownItem>Two</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem>Three</BDropdownItem>
    </BNavItemDropdown>
  </BNav>
</template>

<script setup lang="ts">
const dropdownShow = ref(false)
</script>
```

  </template>
</HighlightCard>

`BNavItemDropdown` has many props in common with `<BDropdown` so you can easily integrate custom options.

## Styles

You can make nav item styles in various ways.

### Tab Style

<HighlightCard>
  <BNav tabs>
    <BNavItem active>Active</BNavItem>
    <BNavItem>Link</BNavItem>
    <BNavItem>Another Link</BNavItem>
    <BNavItem disabled>Disabled</BNavItem>
  </BNav>
  <template #html>

```vue-html
<BNav tabs>
  <BNavItem active>Active</BNavItem>
  <BNavItem>Link</BNavItem>
  <BNavItem>Another Link</BNavItem>
  <BNavItem disabled>Disabled</BNavItem>
</BNav>
```

  </template>
</HighlightCard>

### Pills Style

<HighlightCard>
  <BNav pills>
    <BNavItem active>Active</BNavItem>
    <BNavItem>Link</BNavItem>
    <BNavItem>Another Link</BNavItem>
    <BNavItem disabled>Disabled</BNavItem>
  </BNav>
  <template #html>

```vue-html
<BNav pills>
  <BNavItem active>Active</BNavItem>
  <BNavItem>Link</BNavItem>
  <BNavItem>Another Link</BNavItem>
  <BNavItem disabled>Disabled</BNavItem>
</BNav>
```

  </template>
</HighlightCard>

## Vertical Orientation

By default `BNav` appear on a horizontal line. Stack your navigation by setting the vertical prop.

<HighlightCard>
  <BNav vertical class="w-25">
    <BNavItem active>Active</BNavItem>
    <BNavItem>Link</BNavItem>
    <BNavItem>Another Link</BNavItem>
    <BNavItem disabled>Disabled</BNavItem>
  </BNav>
  <template #html>

```vue-html
<BNav vertical class="w-25">
  <BNavItem active>Active</BNavItem>
  <BNavItem>Link</BNavItem>
  <BNavItem>Another Link</BNavItem>
  <BNavItem disabled>Disabled</BNavItem>
</BNav>
```

  </template>
</HighlightCard>

## Nav Text

Use the `BNavText` child component to place plain text content into the nav:

<HighlightCard>
  <BNav>
    <BNavItem href="#1">Link 1</BNavItem>
    <BNavItem href="#2">Link 2</BNavItem>
    <BNavText>Plain text</BNavText>
  </BNav>
  <template #html>

```vue-html
<BNav>
  <BNavItem href="#1">Link 1</BNavItem>
  <BNavItem href="#2">Link 2</BNavItem>
  <BNavText>Plain text</BNavText>
</BNav>
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

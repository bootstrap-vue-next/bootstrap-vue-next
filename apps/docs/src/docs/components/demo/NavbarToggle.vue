<template>
  <BNavbar
    v-b-color-mode="'dark'"
    toggleable
    variant="dark"
  >
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNavbarToggle target="navbar-toggle-collapse">
      <template #default="{expanded}">
        <ChevronBarUpIcon v-if="expanded" />
        <ChevronBarDownIcon
          v-else
          icon="chevron-bar-down"
        />
      </template>
    </BNavbarToggle>
    <BCollapse
      id="navbar-toggle-collapse"
      is-nav
    >
      <BNavbarNav class="ms-auto">
        <BNavItem href="#">Link 1</BNavItem>
        <BNavItem href="#">Link 2</BNavItem>
        <BNavItem
          href="#"
          disabled
          >Disabled</BNavItem
        >
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script setup lang="ts">
import ChevronBarUpIcon from '~icons/bi/chevron-bar-up'
import ChevronBarDownIcon from '~icons/bi/chevron-bar-down'
</script>

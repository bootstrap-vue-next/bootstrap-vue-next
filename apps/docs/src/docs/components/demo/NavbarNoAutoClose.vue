<template>
  <!-- #region template -->
  <BNavbar
    v-b-color-mode="'dark'"
    toggleable
    no-auto-close
    variant="dark"
  >
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNavbarToggle target="navbar-toggle-collapse" />
    <BCollapse
      id="navbar-toggle-collapse"
      is-nav
    >
      <BNavbarNav class="ms-auto">
        <BNavItem href="#collapse-no-auto-close">Link 1</BNavItem>
        <BNavItem href="#collapse-no-auto-close">Link 2</BNavItem>
        <BNavItem
          href="#collapse-no-auto-close"
          disabled
          >Disabled</BNavItem
        >
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
  <!-- #endregion template -->
</template>

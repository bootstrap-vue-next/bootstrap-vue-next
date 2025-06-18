<template>
  <!-- #region template -->
  <BNavbar
    v-b-color-mode="'dark'"
    toggleable="sm"
    variant="primary"
  >
    <BNavbarToggle target="nav-text-collapse" />
    <BNavbarBrand>BootstrapVue</BNavbarBrand>
    <BCollapse
      id="nav-text-collapse"
      is-nav
    >
      <BNavbarNav>
        <BNavText>Navbar text</BNavText>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <BNavbar
    v-b-color-mode="'dark'"
    :toggleable="true"
    variant="primary"
  >
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNavbarToggle target="nav-offcanvas" />
    <BOffcanvas
      id="nav-offcanvas"
      title="Offcanvas"
      placement="end"
      is-nav
    >
      <BNavbarNav>
        <BNavItem href="#">Link</BNavItem>
        <BNavItem
          href="#"
          disabled
          >Disabled</BNavItem
        >
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown
          text="Lang"
          right
        >
          <BDropdownItem>EN</BDropdownItem>
          <BDropdownItem>ES</BDropdownItem>
          <BDropdownItem>RU</BDropdownItem>
          <BDropdownItem>FA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <BDropdownItem>Profile</BDropdownItem>
          <BDropdownItem>Sign Out</BDropdownItem>
        </BNavItemDropdown>
      </BNavbarNav>
      <BNavForm class="d-flex">
        <BFormInput
          class="me-2"
          placeholder="Search"
        />
        <BButton
          type="submit"
          variant="outline-success"
          >Search</BButton
        >
      </BNavForm>
    </BOffcanvas>
  </BNavbar>
  <!-- #endregion template -->
</template>

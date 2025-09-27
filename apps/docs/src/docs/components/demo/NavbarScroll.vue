<template>
  <!-- #region template -->
  <BNavbar
    v-b-color-mode="'dark'"
    :toggleable="true"
    variant="primary"
    class="navbar-nav-scroll"
  >
    <BNavbarBrand href="#">NavBar</BNavbarBrand>
    <BNavbarToggle target="nav-scroll" />
    <BCollapse
      id="nav-scroll"
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
    </BCollapse>
  </BNavbar>
  <!-- #endregion template -->
</template>

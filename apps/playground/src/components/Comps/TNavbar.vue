<template>
  <div>
    <BNavbar toggleable="lg" type="dark" variant="info">
      <BNavbarBrand href="#">NavBar</BNavbarBrand>

      <BNavbarToggle target="nav-collapse" />

      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
          <BNavItem href="#">Link</BNavItem>
          <BNavItem href="#" disabled>Disabled</BNavItem>
        </BNavbarNav>

        <!-- Right aligned nav items -->
        <BNavbarNav class="ms-auto">
          <BNavForm>
            <BFormInput
              size="sm"
              class="me-sm-2"
              placeholder="Search"
            />
            <BButton size="sm" class="my-2 my-sm-0" type="submit"
              >Search</BButton
            >
          </BNavForm>

          <BNavItemDropdown text="Lang" end>
            <BDropdownItem href="#">EN</BDropdownItem>
            <BDropdownItem href="#">ES</BDropdownItem>
            <BDropdownItem href="#">RU</BDropdownItem>
            <BDropdownItem href="#">FA</BDropdownItem>
          </BNavItemDropdown>

          <BNavItemDropdown end>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <BDropdownItem href="#">Profile</BDropdownItem>
            <BDropdownItem href="#">Sign Out</BDropdownItem>
          </BNavItemDropdown>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </div>
</template>

<template>
  <div class="d-flex flex-wrap gap-2">
    <!-- #region template -->
    <BNavbar
      v-b-color-mode="'dark'"
      variant="primary"
    >
      <BNavbarNav>
        <BNavItemDropdown text="Default Dropdown">
          <BDropdownItemButton>Action</BDropdownItemButton>
          <BDropdownItemButton>Another action</BDropdownItemButton>
          <BDropdownItemButton>Something else here</BDropdownItemButton>
        </BNavItemDropdown>
      </BNavbarNav>
    </BNavbar>

    <BNavbar
      v-b-color-mode="'dark'"
      variant="primary"
      auto-close-dropdowns="inside"
    >
      <BNavbarNav>
        <BNavItemDropdown
          text="Clickable outside (auto-close-dropdowns=inside)"
          class="me-2"
        >
          <BDropdownItemButton>Action</BDropdownItemButton>
          <BDropdownItemButton>Another action</BDropdownItemButton>
          <BDropdownItemButton>Something else here</BDropdownItemButton>
        </BNavItemDropdown>
      </BNavbarNav>
    </BNavbar>
    <BNavbar
      v-b-color-mode="'dark'"
      variant="primary"
      auto-close-dropdowns="outside"
    >
      <BNavbarNav>
        <BNavItemDropdown
          text="Clickable inside (auto-close-dropdowns=outside)"
          class="me-2"
        >
          <BDropdownItemButton>Action</BDropdownItemButton>
          <BDropdownItemButton>Another action</BDropdownItemButton>
          <BDropdownItemButton>Something else here</BDropdownItemButton>
        </BNavItemDropdown>
      </BNavbarNav>
    </BNavbar>
    <BNavbar
      v-b-color-mode="'dark'"
      :auto-close-dropdowns="false"
      variant="primary"
    >
      <BNavbarNav>
        <BNavItemDropdown
          text="Manual close (auto-close-dropdowns=false)"
          class="me-2"
        >
          <BDropdownItemButton>Action</BDropdownItemButton>
          <BDropdownItemButton>Another action</BDropdownItemButton>
          <BDropdownItemButton>Something else here</BDropdownItemButton>
        </BNavItemDropdown>
      </BNavbarNav>
    </BNavbar>
    <!-- #endregion template -->
  </div>
</template>

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
      auto-close="inside"
    >
      <BNavbarNav>
        <BNavItemDropdown
          text="Clickable outside (auto-close=inside)"
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
      auto-close="outside"
    >
      <BNavbarNav>
        <BNavItemDropdown
          text="Clickable inside (auto-close=outside)"
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
      :auto-close="false"
      variant="primary"
    >
      <BNavbarNav>
        <BNavItemDropdown
          text="Manual close (auto-close=false)"
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

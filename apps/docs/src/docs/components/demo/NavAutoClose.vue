<template>
  <div class="d-flex flex-wrap gap-2">
    <!-- #region template -->
    <BNav
      v-b-color-mode="'dark'"
      variant="primary"
    >
      <BNavItemDropdown text="Default Dropdown">
        <BDropdownItemButton>Action</BDropdownItemButton>
        <BDropdownItemButton>Another action</BDropdownItemButton>
        <BDropdownItemButton>Something else here</BDropdownItemButton>
      </BNavItemDropdown>
    </BNav>

    <BNav
      v-b-color-mode="'dark'"
      variant="primary"
      auto-close-dropdowns="inside"
    >
      <BNavItemDropdown
        text="Clickable outside (auto-close-dropdowns=inside)"
        class="me-2"
      >
        <BDropdownItemButton>Action</BDropdownItemButton>
        <BDropdownItemButton>Another action</BDropdownItemButton>
        <BDropdownItemButton>Something else here</BDropdownItemButton>
      </BNavItemDropdown>
    </BNav>
    <BNav
      v-b-color-mode="'dark'"
      variant="primary"
      auto-close-dropdowns="outside"
    >
      <BNavItemDropdown
        text="Clickable inside (auto-close-dropdowns=outside)"
        class="me-2"
      >
        <BDropdownItemButton>Action</BDropdownItemButton>
        <BDropdownItemButton>Another action</BDropdownItemButton>
        <BDropdownItemButton>Something else here</BDropdownItemButton>
      </BNavItemDropdown>
    </BNav>
    <BNav
      v-b-color-mode="'dark'"
      :auto-close-dropdowns="false"
      variant="primary"
    >
      <BNavItemDropdown
        text="Manual close (auto-close-dropdowns=false)"
        class="me-2"
      >
        <BDropdownItemButton>Action</BDropdownItemButton>
        <BDropdownItemButton>Another action</BDropdownItemButton>
        <BDropdownItemButton>Something else here</BDropdownItemButton>
      </BNavItemDropdown>
    </BNav>
    <!-- #endregion template -->
  </div>
</template>

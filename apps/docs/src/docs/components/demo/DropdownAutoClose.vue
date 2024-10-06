<template>
  <div class="d-flex flex-wrap gap-2">
    <!-- #region template -->
    <BDropdown text="Default Dropdown" class="me-2">
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here</BDropdownItemButton>
    </BDropdown>
    <BDropdown text="Clickable outside (auto-close=inside)" auto-close="inside" class="me-2">
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here</BDropdownItemButton>
    </BDropdown>
    <BDropdown text="Clickable inside (auto-close=outside)" auto-close="outside" class="me-2">
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here</BDropdownItemButton>
    </BDropdown>
    <BDropdown text="Manual close (auto-close=false)" :auto-close="false" class="me-2">
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here</BDropdownItemButton>
    </BDropdown>
    <!-- #endregion template -->
  </div>
</template>

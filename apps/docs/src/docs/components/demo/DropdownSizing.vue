<template>
  <!-- #region template -->
  <div class="d-flex flex-wrap gap-2">
    <BDropdown
      size="lg"
      text="Large"
      class="me-2"
    >
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here</BDropdownItemButton>
    </BDropdown>
    <BDropdown
      size="lg"
      split
      text="Large Split"
      class="me-2"
    >
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here...</BDropdownItemButton>
    </BDropdown>
  </div>
  <div class="d-flex flex-wrap gap-2 mt-2">
    <BDropdown
      size="sm"
      text="Small"
      class="me-2"
    >
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here...</BDropdownItemButton>
    </BDropdown>
    <BDropdown
      size="sm"
      split
      text="Small Split"
      class="me-2"
    >
      <BDropdownItemButton>Action</BDropdownItemButton>
      <BDropdownItemButton>Another action</BDropdownItemButton>
      <BDropdownItemButton>Something else here...</BDropdownItemButton>
    </BDropdown>
  </div>
  <!-- #endregion template -->
</template>

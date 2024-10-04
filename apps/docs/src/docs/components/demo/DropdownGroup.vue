<template>
  <!-- #region template -->
  <BDropdown text="Dropdown with group">
    <BDropdownItemButton> Non-grouped Item </BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownGroup header="Group 1">
      <BDropdownItemButton>First Grouped item</BDropdownItemButton>
      <BDropdownItemButton>Second Grouped Item</BDropdownItemButton>
    </BDropdownGroup>
    <BDropdownGroup header="Group 2" header-variant="primary">
      <BDropdownItemButton>First Grouped item</BDropdownItemButton>
      <BDropdownItemButton>Second Grouped Item</BDropdownItemButton>
    </BDropdownGroup>
    <BDropdownDivider />
    <BDropdownItemButton> Another Non-grouped Item </BDropdownItemButton>
  </BDropdown>
  <!-- #endregion template -->
</template>

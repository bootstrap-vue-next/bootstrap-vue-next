<template>
  <!-- #region template -->
  <BDropdown text="Dropdown ARIA" variant="primary">
    <BDropdownHeader id="dropdown-header-1">Groups</BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-1">Add</BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-1">Delete</BDropdownItemButton>
    <BDropdownHeader id="dropdown-header-2">Users</BDropdownHeader>
    <BDropdownItemButton aria-describedby="dropdown-header-2">Add</BDropdownItemButton>
    <BDropdownItemButton aria-describedby="dropdown-header-2">Delete</BDropdownItemButton>
    <BDropdownDivider />
    <BDropdownItemButton>
      Something <strong>not</strong> associated with Users
    </BDropdownItemButton>
  </BDropdown>
  <!-- #endregion template -->
</template>

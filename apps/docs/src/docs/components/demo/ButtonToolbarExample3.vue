<template>
  <!-- #region template -->
  <BButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
    <BButtonGroup class="mx-1">
      <BButton>New</BButton>
      <BButton>Edit</BButton>
      <BButton>Undo</BButton>
    </BButtonGroup>
    <BDropdown class="mx-1" placement="right" text="menu">
      <BDropdownItem>Item 1</BDropdownItem>
      <BDropdownItem>Item 2</BDropdownItem>
      <BDropdownItem>Item 3</BDropdownItem>
    </BDropdown>
    <BButtonGroup class="mx-1">
      <BButton>Save</BButton>
      <BButton>Cancel</BButton>
    </BButtonGroup>
  </BButtonToolbar>
  <!-- #endregion template -->
</template>

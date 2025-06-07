<template>
  <!-- #region template -->
  <BDropdown
    text="Block Level Dropdown"
    variant="primary"
    class="d-grid gap-2 mb-2"
  >
    <BDropdownItem href="#">Action</BDropdownItem>
    <BDropdownItem href="#">Another action</BDropdownItem>
    <BDropdownItem href="#">Something else here</BDropdownItem>
  </BDropdown>
  <div class="d-grid gap-2">
    <BDropdown
      text="Block Level Split Dropdown"
      split
      split-variant="outline-primary"
      variant="primary"
      split-class="w-100"
    >
      <BDropdownItem href="#">Action</BDropdownItem>
      <BDropdownItem href="#">Another action</BDropdownItem>
      <BDropdownItem href="#">Something else here...</BDropdownItem>
    </BDropdown>
  </div>
  <!-- #endregion template -->
</template>

<template>
  <div class="d-flex flex-wrap gap-2">
    <!-- #region template -->
    <BDropdown
      text="Start Aligned (Default)"
      variant="primary"
      class="me-2"
    >
      <BDropdownItem>Action</BDropdownItem>
      <BDropdownItem>Another action</BDropdownItem>
      <BDropdownItem>Something else here</BDropdownItem>
    </BDropdown>
    <BDropdown
      placement="bottom-end"
      text="End Aligned"
      variant="primary"
      class="me-2"
    >
      <BDropdownItem>Action</BDropdownItem>
      <BDropdownItem>Another action</BDropdownItem>
      <BDropdownItem>Something else here</BDropdownItem>
    </BDropdown>
    <BDropdown
      placement="bottom"
      text="Center Aligned"
      variant="primary"
      class="me-2"
    >
      <BDropdownItem>Action</BDropdownItem>
      <BDropdownItem>Another action</BDropdownItem>
      <BDropdownItem>Something else here</BDropdownItem>
    </BDropdown>
    <!-- #endregion template -->
  </div>
</template>
